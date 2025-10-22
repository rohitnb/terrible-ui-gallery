import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Plus } from '@phosphor-icons/react'

export function VolumeSliderPhone() {
  const [digits, setDigits] = useState<number[]>([])
  const [currentDigit, setCurrentDigit] = useState([5])

  const addDigit = () => {
    if (digits.length < 10) {
      setDigits([...digits, currentDigit[0]])
      setCurrentDigit([Math.floor(Math.random() * 10)])
    }
  }

  const clearDigits = () => {
    setDigits([])
    setCurrentDigit([5])
  }

  const formattedNumber = () => {
    if (digits.length === 0) return ''
    const digitStr = digits.join('')
    if (digitStr.length <= 3) return digitStr
    if (digitStr.length <= 6) return `(${digitStr.slice(0, 3)}) ${digitStr.slice(3)}`
    return `(${digitStr.slice(0, 3)}) ${digitStr.slice(3, 6)}-${digitStr.slice(6)}`
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Phone weight="fill" className="text-primary" />
          Phone Number Entry
        </CardTitle>
        <CardDescription>
          Use the volume slider to dial each digit of your phone number
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Current Digit: {currentDigit[0]}</label>
            <span className="text-xs text-muted-foreground">{digits.length}/10 digits</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">🔇</span>
            <Slider
              value={currentDigit}
              onValueChange={setCurrentDigit}
              min={0}
              max={9}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground">🔊</span>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={addDigit}
              disabled={digits.length >= 10}
              className="flex-1"
            >
              <Plus className="mr-2" />
              Add Digit
            </Button>
            <Button onClick={clearDigits} variant="outline">
              Clear
            </Button>
          </div>
        </div>

        <div className="p-4 bg-muted rounded-lg text-center min-h-[60px] flex items-center justify-center">
          <span className="text-2xl font-mono tracking-wider">
            {formattedNumber() || 'No digits entered'}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
