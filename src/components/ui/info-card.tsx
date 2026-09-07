import React, { useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'

import { cn } from '@/lib/utils'

function isRTL(text: string) {
  return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text)
}

export interface InfoCardProps {
  image: string
  imageAlt?: string
  title: string
  description: string
  className?: string
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
  borderColor?: string
  borderBgColor?: string
  borderWidth?: number
  borderPadding?: number
  cardBgColor?: string
  shadowColor?: string
  patternColor1?: string
  patternColor2?: string
  textColor?: string
  hoverTextColor?: string
  fontFamily?: string
  rtlFontFamily?: string
  effectBgColor?: string
  contentPadding?: string
}

export const InfoCard: React.FC<InfoCardProps> = ({
  image,
  imageAlt,
  title,
  description,
  className,
  width = '100%',
  height = '100%',
  borderColor = '#DAFF3E',
  borderBgColor = '#242424',
  borderWidth = 3,
  borderPadding = 14,
  cardBgColor = '#000',
  shadowColor = 'rgba(0, 0, 0, 0.45)',
  patternColor1 = 'rgba(230,230,230,0.12)',
  patternColor2 = 'rgba(240,240,240,0.12)',
  textColor = '#f5f5f5',
  hoverTextColor = '#161616',
  fontFamily = "'Roboto Mono', monospace",
  rtlFontFamily = "'Montserrat', sans-serif",
  effectBgColor = '#DAFF3E',
  contentPadding = '18px 20px 20px',
}) => {
  const [hovered, setHovered] = useState(false)
  const borderRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === 'touch') return

    const border = borderRef.current
    if (!border) return

    const rect = border.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    border.style.setProperty('--rotation', `${Math.atan2(y, x)}rad`)
  }

  const resetInteraction = () => {
    setHovered(false)
    borderRef.current?.style.setProperty('--rotation', '0deg')
  }

  const rtl = isRTL(title) || isRTL(description)
  const effectiveFont = rtl ? rtlFontFamily : fontFamily
  const titleDirection = isRTL(title) ? 'rtl' : 'ltr'
  const descDirection = isRTL(description) ? 'rtl' : 'ltr'
  const pattern =
    `linear-gradient(45deg, ${patternColor1} 25%, transparent 25%, transparent 75%, ${patternColor2} 75%),` +
    `linear-gradient(-45deg, ${patternColor2} 25%, transparent 25%, transparent 75%, ${patternColor1} 75%)`
  const borderGradient = `conic-gradient(from var(--rotation, 0deg), ${borderColor} 0deg, ${borderColor} 90deg, ${borderBgColor} 90deg, ${borderBgColor} 360deg)`

  return (
    <div
      ref={borderRef}
      className={cn('info-card', className)}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={resetInteraction}
      onFocus={() => setHovered(true)}
      onBlur={resetInteraction}
      style={{
        width,
        height,
        border: `${borderWidth}px solid transparent`,
        borderRadius: '1em',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        backgroundImage: `linear-gradient(${cardBgColor}, ${cardBgColor}), ${borderGradient}`,
        padding: borderPadding,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        transition: reduceMotion ? 'none' : 'box-shadow 0.3s ease, transform 0.3s ease',
        position: 'relative',
        fontFamily: effectiveFont,
        boxShadow: hovered ? `0 28px 76px ${shadowColor}` : '0 14px 45px rgba(0,0,0,.18)',
      } as React.CSSProperties}
    >
      <div
        className="info-card__inner"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 'calc(1em - 4px)',
          background: cardBgColor,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          backgroundImage: pattern,
          backgroundSize: '20.84px 20.84px',
        }}
      >
        <div className="info-card__media">
          <img
            src={image}
            alt={imageAlt ?? title}
            width="1440"
            height="900"
            loading="lazy"
          />
        </div>

        <div className="info-card__content" style={{ padding: contentPadding }}>
          <h3
            className="info-card__title"
            style={{
              color: hovered ? hoverTextColor : textColor,
              direction: titleDirection,
              transition: reduceMotion ? 'none' : 'color 0.3s ease',
            }}
          >
            <span>{title}</span>
            <span
              aria-hidden="true"
              className="info-card__title-effect"
              style={{
                clipPath: hovered
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                  : 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
                transition: reduceMotion ? 'none' : 'clip-path cubic-bezier(.1,.5,.5,1) 0.4s',
                backgroundColor: effectBgColor,
              }}
            />
          </h3>

          <p className="info-card__description" style={{ color: textColor, direction: descDirection }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
