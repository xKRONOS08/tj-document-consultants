'use client'

import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'

// Business hours (IST): Mon-Fri 9:30-18:00, Sat 10:00-16:00, Sun closed
const HOURS: Record<number, [number, number] | null> = {
  0: null, // Sunday
  1: [9.5, 18],
  2: [9.5, 18],
  3: [9.5, 18],
  4: [9.5, 18],
  5: [9.5, 18],
  6: [10, 16],
}

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function getIstNow() {
  const now = new Date()
  const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
  return new Date(istString)
}

function formatHour(h: number) {
  const hour = Math.floor(h)
  const minute = h % 1 === 0.5 ? '30' : '00'
  const period = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 === 0 ? 12 : hour % 12
  return `${displayHour}:${minute} ${period}`
}

function computeStatus() {
  const ist = getIstNow()
  const day = ist.getDay()
  const hourDecimal = ist.getHours() + ist.getMinutes() / 60
  const todayHours = HOURS[day]

  if (todayHours && hourDecimal >= todayHours[0] && hourDecimal < todayHours[1]) {
    return { open: true, message: `Open now · Closes ${formatHour(todayHours[1])}` }
  }

  // find next open day
  for (let offset = 0; offset <= 7; offset++) {
    const nextDay = (day + offset) % 7
    const nextHours = HOURS[nextDay]
    if (!nextHours) continue
    if (offset === 0 && hourDecimal < nextHours[0]) {
      return { open: false, message: `Closed · Opens today ${formatHour(nextHours[0])}` }
    }
    if (offset > 0) {
      const label = offset === 1 ? 'tomorrow' : DAY_NAMES[nextDay]
      return { open: false, message: `Closed · Opens ${label} ${formatHour(nextHours[0])}` }
    }
  }
  return { open: false, message: 'Closed' }
}

export default function OfficeStatus() {
  const [status, setStatus] = useState<{ open: boolean; message: string } | null>(null)

  useEffect(() => {
    setStatus(computeStatus())
    const id = setInterval(() => setStatus(computeStatus()), 60000)
    return () => clearInterval(id)
  }, [])

  if (!status) return null

  return (
    <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-xl p-6 rounded-2xl flex items-center gap-4">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 flex-shrink-0">
        <Clock className="w-5 h-5 text-gray-700" />
        <span
          className={`absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${status.open ? 'bg-green-500' : 'bg-gray-400'
            }`}
        >
          {status.open && (
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping" />
          )}
        </span>
      </div>
      <div>
        <div className={`font-semibold ${status.open ? 'text-green-700' : 'text-gray-700'}`}>
          {status.open ? 'Open now' : 'Currently closed'}
        </div>
        <div className="text-sm text-gray-500">{status.message}</div>
      </div>
    </div>
  )
}
