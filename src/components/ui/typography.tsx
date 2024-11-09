import { cn } from '@/lib/utils'
import {
  cva,
  type VariantProps
} from 'class-variance-authority'
import React from 'react'

const typographyVariants = cva('text-xl', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7',
      minor: 'text-sm text-zinc-400',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

export function Typography({ className, variant, ...props }: TypographyProps) {
  return <p className={cn(typographyVariants({ variant }), className)} {...props} />
}

export default Typography
