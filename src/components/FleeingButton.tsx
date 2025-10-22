import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PaperPlaneRight } from '@phosphor-icons/react'

export function FleeingButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [escapeCount, setEscapeCount] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (submitted) return
    
    if (escapeCount < 6) {
      if (containerRef.current) {
        const container = containerRef.current.getBoundingClientRect()
        const maxX = container.width - 120
        const maxY = container.height - 40
        
        const newX = Math.random() * maxX
        const newY = Math.random() * maxY
        
        setPosition({ x: newX, y: newY })
        setEscapeCount(prev => prev + 1)
      }
    }
  }

  const handleClick = () => {
    if (escapeCount >= 6) {
      setSubmitted(true)
    }
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
    setEscapeCount(0)
    setSubmitted(false)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PaperPlaneRight weight="fill" className="text-primary" />
          Submit Your Form
        </CardTitle>
        <CardDescription>
          Try to click the submit button... if you can catch it
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div 
          ref={containerRef}
          className="relative h-[200px] bg-muted rounded-lg overflow-hidden"
        >
          {!submitted ? (
            <Button
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              onClick={handleClick}
              className="absolute fleeing-button"
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
              }}
            >
              Submit
            </Button>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-lg font-medium text-success">✓ Form Submitted!</p>
                <Button onClick={reset} variant="outline" size="sm">
                  Try Again
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Escape count: {escapeCount}/6</span>
          <span className="text-xs text-muted-foreground">
            {escapeCount < 6 ? 'Keep trying...' : 'You can click it now!'}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
