'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {LayoutDashboard, PenTool, History, Settings, LogOut, CreditCard} from 'lucide-react'
import {cn} from '@/lib/utils'

const navigation = [
  {name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard},
  {name: 'Builder', href: '/dashboard/builder', icon: PenTool},
  {name: 'Templates', href: '/dashboard/templates', icon: Settings}, // Using Settings icon as placeholder for Templates if needed, or maybe FileText
  {name: 'History', href: '/dashboard/history', icon: History},
  {name: 'Pricing', href: '/pricing', icon: CreditCard},
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white tracking-tighter">Prime Prompt</h1>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              )}
            >
              <Icon className="w-4 h-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-zinc-800">
        <button className="flex items-center gap-3 px-3 py-2 w-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  )
}
