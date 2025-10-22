import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Warning } from '@phosphor-icons/react'

export function InvertedButtons() {
  const [swapped, setSwapped] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [confirmed, setConfirmed] = useState(false)
  const [message, setMessage] = useState('')

  const handleClick = (answer: 'yes' | 'no') => {
    setClickCount(prev => prev + 1)
    
    if (clickCount < 3) {
      setSwapped(!swapped)
      setMessage(answer === 'yes' ? '❌ Wait, are you sure?' : '✓ Wait, really?')
    } else {
      setConfirmed(true)
      setMessage(`You chose: ${answer.toUpperCase()}! (after ${clickCount + 1} attempts)`)
    }
  }

  const reset = () => {
    setSwapped(false)
    setClickCount(0)
    setConfirmed(false)
    setMessage('')
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Warning weight="fill" className="text-accent" />
          Confirmation Dialog
        </CardTitle>
        <CardDescription>
          Colors and positions designed to confuse you
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-6 bg-muted rounded-lg text-center">
          <p className="text-lg font-medium mb-4">
            Do you want to delete all your files?
          </p>
          
          {!confirmed ? (
            <div className={`flex gap-4 justify-center transition-all duration-300 ${swapped ? 'flex-row-reverse' : ''}`}>
              <Button
                onClick={() => handleClick('yes')}
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground min-w-[100px]"
              >
                Yes
              </Button>
              <Button
                onClick={() => handleClick('no')}
                className="bg-success hover:bg-success/90 text-success-foreground min-w-[100px]"
              >
                No
              </Button>
            </div>
          ) : (
            <Button onClick={reset} variant="outline">
              Try Again
            </Button>
          )}
        </div>

        {message && (
          <div className="p-4 bg-accent/10 border border-accent rounded-lg text-center">
            <p className="font-medium">{message}</p>
          </div>
        )}

        <div className="text-xs text-muted-foreground text-center">
          Attempts: {clickCount}
        </div>
      </CardContent>
    </Card>
  )
}
