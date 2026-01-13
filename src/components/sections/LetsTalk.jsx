import { useState } from 'react'

const LetsTalk = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid')
      return
    }
    // Handle newsletter signup (client-side only)
    alert('Thank you for subscribing to our newsletter!')
    setEmail('')
    setError('')
  }

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-950" aria-label="Newsletter signup">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 md:mb-12">
          Let's Talk
        </h2>
        <div className="max-w-md mx-auto">
          <p className="text-gray-400 mb-6 uppercase tracking-wider text-xs md:text-sm">
            SIGN UP TO OUR NEWSLETTER
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4" aria-label="Newsletter subscription form">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
              placeholder="Enter your email"
              className={`flex-1 px-6 py-4 rounded-lg bg-gray-900 text-white placeholder-gray-500 border ${
                error ? 'border-red-500' : 'border-gray-700'
              } focus:outline-none focus:border-blue-500`}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'newsletter-error' : undefined}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap"
              aria-label="Subscribe to newsletter"
            >
              Submit
            </button>
          </form>
          {error && <p id="newsletter-error" className="text-red-500 text-sm mt-2 text-left" role="alert">{error}</p>}
        </div>
      </div>
    </section>
  )
}

export default LetsTalk
