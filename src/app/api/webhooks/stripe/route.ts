import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')!

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`)
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 })
  }

  const supabase = await createClient()

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object
      const customerId = session.customer
      const subscriptionId = session.subscription

      // Update subscription in database
      await supabase
        .from('subscriptions')
        .update({
          stripe_subscription_id: subscriptionId,
          status: 'active',
        })
        .eq('stripe_customer_id', customerId)
      break

    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      const subscription = event.data.object
      await supabase
        .from('subscriptions')
        .update({
          status: subscription.status,
          current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        })
        .eq('stripe_subscription_id', subscription.id)
      break

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return new NextResponse(null, { status: 200 })
}
