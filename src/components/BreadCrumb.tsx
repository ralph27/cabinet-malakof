'use client'

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb'
import { Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SimpleBreadcrumb = () => {
  const pathname = usePathname()

  const getPageName = () => {
    const path = pathname

    if (path === '/') {
      return null
    }

    const cleanPath = path.substring(1)

    const segments = cleanPath.split('/')
    const lastSegment = segments[segments.length - 1]

    return lastSegment
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase())
  }

  const pageName = getPageName()

  if (pathname === '/') {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-teal-50/50 to-blue-50/50 border-b border-teal-100">
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList className="text-sm">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors font-medium"
                >
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-teal-300 mx-2">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-teal-800 font-semibold">
                {pageName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default SimpleBreadcrumb
