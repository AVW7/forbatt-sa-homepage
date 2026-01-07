"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface MegaMenuItem {
  label: string
  href: string
}

interface MegaMenuProps {
  title: string
  items: MegaMenuItem[]
  mainHref?: string // Added optional main page link
}

export function MegaMenu({ title, items, mainHref }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="flex items-center gap-1 text-sm font-medium hover:text-(--color-fb-red) transition-colors">
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-md shadow-lg p-4">
          <div className="space-y-2">
            {mainHref && (
              <>
                <a
                  href={mainHref}
                  className="block px-4 py-2 rounded-md font-semibold text-(--color-fb-red) hover:bg-muted transition-colors"
                >
                  Overview
                </a>
                <div className="border-t my-2" />
              </>
            )}
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 rounded-md hover:bg-muted transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
