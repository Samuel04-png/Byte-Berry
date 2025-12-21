import { CALENDLY_URL } from '@/utils/constants'

export function Footer() {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Byte&Berry. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="https://byteandberry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Visit Website
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Book a Call
            </a>
            <a
              href="mailto:hello@byteandberry.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

