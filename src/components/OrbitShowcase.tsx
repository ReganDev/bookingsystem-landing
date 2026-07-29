import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import salonWash from '../assets/photos/salon-wash.jpg'
import salonBlowdry from '../assets/photos/salon-blowdry.jpg'
import salonStyle from '../assets/photos/salon-style.jpg'

/* ---- Service glyphs (Lucide-style strokes) ---- */
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const Scissors = () => (
  <svg viewBox="0 0 24 24" {...stroke}>
    <circle cx="6" cy="6" r="2.4" />
    <circle cx="6" cy="18" r="2.4" />
    <path d="M8.1 7.6 20 18M8.1 16.4 20 6" />
  </svg>
)
const Sparkle = () => (
  <svg viewBox="0 0 24 24" {...stroke}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
  </svg>
)
const Stethoscope = () => (
  <svg viewBox="0 0 24 24" {...stroke}>
    <path d="M5 3v5a4 4 0 0 0 8 0V3" />
    <path d="M9 16.5a5 5 0 0 0 10 0V14" />
    <circle cx="19" cy="12" r="2" />
  </svg>
)

/* ---- Orbit data: distributed across three counter-rotating tracks ---- */
type Avatar = { type: 'avatar'; initials: string; color: string; a: string; r: string }
type Tile = { type: 'tile'; icon: ReactNode; a: string; r: string }
type Item = Avatar | Tile

const tracks: { dur: string; dir?: 'ccw'; items: Item[] }[] = [
  {
    dur: '48s',
    items: [
      { type: 'avatar', initials: 'EM', color: '#047857', a: '18deg', r: '46cqmin' },
      { type: 'tile', icon: <Scissors />, a: '142deg', r: '46cqmin' },
      { type: 'avatar', initials: 'RP', color: '#065f46', a: '256deg', r: '46cqmin' },
    ],
  },
  {
    dur: '36s',
    dir: 'ccw',
    items: [
      { type: 'tile', icon: <Sparkle />, a: '74deg', r: '35cqmin' },
      { type: 'avatar', initials: 'JD', color: '#064e3b', a: '196deg', r: '35cqmin' },
      { type: 'tile', icon: <Stethoscope />, a: '314deg', r: '35cqmin' },
    ],
  },
]

function OrbitItem({ item }: { item: Item }) {
  const node =
    item.type === 'avatar' ? (
      <div className="orbit-avatar" style={{ backgroundColor: item.color }}>
        {item.initials}
      </div>
    ) : (
      <div className="orbit-tile">{item.icon}</div>
    )

  return (
    <div className="orbit-item" style={{ '--a': item.a, '--r': item.r } as CSSProperties}>
      <div className="orbit-node">{node}</div>
    </div>
  )
}

const photos = [
  { src: salonWash, alt: 'A stylist washing a client’s hair at a salon basin' },
  { src: salonBlowdry, alt: 'A smiling client relaxing with a coffee during a blow-dry' },
  { src: salonStyle, alt: 'A stylist finishing a client’s hair with styling spray' },
]

export default function OrbitShowcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % photos.length)
    }, 3800)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="orbit" role="img" aria-label="Clients booking salon appointments around the clock with BookingBase">
      <div className="orbit-halo" aria-hidden="true" />
      <div className="orbit-rings" aria-hidden="true">
        <div className="orbit-ring orbit-ring--outer" />
        <div className="orbit-ring orbit-ring--mid" />
        <div className="orbit-ring orbit-ring--inner" />
      </div>

      {tracks.map((track, i) => (
        <div
          key={i}
          className={`orbit-track${track.dir === 'ccw' ? ' orbit-track--ccw' : ''}`}
          style={{ '--dur': track.dur } as CSSProperties}
          aria-hidden="true"
        >
          {track.items.map((item, j) => (
            <OrbitItem key={j} item={item} />
          ))}
        </div>
      ))}

      <div className="orbit-core-ring" aria-hidden="true" />
      <div className="orbit-core">
        {photos.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className={`orbit-photo${i === active ? ' is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </div>
  )
}
