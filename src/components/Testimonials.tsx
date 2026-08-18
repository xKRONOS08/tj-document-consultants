'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, PanInfo } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, BadgeCheck, Star } from 'lucide-react'
import { useScrollAnimation } from './useScrollAnimation'

// Sourced from verified 5-star Google reviews — written reviews first, priority order
const testimonials = [
  {
    name: 'Vishnu C A',
    role: 'Google Review',
    verified: true,
    rating: 5,
    quote: 'Good service with well experienced writers. Good knowledge about the facts and proper guidance on land registration.',
    highlights: ['well experienced writers'],
  },
  {
    name: 'Jafer P',
    role: 'Google Review',
    verified: true,
    rating: 5,
    quote: 'I sincerely thank you for your valuable guidance and support in preparing the deed document. Your assistance and time are truly appreciated.',
    highlights: ['valuable guidance and support'],
  },
  {
    name: 'Sujatha Das',
    role: 'Google Review',
    verified: true,
    rating: 5,
    quote: 'Excellent people and service!',
    highlights: ['Excellent people and service'],
  },
  {
    name: 'Anagha Nanda',
    role: 'Google Review',
    verified: true,
    rating: 5,
    quote: '',
    highlights: [],
  },
  {
    name: 'Clint John',
    role: 'Google Review',
    verified: true,
    rating: 5,
    quote: '',
    highlights: [],
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function renderQuote(quote: string, highlights: string[]) {
  if (!highlights.length) return quote
  const pattern = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  const parts = quote.split(pattern)
  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="font-semibold text-gray-900">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

function getOffset(i: number, index: number, length: number) {
  let diff = i - index
  if (diff > length / 2) diff -= length
  if (diff < -length / 2) diff += length
  return diff
}

export default function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const length = testimonials.length
  const dragging = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + length) % length)
  }

  // Auto-rotation stays within the written reviews (they lead the array) so the
  // real quotes always get priority; the rating-only cards remain reachable
  // manually via the arrows/dots but aren't cycled to automatically.
  const writtenCount = testimonials.filter((t) => t.quote).length

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1 < writtenCount ? prev + 1 : 0))
    }, 5000)
    return () => clearInterval(id)
  }, [paused, writtenCount])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    dragging.current = false
    if (info.offset.x < -80) go(1)
    else if (info.offset.x > 80) go(-1)
  }

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-50 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <div className="stamp-badge inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            What Clients Say
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by
            <span className="text-gray-600"> Our Clients</span>
          </h2>
        </div>

        <div
          className="relative h-96 sm:h-80"
          style={{ perspective: '1400px' }}
        >
          {testimonials.map((t, i) => {
            const offset = getOffset(i, index, length)
            const abs = Math.abs(offset)
            if (abs > 2) return null
            if (isMobile && abs > 1) return null
            const isCenter = offset === 0
            const xOffset = isMobile ? 60 : 210
            const rotation = isMobile ? -16 : -28

            return (
              <motion.div
                key={t.name + i}
                className={`absolute inset-x-0 top-0 mx-auto h-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 flex flex-col justify-between ${isMobile ? 'w-[84%]' : 'w-full max-w-md'
                  }`}
                style={{ zIndex: 10 - abs, cursor: isCenter ? 'grab' : 'default' }}
                animate={{
                  x: offset * xOffset,
                  rotateY: offset * rotation,
                  scale: 1 - abs * (isMobile ? 0.16 : 0.12),
                  opacity: abs > (isMobile ? 1 : 2) ? 0 : 1 - abs * (isMobile ? 0.55 : 0.3),
                  filter: `blur(${abs * (isMobile ? 2.5 : 1.5)}px)`,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                drag={isCenter ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragStart={() => (dragging.current = true)}
                onDragEnd={handleDragEnd}
                whileTap={isCenter ? { cursor: 'grabbing' } : undefined}
              >
                <div>
                  <div className="flex items-center gap-0.5 mb-3 select-none">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} size={16} className="text-gray-900 fill-gray-900" />
                    ))}
                  </div>
                  {t.quote ? (
                    <>
                      <Quote className="w-8 h-8 text-gray-300" />
                      <p className="text-lg text-gray-700 leading-relaxed my-6 select-none">
                        {renderQuote(t.quote, t.highlights)}
                      </p>
                    </>
                  ) : (
                    <p className="text-lg text-gray-500 leading-relaxed my-6 select-none italic">
                      Rated {t.rating} stars on Google.
                    </p>
                  )}
                </div>
                <div className="flex items-center">
                  <div className="w-11 h-11 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm mr-3 select-none">
                    {initials(t.name)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-900">{t.name}</span>
                      {t.verified && <BadgeCheck className="w-4 h-4 text-gray-500" aria-label="Verified client" />}
                    </div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${i === index ? 'bg-gray-900' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
