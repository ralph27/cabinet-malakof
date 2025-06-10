'use client'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState } from 'react'

export const ClientReviewsSection = () => {
  const [email, setEmail] = useState('')
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      text: 'Exceptional care and professionalism. The team made me feel comfortable throughout my entire treatment journey.',
      rating: 5,
      treatment: 'Dental Implants'
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'Outstanding results with the latest technology. Highly recommend their innovative approach to dental care.',
      rating: 5,
      treatment: 'Periodontal Treatment'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      text: 'Professional staff and excellent results. The follow-up care exceeded my expectations completely.',
      rating: 5,
      treatment: 'Oral Surgery'
    },
    {
      id: 4,
      name: 'David Thompson',
      text: 'Best dental experience ever. The team is knowledgeable, friendly, and truly cares about patient comfort.',
      rating: 5,
      treatment: 'Consultation'
    }
  ]

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  const nextReview = () => {
    setCurrentReview((prev: any) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview(
      (prev: any) => (prev - 1 + reviews.length) % reviews.length
    )
  }

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-50 to-teal-50/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Stay{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Connected
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Get the latest dental health tips and exclusive offers delivered
              to your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-2 border-teal-100 focus:border-teal-500 rounded-full px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-teal-500/20 transition-all duration-300"
              />
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Patients Say
          </h3>
          <p className="text-xl text-gray-600">
            Real experiences from our valued patients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="text-6xl text-teal-200 mb-6 font-serif">"</div>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                {reviews[currentReview].text}
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {reviews[currentReview].name}
                </h4>
                <p className="text-teal-600 font-medium">
                  {reviews[currentReview].treatment}
                </p>
              </div>

              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={prevReview}
                  className="p-3 bg-teal-100 hover:bg-teal-200 rounded-full transition-colors duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-teal-600" />
                </button>

                <div className="flex gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentReview
                          ? 'bg-teal-600 w-8'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="p-3 bg-teal-100 hover:bg-teal-200 rounded-full transition-colors duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-teal-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
