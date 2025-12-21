import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export function AppBar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { label: 'About', path: '/about' },
    { label: 'Services & Pricing', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => {
    if (path === '/case-studies') {
      return location.pathname.startsWith('/case-studies')
    }
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-1 sm:space-x-2">
          <span className="text-xl sm:text-2xl font-bold">
            <span className="text-foreground">Byte</span>
            <span className="text-primary">&</span>
            <span className="text-foreground">Berry</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-sm font-semibold transition-colors ${
                isActive(item.path)
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-base font-semibold transition-colors ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

