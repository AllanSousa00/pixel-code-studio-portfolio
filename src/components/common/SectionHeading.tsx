import type { ReactNode } from 'react'

export function SectionHeading({ eyebrow, title, text, action }: { eyebrow: string; title: ReactNode; text?: string; action?: ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{text && <p>{text}</p>}{action && <div className="section-heading__action">{action}</div>}</div>
}
