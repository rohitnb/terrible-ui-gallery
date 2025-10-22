import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { User } from '@phosphor-icons/react'

const wrongSuggestions = [
  'Bob Smith',
  'Robert Smithson', 
  'Rob Smythe',
  'Bobby Smithers',
  'Roberto Smithereens'
]

export function AutocompleteAutocorrupt() {
  const [name, setName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [corruptionCount, setCorruptionCount] = useState(0)
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    if (name.length > 3 && corruptionCount < 4) {
      const timer = setTimeout(() => {
        const corrupted = wrongSuggestions[corruptionCount % wrongSuggestions.length]
        setDisplayName(corrupted)
        setCorruptionCount(prev => prev + 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [name, corruptionCount])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
    setDisplayName(value)
    setShowSuggestions(value.length > 2)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setDisplayName(suggestion)
    setShowSuggestions(false)
    setTimeout(() => {
      setDisplayName(wrongSuggestions[Math.floor(Math.random() * wrongSuggestions.length)])
    }, 500)
  }

  const reset = () => {
    setName('')
    setDisplayName('')
    setCorruptionCount(0)
    setShowSuggestions(false)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User weight="fill" className="text-primary" />
          Enter Your Name
        </CardTitle>
        <CardDescription>
          Our smart autocomplete will help you... or will it?
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            value={displayName}
            onChange={handleChange}
            placeholder="Type your name..."
            className="transition-all duration-300"
          />
          
          {showSuggestions && (
            <div className="absolute z-10 w-full mt-1 bg-card border border-border rounded-lg shadow-lg">
              {wrongSuggestions.slice(0, 3).map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-2 text-left hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Preview:</p>
          <p className="text-lg font-medium">{displayName || 'Nothing entered yet'}</p>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">
            Auto-corrections: {corruptionCount}
          </span>
          <Button onClick={reset} variant="outline" size="sm">
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
