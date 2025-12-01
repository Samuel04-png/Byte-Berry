import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:to-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        destructive:
          "bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground hover:from-destructive/90 hover:to-red-600/90 shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 hover:text-white shadow-md hover:shadow-lg hover:shadow-primary/30 hover:scale-105 hover:-translate-y-0.5 transition-all",
        secondary:
          "bg-gradient-to-r from-secondary to-cyan-500 text-secondary-foreground hover:from-secondary/90 hover:to-cyan-500/90 shadow-lg hover:shadow-xl",
        ghost: "hover:bg-primary/10 hover:text-primary hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline font-semibold hover:text-primary/80",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-lg px-10 text-base font-bold",
        icon: "h-11 w-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

