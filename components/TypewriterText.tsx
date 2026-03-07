'use client'

import { useState, useEffect, useRef } from 'react'

interface TypewriterTextProps {
  texts: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export function TypewriterText({
  texts,
  className = '',
  speed = 75,
  deleteSpeed = 35,
  pauseDuration = 2200,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (isPaused) return

    const currentText = texts[textIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setIsPaused(true)
          pauseTimer.current = setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, pauseDuration)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, isPaused, textIndex, texts, speed, deleteSpeed, pauseDuration])

  useEffect(() => {
    return () => {
      if (pauseTimer.current) clearTimeout(pauseTimer.current)
    }
  }, [])

  return (
    <span className={className}>
      {displayText}
      <span className="typewriter-cursor" />
    </span>
  )
}
