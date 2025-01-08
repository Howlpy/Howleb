'use client'

import React, { useEffect, useRef } from 'react'

interface Vector {
  x: number
  y: number
  dx: number
  dy: number
}

const VectorAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const vectors: Vector[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      vectors.forEach((v, i) => {
        v.x += v.dx
        v.y += v.dy

        if (v.x < 0 || v.x > canvas.width) v.dx *= -1
        if (v.y < 0 || v.y > canvas.height) v.dy *= -1

        ctx.beginPath()
        ctx.arc(v.x, v.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        ctx.fill()

        vectors.slice(i + 1).forEach((v2) => {
          const distance = Math.hypot(v.x - v2.x, v.y - v2.y)
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(v.x, v.y)
            ctx.lineTo(v2.x, v2.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

export default VectorAnimation

