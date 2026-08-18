export default function SwipeText({ text, staggerMs = 25 }: { text: string; staggerMs?: number }) {
  return (
    <span className="inline-flex">
      {text.split('').map((char, i) => {
        const fromTop = i % 2 === 0
        const delay = `${i * staggerMs}ms`
        return (
          <span key={i} className="relative inline-block h-[1em] leading-none overflow-hidden align-top">
            <span
              className={`block leading-none transition-transform duration-300 ease-in-out ${fromTop ? 'group-hover:-translate-y-full' : 'group-hover:translate-y-full'
                }`}
              style={{ transitionDelay: delay }}
            >
              {char === ' ' ? ' ' : char}
            </span>
            <span
              className={`absolute inset-0 block leading-none transition-transform duration-300 ease-in-out ${fromTop ? 'translate-y-full group-hover:translate-y-0' : '-translate-y-full group-hover:translate-y-0'
                }`}
              style={{ transitionDelay: delay }}
            >
              {char === ' ' ? ' ' : char}
            </span>
          </span>
        )
      })}
    </span>
  )
}
