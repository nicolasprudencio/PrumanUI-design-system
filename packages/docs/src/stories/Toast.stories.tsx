import { useEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@prumand-ui/react'

const DemoToast = (props: ToastProps) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)

  const toastTimer = useRef(0)

  useEffect(() => {
    return () => clearTimeout(toastTimer.current)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setToastIsOpen(false)
          window.clearTimeout(toastTimer.current)
          toastTimer.current = window.setTimeout(() => {
            setToastIsOpen(true)
          }, 15)
        }}
      >
        Agendar
      </Button>
      <Toast open={toastIsOpen} onOpenChange={setToastIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quinta-feira, 22 de Dezembro às 14h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
