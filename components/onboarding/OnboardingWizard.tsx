'use client'

import { useState } from 'react'
import { Calendar, Mic, Camera, Sparkles, ArrowRight, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STEPS = [
  {
    icon: Calendar,
    title: 'Welcome to Momenties',
    description: 'Your AI-powered calendar that understands natural language. Let\'s get you set up in 30 seconds.',
    action: null,
  },
  {
    icon: Sparkles,
    title: 'Type naturally',
    description: 'Just type what you want to schedule. "Dentist thursday 3pm" or "team lunch next friday at noon" — we handle the rest.',
    action: 'Try typing an event in the input bar below',
  },
  {
    icon: Mic,
    title: 'Voice input',
    description: 'Click the microphone and speak freely. "Schedule a gym session tomorrow morning and a call with Sarah at 2pm."',
    action: 'Try the mic button',
  },
  {
    icon: Camera,
    title: 'Snap a schedule',
    description: 'Take a photo of a syllabus, conference agenda, or printed schedule. All dates get added at once.',
    action: 'Try the camera button',
  },
]

interface OnboardingWizardProps {
  onComplete: () => void
}

export function OnboardingWizard({ onComplete }: OnboardingWizardProps) {
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const current = STEPS[step]

  function next() {
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    } else {
      setVisible(false)
      onComplete()
    }
  }

  function skip() {
    setVisible(false)
    onComplete()
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 rounded-2xl border border-gold/20 bg-card overflow-hidden">
        {/* Skip button */}
        <button
          onClick={skip}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Content */}
        <div className="p-8 text-center space-y-6">
          {/* Step number */}
          <p className="font-mono text-[10px] tracking-widest uppercase text-gold/50">
            Step {step + 1} of {STEPS.length}
          </p>

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto">
            <current.icon className="h-8 w-8 text-gold" />
          </div>

          {/* Text */}
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-bold text-foreground">{current.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{current.description}</p>
          </div>

          {/* Action hint */}
          {current.action && (
            <div className="rounded-lg border border-gold/20 bg-gold/5 px-4 py-2.5">
              <p className="text-xs text-gold font-mono">{current.action}</p>
            </div>
          )}

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === step ? 'bg-gold w-6' : i < step ? 'bg-gold/50' : 'bg-border'
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            {step > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep(step - 1)}
                className="text-muted-foreground"
              >
                Back
              </Button>
            )}
            <Button
              size="sm"
              onClick={next}
              className="bg-gold text-[#0c0c0f] hover:bg-gold/90 font-medium px-6"
            >
              {step === STEPS.length - 1 ? (
                <><Check className="h-3 w-3 mr-1.5" />Get started</>
              ) : (
                <>Next<ArrowRight className="h-3 w-3 ml-1.5" /></>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
