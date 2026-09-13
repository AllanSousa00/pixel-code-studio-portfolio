import { CaretRight } from '@phosphor-icons/react/dist/csr/CaretRight'
import { Link } from '@/lib/router'

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="breadcrumbs site-shell" aria-label="Navegação estrutural">
      <ol>
        {items.map((item, index) => <li key={`${item.label}-${index}`}>{index > 0 && <CaretRight aria-hidden="true" />}{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}
      </ol>
    </nav>
  )
}
