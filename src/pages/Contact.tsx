import { useState, type FormEvent } from 'react'

import { useToast } from '../context/ToastContext'

function Contact() {
  const { showToast } = useToast()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast(
        'Por favor completa todos los campos.',
        'error',
      )

      return
    }

    showToast(
      'Mensaje enviado correctamente.',
      'success',
    )

    setName('')
    setEmail('')
    setMessage('')
  }

  const isFormValid =
    name.trim() !== '' &&
    email.trim() !== '' &&
    message.trim() !== ''

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">

      <section className="mx-auto max-w-2xl">

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Contacto
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            ¿Tienes alguna pregunta? Envíanos un mensaje.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-md md:p-8"
        >

          <div className="mb-5">

            <label
              htmlFor="name"
              className="mb-2 block font-semibold text-gray-800"
            >
              Nombre
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Escribe tu nombre"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />

          </div>

          <div className="mb-5">

            <label
              htmlFor="email"
              className="mb-2 block font-semibold text-gray-800"
            >
              Correo electrónico
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="ejemplo@correo.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />

          </div>

          <div className="mb-6">

            <label
              htmlFor="message"
              className="mb-2 block font-semibold text-gray-800"
            >
              Mensaje
            </label>

            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              placeholder="Escribe tu mensaje"
              rows={6}
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />

          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full rounded-xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400"
          >
            Enviar mensaje
          </button>

        </form>

      </section>

    </main>
  )
}

export default Contact