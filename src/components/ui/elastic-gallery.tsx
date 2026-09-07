"use client"

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, GitFork, Pause, Play } from 'lucide-react'
import { useReducedMotion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface ElasticGalleryItem {
  id: string
  title: string
  category: string
  description: string
  src: string
  srcCompact: string
  srcSmall: string
  width: number
  height: number
  alt: string
  href: string
  repo?: string
  tags: string[]
}

interface ElasticGalleryProps {
  items: ElasticGalleryItem[]
  className?: string
  defaultActiveId?: string
}

const AUTOPLAY_DELAY = 4800
const CLOSE_DURATION = 360

export function ElasticGallery({ items, className, defaultActiveId }: ElasticGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultActiveId ?? items[0]?.id ?? null)
  const [paused, setPaused] = useState(false)
  const [switching, setSwitching] = useState(false)
  const reduceMotion = useReducedMotion()
  const switchTimer = useRef<number | null>(null)
  const pendingId = useRef<string | null>(null)

  const switchTo = useCallback((nextId: string) => {
    if (!nextId || (nextId === activeId && !switching) || pendingId.current === nextId) return

    if (switchTimer.current !== null) window.clearTimeout(switchTimer.current)

    if (reduceMotion) {
      pendingId.current = null
      setSwitching(false)
      setActiveId(nextId)
      return
    }

    pendingId.current = nextId
    setSwitching(true)
    setActiveId(null)

    switchTimer.current = window.setTimeout(() => {
      setActiveId(nextId)
      setSwitching(false)
      pendingId.current = null
      switchTimer.current = null
    }, CLOSE_DURATION)
  }, [activeId, reduceMotion, switching])

  useEffect(() => () => {
    if (switchTimer.current !== null) window.clearTimeout(switchTimer.current)
  }, [])

  useEffect(() => {
    if (paused || switching || !activeId || items.length < 2) return

    const timeout = window.setTimeout(() => {
      const currentIndex = items.findIndex((item) => item.id === activeId)
      const nextId = items[(currentIndex + 1 + items.length) % items.length]?.id
      if (nextId) switchTo(nextId)
    }, AUTOPLAY_DELAY)

    return () => window.clearTimeout(timeout)
  }, [activeId, items, paused, switchTo, switching])

  const activateFromPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'touch') return

    const target = document.elementFromPoint(event.clientX, event.clientY)
    const item = target?.closest<HTMLElement>('[data-gallery-id]')
    if (item?.dataset.galleryId) switchTo(item.dataset.galleryId)
  }

  return (
    <div
      className={cn('elastic-gallery', switching && 'is-switching', className)}
      onPointerMove={activateFromPointer}
      aria-label="Galeria de projetos publicados"
      aria-busy={switching}
    >
      <div className="elastic-gallery__track">
        {items.map((item) => {
          const active = activeId === item.id

          return (
            <article
              key={item.id}
              data-gallery-id={item.id}
              className={cn('elastic-gallery__item', active ? 'is-active' : 'is-inactive')}
              onPointerEnter={() => switchTo(item.id)}
              onPointerDown={() => switchTo(item.id)}
              onFocus={() => switchTo(item.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  switchTo(item.id)
                }
              }}
              tabIndex={0}
              aria-expanded={active}
              aria-label={`${item.id}. ${item.title}`}
            >
              <div className="elastic-gallery__media">
                <img
                  src={item.src}
                  srcSet={`${item.srcCompact} 480w, ${item.srcSmall} 720w, ${item.src} ${item.width}w`}
                  sizes="(max-width: 700px) calc(100vw - 32px), 70vw"
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading={active ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="elastic-gallery__overlay" aria-hidden="true" />
              </div>

              <div className="elastic-gallery__content">
                <div className="elastic-gallery__active-content" aria-hidden={!active}>
                  <span className="elastic-gallery__category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul aria-label="Tecnologias e características">
                    {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="elastic-gallery__actions">
                    <a href={item.href} target="_blank" rel="noreferrer" tabIndex={active ? 0 : -1} aria-label={`Ver projeto ${item.title}`}>
                      Ver projeto <ArrowUpRight aria-hidden="true" />
                    </a>
                    {item.repo && (
                      <a className="elastic-gallery__repo" href={item.repo} target="_blank" rel="noreferrer" tabIndex={active ? 0 : -1} aria-label={`Ver código de ${item.title}`}>
                        <GitFork aria-hidden="true" /> Código
                      </a>
                    )}
                  </div>
                </div>

                <div className="elastic-gallery__inactive-content" aria-hidden={active}>
                  <span className="elastic-gallery__vertical-title">{item.title}</span>
                  <span className="elastic-gallery__mobile-id">{item.id} · {item.title}</span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      <div className="elastic-gallery__footer">
        <p className="elastic-gallery__hint">A galeria avança sozinha. Passe o ponteiro ou deslize para escolher.</p>
        <button type="button" onClick={() => setPaused((current) => !current)} aria-label={paused ? 'Continuar apresentação automática' : 'Pausar apresentação automática'}>
          {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          {paused ? 'Continuar' : 'Pausar'}
        </button>
      </div>
    </div>
  )
}

export default ElasticGallery
