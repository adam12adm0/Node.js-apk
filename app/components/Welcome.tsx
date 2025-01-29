"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Welcome() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-primary z-50"
    >
      <h1 className="text-4xl font-bold text-white">مرحباً بك في دورة بايثون</h1>
    </motion.div>
  )
}

