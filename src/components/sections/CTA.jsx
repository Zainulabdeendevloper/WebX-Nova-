import { useState } from 'react'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      // Form is valid, handle submission (client-side only)
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-950" aria-label="Contact form">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          Let's Build Your Next Big Success
        </h2>
        <p className="text-gray-400 text-center mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Ready to grow? Let's discuss your unique requirements and tailor solutions to your goals and target audience.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={`w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-blue-500`}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-blue-500`}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className={`w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border ${
                  errors.phone ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-blue-500`}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="company" className="sr-only">Company</label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className={`w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border ${
                  errors.company ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-blue-500`}
                aria-invalid={errors.company ? 'true' : 'false'}
                aria-describedby={errors.company ? 'company-error' : undefined}
              />
              {errors.company && <p id="company-error" className="text-red-500 text-sm mt-1" role="alert">{errors.company}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              className={`w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border ${
                errors.message ? 'border-red-500' : 'border-gray-700'
              } focus:outline-none focus:border-blue-500 resize-none`}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            ></textarea>
            {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">{errors.message}</p>}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors"
              aria-label="Submit contact form"
            >
              CREATE A PLAN
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CTA
