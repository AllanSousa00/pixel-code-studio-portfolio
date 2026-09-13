import { ChatCircleDots } from '@phosphor-icons/react/dist/csr/ChatCircleDots'
import { Link } from '@/lib/router'

export function MobileCTA() {
  return <Link className="mobile-sticky-cta" href="/contato"><ChatCircleDots weight="fill" aria-hidden="true" /> Falar sobre um projeto</Link>
}
