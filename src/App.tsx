import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { VolumeSliderPhone } from '@/components/VolumeSliderPhone'
import { InvertedButtons } from '@/components/InvertedButtons'
import { FleeingButton } from '@/components/FleeingButton'
import { PasswordNightmare } from '@/components/PasswordNightmare'
import { AutocompleteAutocorrupt } from '@/components/AutocompleteAutocorrupt'
import { LyingProgressBar } from '@/components/LyingProgressBar'
import { CheckboxMaze } from '@/components/CheckboxMaze'
import { CaptchaFromHell } from '@/components/CaptchaFromHell'
import { Bug, Warning } from '@phosphor-icons/react'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Bug size={32} weight="fill" className="text-destructive" />
            <h1 className="text-3xl font-bold">The Worst UI Hall of Shame</h1>
          </div>
          <p className="text-muted-foreground">
            A collection of deliberately terrible UX patterns that will make you question your sanity
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 p-4 bg-accent/10 border border-accent rounded-lg flex items-start gap-3">
          <Warning size={24} weight="fill" className="text-accent flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-accent mb-1">Warning: Peak Frustration Ahead</p>
            <p className="text-sm text-muted-foreground">
              Every interaction on this page has been carefully designed to be as infuriating as possible. 
              This is satire. Please don't use these patterns in real applications.
            </p>
          </div>
        </div>

        <Tabs defaultValue="phone" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="phone">Phone</TabsTrigger>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="fleeing">Fleeing</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="autocomplete">Auto...</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="checkbox">Checkboxes</TabsTrigger>
            <TabsTrigger value="captcha">CAPTCHA</TabsTrigger>
          </TabsList>

          <TabsContent value="phone" className="space-y-4">
            <VolumeSliderPhone />
          </TabsContent>

          <TabsContent value="buttons" className="space-y-4">
            <InvertedButtons />
          </TabsContent>

          <TabsContent value="fleeing" className="space-y-4">
            <FleeingButton />
          </TabsContent>

          <TabsContent value="password" className="space-y-4">
            <PasswordNightmare />
          </TabsContent>

          <TabsContent value="autocomplete" className="space-y-4">
            <AutocompleteAutocorrupt />
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            <LyingProgressBar />
          </TabsContent>

          <TabsContent value="checkbox" className="space-y-4">
            <CheckboxMaze />
          </TabsContent>

          <TabsContent value="captcha" className="space-y-4">
            <CaptchaFromHell />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Inspired by userinyerface.com • A satirical showcase of terrible UX design</p>
          <p className="mt-2">Remember: Good UX is about respecting users, not frustrating them.</p>
        </div>
      </footer>
    </div>
  )
}

export default App