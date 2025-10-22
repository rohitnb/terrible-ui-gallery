import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckSquare } from '@phosphor-icons/react'

interface CheckboxState {
  id: string
  label: string
  checked: boolean
  unchecks?: string[]
}

export function CheckboxMaze() {
  const [checkboxes, setCheckboxes] = useState<CheckboxState[]>([
    { id: 'agree', label: 'I agree to the terms and conditions', checked: false, unchecks: ['privacy'] },
    { id: 'privacy', label: 'I have read the privacy policy', checked: false, unchecks: ['marketing'] },
    { id: 'marketing', label: 'I consent to marketing emails', checked: false, unchecks: ['agree'] },
    { id: 'newsletter', label: 'Subscribe to newsletter', checked: false, unchecks: ['updates'] },
    { id: 'updates', label: 'Receive product updates', checked: false, unchecks: ['newsletter'] },
    { id: 'confirm', label: 'Confirm you are a human', checked: false, unchecks: ['robot'] },
    { id: 'robot', label: 'Confirm you are NOT a robot', checked: false, unchecks: ['confirm'] },
  ])

  const handleCheckboxChange = (id: string) => {
    setCheckboxes(prev => {
      const checkbox = prev.find(cb => cb.id === id)
      if (!checkbox) return prev

      return prev.map(cb => {
        if (cb.id === id) {
          return { ...cb, checked: !cb.checked }
        }
        if (checkbox.unchecks?.includes(cb.id) && !cb.checked) {
          return cb
        }
        if (checkbox.unchecks?.includes(cb.id) && cb.checked) {
          return { ...cb, checked: false }
        }
        return cb
      })
    })
  }

  const allChecked = checkboxes.every(cb => cb.checked)
  const checkedCount = checkboxes.filter(cb => cb.checked).length

  const reset = () => {
    setCheckboxes(prev => prev.map(cb => ({ ...cb, checked: false })))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckSquare weight="fill" className="text-primary" />
          Terms & Conditions
        </CardTitle>
        <CardDescription>
          Please check ALL boxes to continue (some boxes uncheck others)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3 p-4 bg-muted rounded-lg max-h-[300px] overflow-y-auto">
          {checkboxes.map(checkbox => (
            <div key={checkbox.id} className="flex items-center space-x-2">
              <Checkbox
                id={checkbox.id}
                checked={checkbox.checked}
                onCheckedChange={() => handleCheckboxChange(checkbox.id)}
              />
              <label
                htmlFor={checkbox.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {checkbox.label}
              </label>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">
            Checked: {checkedCount}/{checkboxes.length}
          </span>
          {allChecked && (
            <span className="text-success font-medium">✓ All boxes checked!</span>
          )}
        </div>

        {allChecked && (
          <div className="p-4 bg-success/10 border border-success rounded-lg text-center">
            <p className="text-success font-medium">
              🎉 Congratulations! You've mastered the checkbox maze!
            </p>
          </div>
        )}

        <div className="flex gap-2">
          <Button className="flex-1" disabled={!allChecked}>
            Continue
          </Button>
          <Button onClick={reset} variant="outline">
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
