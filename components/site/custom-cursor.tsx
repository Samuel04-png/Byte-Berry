'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null)
  const coreRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      'ontouchstart' in window ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return
    }

    let isMounted = true
    let cleanupTicker: (() => void) | null = null

    const initializeCursor = async () => {
      const gsapPackage = await import('gsap')
      const gsap = gsapPackage.gsap || gsapPackage.default || gsapPackage

      if (!isMounted || !coreRef.current || !ringRef.current || !textRef.current) {
        return
      }

      const core = coreRef.current
      const ring = ringRef.current
      const text = textRef.current
      const root = rootRef.current

      const setCoreX = gsap.quickSetter(core, 'x', 'px')
      const setCoreY = gsap.quickSetter(core, 'y', 'px')
      const setRingX = gsap.quickSetter(ring, 'x', 'px')
      const setRingY = gsap.quickSetter(ring, 'y', 'px')
      const setCoreOpacity = gsap.quickSetter(core, 'opacity')
      const setRingOpacity = gsap.quickSetter(ring, 'opacity')
      const setRootOpacity = gsap.quickSetter(root, 'opacity')

      let mouseX = window.innerWidth / 2
      let mouseY = window.innerHeight / 2
      let ringX = mouseX
      let ringY = mouseY

      document.documentElement.classList.add('has-custom-cursor')
      setRootOpacity(0)
      setCoreOpacity(0)
      setRingOpacity(0)

      const setCursorState = (state: 'default' | 'link' | 'card') => {
        ring.dataset.state = state
        text.textContent = state === 'card' ? 'VIEW ->' : ''
      }

      const onPointerMove = (event: PointerEvent) => {
        mouseX = event.clientX
        mouseY = event.clientY
        setRootOpacity(1)
        setCoreOpacity(1)
        setRingOpacity(1)
      }

      const onPointerLeave = () => {
        setCoreOpacity(0)
        setRingOpacity(0)
      }

      const onPointerOver = (event: Event) => {
        const target = event.target instanceof Element ? event.target : null
        if (!target) {
          setCursorState('default')
          return
        }

        const hovered = target.closest('[data-cursor], a, button')

        if (!hovered) {
          setCursorState('default')
          return
        }

        if (hovered.getAttribute('data-cursor') === 'card') {
          setCursorState('card')
          return
        }

        setCursorState('link')
      }

      const tick = () => {
        ringX += (mouseX - ringX) * 0.15
        ringY += (mouseY - ringY) * 0.15

        setCoreX(mouseX)
        setCoreY(mouseY)
        setRingX(ringX)
        setRingY(ringY)
      }

      gsap.ticker.add(tick)
      cleanupTicker = () => gsap.ticker.remove(tick)

      window.addEventListener('pointermove', onPointerMove, { passive: true })
      window.addEventListener('pointerleave', onPointerLeave)
      document.addEventListener('pointerover', onPointerOver)

      return () => {
        window.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('pointerleave', onPointerLeave)
        document.removeEventListener('pointerover', onPointerOver)
      }
    }

    let detachListeners: (() => void) | void

    initializeCursor().then((cleanup) => {
      detachListeners = cleanup
    })

    return () => {
      isMounted = false
      cleanupTicker?.()
      if (typeof detachListeners === 'function') {
        detachListeners()
      }
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <div ref={rootRef} aria-hidden="true" className="bb-cursor-root hidden md:block">
      <div ref={coreRef} className="bb-cursor-core" />
      <div ref={ringRef} className="bb-cursor-ring" data-state="default">
        <span ref={textRef} className="bb-cursor-text" />
      </div>
    </div>
  )
}
