'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
    threshold?: number
    rootMargin?: string
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
    const { threshold = 0.1, rootMargin = '0px' } = options
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update visibility based on whether element is intersecting
                // This allows fade in when scrolling down AND fade out when scrolling up
                setIsVisible(entry.isIntersecting)
            },
            { threshold, rootMargin }
        )

        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [threshold, rootMargin])

    return { ref, isVisible }
}
