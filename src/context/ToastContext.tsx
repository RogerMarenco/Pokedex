import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import Toast from '../components/Toast'

type ToastType = 'success' | 'error' | 'info'

interface ToastContextType {
  showToast: (
    message: string,
    type?: ToastType,
  ) => void
}

const ToastContext = createContext<
  ToastContextType | undefined
>(undefined)

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({
  children,
}: ToastProviderProps) {
  const [message, setMessage] = useState('')
  const [type, setType] = useState<ToastType>('info')
  const [visible, setVisible] = useState(false)

  function showToast(
    newMessage: string,
    newType: ToastType = 'info',
  ) {
    setMessage(newMessage)
    setType(newType)
    setVisible(true)
  }

  useEffect(() => {
    if (!visible) {
      return
    }

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [visible, message])

  return (
    <ToastContext.Provider
      value={{
        showToast,
      }}
    >
      {children}

      {visible && (
        <Toast
          message={message}
          type={type}
        />
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error(
      'useToast debe utilizarse dentro de ToastProvider',
    )
  }

  return context
}