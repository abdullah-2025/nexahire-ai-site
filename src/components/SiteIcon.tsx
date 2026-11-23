import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bookmark,
  Briefcase,
  Check,
  CheckCircle2,
  Clock,
  FileText,
  ListChecks,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Mic,
  Plus,
  Radar,
  Route,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  X,
  type LucideProps,
} from 'lucide-react'

const icons = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  'arrow-up-right': ArrowUpRight,
  bookmark: Bookmark,
  briefcase: Briefcase,
  check: Check,
  'check-circle': CheckCircle2,
  clock: Clock,
  'file-text': FileText,
  'list-checks': ListChecks,
  mail: Mail,
  'map-pin': MapPin,
  menu: Menu,
  'message-square': MessageSquare,
  mic: Mic,
  plus: Plus,
  radar: Radar,
  route: Route,
  search: Search,
  send: Send,
  'shield-check': ShieldCheck,
  sliders: SlidersHorizontal,
  sparkles: Sparkles,
  target: Target,
  'trending-up': TrendingUp,
  user: UserRound,
  x: X,
}

export type IconName = keyof typeof icons

export default function SiteIcon({
  name,
  ...props
}: LucideProps & { name: IconName }) {
  const Icon = icons[name]
  return <Icon aria-hidden="true" data-icon={name} {...props} />
}
