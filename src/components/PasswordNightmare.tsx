import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, Check, X } from '@phosphor-icons/react'

interface PasswordRequirement {
  text: string
  met: boolean
}

export function PasswordNightmare() {
  const [password, setPassword] = useState('')
  const [showRequirements, setShowRequirements] = useState(false)

  const requirements: PasswordRequirement[] = [
    { text: 'At least 8 characters', met: password.length >= 8 },
    { text: 'At least one uppercase letter', met: /[A-Z]/.test(password) },
    { text: 'At least one lowercase letter', met: /[a-z]/.test(password) },
    { text: 'At least one number', met: /\d/.test(password) },
    { text: 'At least one special character (!@#$%^&*)', met: /[!@#$%^&*]/.test(password) },
    { text: 'Must contain the current year', met: password.includes('2025') },
    { text: 'Must include your favorite pizza topping', met: /(pepperoni|mushroom|cheese|olive)/i.test(password) },
    { text: 'Must have exactly 3 vowels (but not consecutive)', met: (() => {
      const vowels = password.match(/[aeiou]/gi)
      if (!vowels || vowels.length !== 3) return false
      return !/[aeiou]{2}/i.test(password)
    })() },
    { text: 'Cannot contain the letter "e" (wait, what?)', met: !/e/i.test(password) },
    { text: 'Must be a palindrome when reversed', met: password === password.split('').reverse().join('') && password.length > 0 },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setShowRequirements(true)
  }

  const allMet = requirements.every(req => req.met)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock weight="fill" className="text-primary" />
          Create Password
        </CardTitle>
        <CardDescription>
          Please meet ALL of our security requirements
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={showRequirements ? (allMet ? 'border-success' : 'border-destructive shake') : ''}
          />
        </div>

        {showRequirements && (
          <div className="space-y-2 p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium mb-3">Password Requirements:</p>
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                {req.met ? (
                  <Check className="text-success flex-shrink-0 mt-0.5" size={16} weight="bold" />
                ) : (
                  <X className="text-destructive flex-shrink-0 mt-0.5" size={16} weight="bold" />
                )}
                <span className={req.met ? 'text-success' : 'text-muted-foreground'}>
                  {req.text}
                </span>
              </div>
            ))}
          </div>
        )}

        {allMet && (
          <div className="p-4 bg-success/10 border border-success rounded-lg text-center">
            <p className="text-success font-medium">
              🎉 Congratulations! You created an impossible password!
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              (Good luck remembering it)
            </p>
          </div>
        )}

        <Button className="w-full" disabled={!allMet}>
          Create Account
        </Button>
      </CardContent>
    </Card>
  )
}
