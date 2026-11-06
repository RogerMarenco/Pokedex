import { useEffect, useRef } from 'react'

interface ConfirmModalProps {
  pokemonName: string
  onConfirm: () => void
  onCancel: () => void
}

function ConfirmModal({
  pokemonName,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) {
      return
    }

    dialog.showModal()

    return () => {
      if (dialog.open) {
        dialog.close()
      }
    }
  }, [])

  function handleCancel() {
    onCancel()
  }

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      className="fixed left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-0 shadow-2xl backdrop:bg-black/50"
      aria-labelledby="confirm-title"
      aria-describedby="confirm-description"
    >
      <div className="w-[90vw] max-w-md bg-white p-6 text-center">

        <h2
          id="confirm-title"
          className="text-2xl font-bold text-gray-900"
        >
          Eliminar de favoritos
        </h2>

        <p
          id="confirm-description"
          className="mt-3 text-gray-600"
        >
          ¿Estás seguro de que quieres eliminar a{' '}
          <span className="font-bold capitalize">
            {pokemonName}
          </span>{' '}
          de tus favoritos?
        </p>

        <div className="mt-6 flex justify-center gap-3">

          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Cancelar
          </button>

          {/*
            Dark pattern intencional:
            el botón "Eliminar" tiene mayor contraste visual que
            "Cancelar" para demostrar cómo una interfaz puede
            dirigir deliberadamente la atención del usuario hacia
            una acción determinada. Este efecto es intencional
            para cumplir el requisito académico del proyecto.
          */}
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
          >
            Eliminar
          </button>

        </div>

      </div>
    </dialog>
  )
}

export default ConfirmModal