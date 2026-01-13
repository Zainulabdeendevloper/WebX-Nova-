import { useState } from 'react'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.slice(0, 10)}`}
      >
        <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">{question}</span>
        <span className="text-2xl text-gray-600 flex-shrink-0" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div 
          id={`faq-answer-${question.slice(0, 10)}`}
          className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base"
        >
          {answer}
        </div>
      )}
    </div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: 'How long does it take to build a WordPress or WooCommerce website?',
      answer: 'The timeline depends on your requirements: a simple WordPress website usually takes 7–10 working days, while a complete WooCommerce store with product uploads, payment, and shipping setup takes around 1-2 weeks. If your content is ready in advance, we can deliver even faster.',
    },
    {
      question: 'Do you offer ongoing site/website management with your social media updates for consistency?',
      answer: 'Yes, absolutely. We can integrate your website management with social media updates to keep everything consistent. For example, if you launch a new product or update a service on your website, we can also post it on your social media with a proper caption so your audience stays updated everywhere. This saves you time and ensures your brand looks professional across all platforms.',
    },
    {
      question: 'I want my Shopify store design to be not only unique and premium, but also compatible with ready-made themes, or can you create a custom design as well?',
      answer: 'We can definitely create a unique and premium design for your Shopify store. While Shopify offers ready-made themes, we customize them completely to match your brand\'s identity from layouts and colors to product pages and checkout experience. And if you need something fully exclusive, we can also develop a custom design from scratch. This way, your store will stand out as professional, modern, and aligned with your brand image.',
    },
    {
      question: 'Do you run paid ad campaigns on both Meta (Facebook/Instagram) and Google?',
      answer: 'Yes, we offer fully managed ad services on both Meta and Google. We handle everything from audience targeting, creative design, ad copywriting, to campaign setup, testing, and optimization all focused on getting real results.',
    },
    {
      question: 'What makes WebX Nova different from other digital agencies?',
      answer: 'At WebX Nova, we combine precision, smart strategy, and years of hands-on experience to deliver high-performance solutions. From pixel-perfect website development to ROI-driven marketing campaigns, our team brings deep expertise, attention to detail, and a commitment to results that sets us apart.',
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          Your Business Success Starts with WebX Nova
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
