# Planning Guide

A satirical showcase of the world's worst UI/UX design patterns that frustrates users through deliberately terrible interactions, serving as both entertainment and a cautionary tale for designers.

**Experience Qualities**:
1. **Infuriating** - Every interaction should make users question their sanity through unpredictable and counterintuitive behaviors
2. **Unexpectedly Humorous** - The absurdity of the bad design choices should elicit frustrated laughter and disbelief
3. **Deliberately Antagonistic** - The interface actively works against the user's goals, creating memorable moments of digital torture

**Complexity Level**: Light Application (multiple features with basic state)
This is a collection of interactive bad UI patterns that users can experience sequentially or explore freely. Each pattern is self-contained but contributes to an overall narrative of terrible design.

## Essential Features

### Feature 1: Volume Slider Phone Input
- **Functionality**: Phone number input disguised as a volume slider where each digit must be "dialed in" by sliding
- **Purpose**: Demonstrates how inappropriate input methods create unnecessary friction
- **Trigger**: User attempts to enter phone number in a contact form
- **Progression**: Click phone field → Volume slider appears → Drag slider for each digit (0-9) → Click "add digit" → Repeat 10 times → Number displays incorrectly formatted
- **Success criteria**: All 10 digits can be entered, takes at least 30 seconds to complete

### Feature 2: Inverted Confirmation Buttons
- **Functionality**: Yes/No buttons with wrong colors (Red=Yes, Green=No) and positions that swap randomly
- **Purpose**: Exploits learned color associations and spatial memory
- **Trigger**: User attempts to confirm any action
- **Progression**: Read prompt → Locate "Yes" button → Button swaps position → Click → Buttons change colors → Final confirmation required
- **Success criteria**: Buttons successfully confuse users at least 3 times before completion

### Feature 3: Aggressively Moving Target Buttons
- **Functionality**: Submit buttons that flee from cursor on hover
- **Purpose**: Makes the most critical action nearly impossible to complete
- **Trigger**: User hovers over submit button
- **Progression**: Move cursor toward button → Button detects proximity → Button moves to random position → Chase continues → Eventually allows click after 5+ attempts
- **Success criteria**: Button escapes at least 5 times, remains clickable eventually

### Feature 4: CAPTCHA From Hell
- **Functionality**: Impossible or absurd CAPTCHA challenges (select all images with existential dread, solve calculus, count grains of sand)
- **Purpose**: Parodies over-complicated verification systems
- **Trigger**: User attempts to submit form
- **Progression**: Submit form → CAPTCHA appears → Complete absurd challenge → Get told it's wrong → New impossible challenge → Eventually passes randomly
- **Success criteria**: Takes multiple attempts, challenges are genuinely absurd

### Feature 5: Password Requirements Nightmare
- **Functionality**: Password field with increasingly ridiculous and conflicting requirements
- **Purpose**: Satirizes overly complex password policies
- **Trigger**: User creates account password
- **Progression**: Type password → Requirements appear one by one → Previous requirements contradict new ones → Includes absurd rules (must contain current moon phase, your mother's maiden name spelled backwards, etc.)
- **Success criteria**: At least 8 conflicting requirements, impossible to satisfy all simultaneously

### Feature 6: Autocomplete Autocorrupt
- **Functionality**: Autocomplete that suggests wrong options and changes input after typing
- **Purpose**: Demonstrates aggressive autocorrect gone wrong
- **Trigger**: User types in name/email field
- **Progression**: Start typing → Wrong suggestions appear → Select correct text → Field changes it back → Text randomly capitalizes/modifies → Eventually accepts input grudgingly
- **Success criteria**: Changes user input at least 3 times unpredictably

### Feature 7: Loading Bar That Lies
- **Functionality**: Progress bar that goes backward, jumps around, or gets stuck at 99%
- **Purpose**: Subverts expectations of loading feedback
- **Trigger**: User submits form or loads content
- **Progression**: Click submit → Progress bar starts → Goes to 50% instantly → Jumps back to 10% → Slowly crawls → Sticks at 99% for 10 seconds → Suddenly completes
- **Success criteria**: Creates anxiety through unpredictable progress indication

### Feature 8: Checkbox Agreement Maze
- **Functionality**: Terms and conditions with nested checkboxes, some that uncheck others
- **Purpose**: Parodies complex agreement flows
- **Trigger**: User attempts to agree to terms
- **Progression**: Check "I agree" → New checkboxes appear → Checking some unchecks others → Must read absurd terms → Eventually all must be checked in specific order
- **Success criteria**: At least 5 interconnected checkboxes with dependencies

## Edge Case Handling

- **Keyboard Warriors**: Disable keyboard shortcuts and tab navigation randomly to force mouse use
- **Mobile Users**: Make buttons even harder to tap on mobile, requiring pixel-perfect precision
- **Accessibility Escape Hatch**: Include a hidden "make it normal" button for users who genuinely get stuck or frustrated
- **Rage Quitters**: Track failed attempts and offer increasingly sarcastic encouragement messages
- **Speed Runners**: Time each terrible interaction and display stats at the end

## Design Direction

The design should feel superficially professional and polished, which makes the terrible UX even more shocking and humorous - like a beautiful trap. The interface should start clean and corporate-looking before revealing its antagonistic nature through interaction.

## Color Selection

Complementary (opposite colors) - Using colors in ways that violate user expectations and accessibility standards intentionally as part of the satire.

- **Primary Color**: #0969DA (GitHub Blue) - Represents false sense of trustworthiness and professionalism
- **Secondary Colors**: #6E7781 (Gray) for secondary elements, maintaining the polished facade
- **Accent Color**: #CF222E (Red) deliberately used for positive actions, #1A7F37 (Green) for negative/dangerous actions
- **Foreground/Background Pairings**: 
  - Background (#FFFFFF White): Foreground (#1F2328 Near Black) - Ratio 16.9:1 ✓
  - Primary (#0969DA Blue): White text (#FFFFFF) - Ratio 5.1:1 ✓
  - Secondary (#6E7781 Gray): White text (#FFFFFF) - Ratio 4.6:1 ✓
  - Accent Red (#CF222E): White text (#FFFFFF) - Ratio 7.2:1 ✓
  - Success Green (#1A7F37): White text (#FFFFFF) - Ratio 5.8:1 ✓

## Font Selection

The typography should feel clean and modern using system fonts that convey professionalism, making the terrible UX more jarring and satirical.

- **Typographic Hierarchy**: 
  - H1 (Main Title): SF Pro Display/-apple-system Bold/36px/tight spacing - Commands attention
  - H2 (Section Headers): SF Pro Display Medium/24px/normal spacing - Organizes content
  - Body Text: SF Pro Text/16px/relaxed line-height - Maximum readability
  - Labels: SF Pro Text Medium/14px/tight spacing - Form field labels
  - Captions: SF Pro Text/12px/normal spacing - Helper text and hints

## Animations

Animations should feel smooth and polished at first, then betray user expectations by being unpredictable and antagonistic - motion that actively works against user goals.

- **Purposeful Meaning**: Smooth animations create the illusion of polish before revealing chaotic, user-hostile behaviors
- **Hierarchy of Movement**: High-energy animations for button evasion and field changes, subtle animations for normal interactions to create contrast

## Component Selection

- **Components**: Card (for each bad UI example), Button (with hover animations), Input (with custom validation), Progress (for lying progress bar), Checkbox (for agreement maze), Slider (for phone input), Alert (for error messages), Dialog (for CAPTCHA), Badge (for password requirements), Tabs (to organize different terrible UI examples)
- **Customizations**: Custom hover behaviors on buttons to make them flee, custom slider that maps to phone digits, animated progress bar that behaves erratically
- **States**: Buttons have evasive hover state, inputs have aggressive autocorrect state, checkboxes have interdependencies, all with smooth transitions that betray expectations
- **Icon Selection**: AlertTriangle for warnings, X for close, Check for false confirmations, Phone for contact, Lock for password, ArrowRight for navigation
- **Spacing**: Generous padding (p-6, p-8) to maintain professional appearance, consistent gaps (gap-4, gap-6) between elements
- **Mobile**: Stack examples vertically on mobile, make touch targets deceptively small or moving, maintain terrible UX across all screen sizes
