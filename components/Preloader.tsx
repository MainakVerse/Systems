'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [stage, setStage] = useState(0)
  // 0 = saber slashing  |  1 = halves flying apart  |  2 = done / unmount

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 700)   // saber done → fly
    const t2 = setTimeout(() => setStage(2), 1900)  // fly done → unmount
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (stage === 2) return null

  return (
    <div className="preloader-root" aria-hidden="true">
      {/* Upper panel – above the diagonal cut. Logo inside gets clipped to this half. */}
      <div className={`preloader-upper${stage >= 1 ? ' preloader-upper--exit' : ''}`}>
        <div className="preloader-logo"><span>6ystems</span></div>
      </div>

      {/* Lower panel – below the diagonal cut. Logo inside gets clipped to this half. */}
      <div className={`preloader-lower${stage >= 1 ? ' preloader-lower--exit' : ''}`}>
        <div className="preloader-logo"><span>6ystems</span></div>
      </div>

      {/* Saber wrapper: anchored at screen centre, rotated to match the cut angle.
          The inner beam translates along the rotated axis so it sweeps exactly
          along the diagonal cut line through the text. */}
      <div className="preloader-saber-wrap">
        <div className="preloader-saber" />
      </div>
    </div>
  )
}
