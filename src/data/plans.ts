/*
 * Plan catalog. Names, prices and features MUST match the app's
 * frontend/app/(protected)/dashboard/components/billing-plans.ts, which in turn
 * matches CATALOG in backend/app/services/billing.py. Prices are USD.
 */
export type BillingInterval = 'month' | 'year'

export type Plan = {
  id: 'free' | 'pro' | 'premium'
  name: string
  tagline: string
  /** Whole-dollar amount charged per interval; null for the free plan. */
  prices: Record<BillingInterval, number> | null
  features: string[]
  /** Index of the feature that differs between plans, shown emphasized. */
  highlight: number
  cta: string
  featured?: boolean
}

export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Student Free',
    tagline: 'Everything you need to start practicing',
    prices: null,
    features: ['CV builder', 'AI CV analysis', 'Career roadmap', '2 mock interviews per week'],
    highlight: 3,
    cta: 'Start free',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'More practice',
    prices: { month: 10, year: 96 },
    features: ['CV builder', 'AI CV analysis', 'Career roadmap', '5 mock interviews per day'],
    highlight: 3,
    cta: 'Choose Pro',
    featured: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'No daily cap',
    prices: { month: 20, year: 192 },
    features: ['CV builder', 'AI CV analysis', 'Career roadmap', 'Unlimited mock interviews'],
    highlight: 3,
    cta: 'Choose Premium',
  },
]
