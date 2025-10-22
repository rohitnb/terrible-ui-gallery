import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { HourglassHigh } from '@phosphor-icons/react'

export function LyingProgressBar() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const startLoading = () => {
    setIsLoading(true)
    setProgress(0)
    setMessage('Loading...')

    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 1

      if (currentProgress === 10) {
        setProgress(50)
        setMessage('Loading quickly...')
      } else if (currentProgress === 15) {
        setProgress(20)
        setMessage('Wait, going backwards...')
      } else if (currentProgress === 20) {
        setProgress(15)
      } else if (currentProgress === 25) {
        setProgress(30)
        setMessage('Calculating...')
      } else if (currentProgress === 35) {
        setProgress(75)
        setMessage('Almost there!')
      } else if (currentProgress === 40) {
        setProgress(45)
        setMessage('Just kidding...')
      } else if (currentProgress === 50) {
        setProgress(99)
        setMessage('99% complete...')
      } else if (currentProgress === 80) {
        setProgress(100)
        setMessage('Complete!')
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        clearInterval(interval)
      }
    }, 300)
  }

  const reset = () => {
    setProgress(0)
    setIsLoading(false)
    setMessage('')
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HourglassHigh weight="fill" className="text-primary" />
          File Upload Progress
        </CardTitle>
        <CardDescription>
          Watch our totally accurate progress indicator
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{message || 'Ready to load'}</span>
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {progress === 99 && isLoading && (
            <div className="text-center text-sm text-muted-foreground animate-pulse">
              Stuck at 99%... this might take a while...
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <Button 
            onClick={startLoading} 
            disabled={isLoading}
            className="flex-1"
          >
            {isLoading ? 'Loading...' : 'Start Upload'}
          </Button>
          {!isLoading && progress > 0 && (
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
