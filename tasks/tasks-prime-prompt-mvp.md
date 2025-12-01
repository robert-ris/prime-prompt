## Relevant Files

- `src/lib/supabase/client.ts` - Supabase client configuration.
- `src/lib/supabase/server.ts` - Supabase server client for Next.js App Router.
- `src/app/login/page.tsx` - Login page.
- `src/app/signup/page.tsx` - Signup page.
- `src/app/dashboard/layout.tsx` - Dashboard layout with sidebar.
- `src/app/dashboard/page.tsx` - Main dashboard view.
- `src/app/dashboard/builder/page.tsx` - Prompt builder page.
- `src/components/prompt-builder/form.tsx` - Main form for prompt generation.
- `src/app/api/generate/route.ts` - API route for calling OpenAI.
- `src/app/dashboard/templates/page.tsx` - Templates management page.
- `src/app/dashboard/history/page.tsx` - History page.
- `src/app/pricing/page.tsx` - Pricing page.
- `src/app/api/webhooks/stripe/route.ts` - Stripe webhook handler.

### Notes

- Ensure all UI components follow the existing dark/premium aesthetic (Tailwind CSS, Geist fonts).
- Use Supabase for backend/auth/DB.
- Use `shadcn/ui` components where possible.

## Tasks

- [x] 0.0 Create feature branch
  - [x] 0.1 Create and checkout branch `feature/mvp-core`
- [x] 1.0 Project Setup & Authentication
  - [x] 1.1 Install dependencies (`@supabase/ssr`, `@supabase/supabase-js`, `lucide-react`, `clsx`, `tailwind-merge`).
  - [x] 1.2 Initialize Shadcn UI (if not already) and add necessary components (button, input, label, card, select, textarea, toast).
  - [x] 1.3 Set up Supabase environment variables and client/server utilities.
  - [x] 1.4 Create Authentication pages (`/login`, `/signup`) with email/password forms.
  - [x] 1.5 Create `AuthContext` or use Supabase Auth Helpers for session management.
  - [x] 1.6 Create database schema migration (users, subscriptions, prompts, templates).
- [x] 2.0 Prompt Builder Feature
  - [x] 2.1 Create `DashboardLayout` with sidebar navigation.
  - [x] 2.2 Implement `PromptBuilder` UI (Idea input, Role/Tone/Format/Platform selectors).
  - [x] 2.3 Create OpenAI API integration (`/api/generate`).
  - [x] 2.4 Connect frontend form to API and display results.
  - [x] 2.5 Implement "Copy to Clipboard" functionality.
- [x] 3.0 Template System
  - [x] 3.1 Create `Templates` page UI (Grid/List view).
  - [x] 3.2 Implement "Save as Template" in Prompt Builder.
  - [x] 3.3 Create API/Server Actions for Template CRUD (Create, Read, Update, Delete).
  - [x] 3.4 Implement Template editing modal.
- [x] 4.0 User Dashboard & History
  - [x] 4.1 Create `History` page UI.
  - [x] 4.2 Implement auto-saving of generated prompts to DB.
  - [x] 4.3 Fetch and display user history (limit 10 for free, unlimited for pro).
  - [x] 4.4 Implement "Reuse" button in history to load into Builder.
- [x] 5.0 Subscription & Payments
  - [x] 5.1 Set up Stripe environment variables.
  - [x] 5.2 Create `Pricing` page with Free/Pro tiers.
  - [x] 5.3 Implement Stripe Checkout flow.
  - [x] 5.4 Create Webhook handler to update `subscriptions` table.
  - [x] 5.5 Implement usage limits middleware/logic (check subscription status before generation).
