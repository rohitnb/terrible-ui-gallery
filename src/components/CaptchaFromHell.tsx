import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { ShieldCheck } from '@phosphor-icons/react'

const impossibleCaptchas = [
  {
    question: 'Select all images containing existential dread',
    options: ['🌅', '🏢', '⏰', '💼', '🌃', '🚗', '📱', '🛏️', '☕'],
  },
  {
    question: 'How many grains of sand are in this beach photo?',
    options: ['7', '42', '∞', '1,847,293', 'Yes', 'Blue', 'Sand'],
  },
  {
    question: 'Solve: ∫(e^x * sin(x))dx',
    options: ['idk', '42', 'e^x(sin(x)-cos(x))/2', 'Give up', 'Call Einstein'],
  },
  {
    question: 'Select all images that contain happiness',
    options: ['💰', '🍕', '🎮', '😴', '🐕', '☀️', '🌈', '🎵', '❤️'],
  },
]

export function CaptchaFromHell() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentCaptcha, setCurrentCaptcha] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [completed, setCompleted] = useState(false)

  const handleSubmit = () => {
    setAttempts(prev => prev + 1)
    
    if (attempts >= 2) {
      setMessage('✓ Fine, you pass. We give up.')
      setTimeout(() => {
        setCompleted(true)
        setIsOpen(false)
      }, 2000)
    } else {
      setMessage('❌ Incorrect. Try again.')
      setTimeout(() => {
        setCurrentCaptcha((prev) => (prev + 1) % impossibleCaptchas.length)
        setSelected([])
        setMessage('')
      }, 1500)
    }
  }

  const handleStart = () => {
    setIsOpen(true)
    setCurrentCaptcha(0)
    setAttempts(0)
    setSelected([])
    setMessage('')
    setCompleted(false)
  }

  const handleOptionToggle = (option: string) => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    )
  }

  const captcha = impossibleCaptchas[currentCaptcha]

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck weight="fill" className="text-primary" />
            Security Verification
          </CardTitle>
          <CardDescription>
            Prove you're human with our advanced CAPTCHA
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-6 bg-muted rounded-lg text-center">
            <p className="text-lg font-medium mb-4">
              {completed ? '✓ Verification Complete!' : 'Click below to verify you\'re human'}
            </p>
            <Button onClick={handleStart} disabled={completed}>
              {completed ? 'Verified ✓' : 'Start Verification'}
            </Button>
          </div>

          {attempts > 0 && (
            <div className="text-xs text-muted-foreground text-center">
              Attempts: {attempts}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Human Verification</DialogTitle>
            <DialogDescription>
              {captcha.question}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-3 gap-3 py-4">
            {captcha.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionToggle(option)}
                className={`aspect-square flex items-center justify-center text-3xl border-2 rounded-lg transition-all ${
                  selected.includes(option)
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {message && (
            <div className={`p-3 rounded-lg text-center text-sm font-medium ${
              message.includes('✓') ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
            }`}>
              {message}
            </div>
          )}

          <Button onClick={handleSubmit} disabled={selected.length === 0 || message !== ''}>
            Verify
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
