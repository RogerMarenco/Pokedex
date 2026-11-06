interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info'
}

function Toast({ message, type }: ToastProps) {
  function getToastStyles() {
    if (type === 'success') {
      return 'border-green-500 bg-green-50 text-green-800'
    }

    if (type === 'error') {
      return 'border-red-500 bg-red-50 text-red-800'
    }

    return 'border-blue-500 bg-blue-50 text-blue-800'
  }

  function getToastIcon() {
    if (type === 'success') {
      return '✅'
    }

    if (type === 'error') {
      return '❌'
    }

    return 'ℹ️'
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed right-5 top-20 z-50 flex items-center gap-3 rounded-xl border-l-4 px-5 py-4 shadow-xl ${getToastStyles()}`}
    >
      <span
        className="text-xl"
        aria-hidden="true"
      >
        {getToastIcon()}
      </span>

      <p className="font-semibold">
        {message}
      </p>
    </div>
  )
}

export default Toast