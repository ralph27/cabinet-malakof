'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, Clock, MapPin, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-20 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-cyan-50/30"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full mb-6 border border-teal-100">
            <MessageCircle className="w-4 h-4 text-teal-600" />
            <span className="text-teal-700 font-medium text-sm tracking-wide uppercase">
              GET IN TOUCH
            </span>
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-2 bg-gradient-to-br from-teal-200/40 to-cyan-200/40 rounded-3xl blur-xl"></div>
            <div className="relative bg-white rounded-3xl p-3 shadow-2xl shadow-teal-100/50">
              <div className="w-full h-80 md:h-96 bg-muted relative overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.2922926156743963!3d48.8566140079287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-40 left-40 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            <div className="relative">
              <div className="absolute inset-2 bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-teal-600 to-teal-700 p-10 rounded-3xl shadow-2xl shadow-teal-200/50">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-xl">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      Send us a Message
                    </h2>
                  </div>
                  <p className="text-teal-100 text-lg">
                    We'd love to hear from you. Fill out the form below and
                    we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/95 backdrop-blur-sm border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-xl shadow-lg group-hover:bg-white transition-colors focus:bg-white"
                      />
                    </div>
                    <div className="group">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/95 backdrop-blur-sm border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-xl shadow-lg group-hover:bg-white transition-colors focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/95 backdrop-blur-sm border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-xl shadow-lg group-hover:bg-white transition-colors focus:bg-white"
                    />
                  </div>

                  <div className="group">
                    <Textarea
                      name="message"
                      placeholder="Tell us about your dental needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/95 backdrop-blur-sm border-0 text-gray-900 placeholder:text-gray-500 min-h-[140px] resize-none rounded-xl shadow-lg group-hover:bg-white transition-colors focus:bg-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white text-teal-600 hover:bg-white/90 font-semibold h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground text-lg">
                  Multiple ways to reach us for your convenience
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="group bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-red-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-red-800 mb-3 uppercase text-sm tracking-wide">
                      EMERGENCY
                    </h3>
                    <p className="text-red-700 font-semibold text-lg mb-1">
                      01 45 01 92 31
                    </p>
                    <p className="text-red-600 text-sm">24/7 Emergency Line</p>
                  </CardContent>
                </Card>

                <Card className="group bg-gradient-to-br from-teal-600 to-teal-700 border-teal-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-white mb-3 uppercase text-sm tracking-wide">
                      LOCATION
                    </h3>
                    <p className="text-teal-100 font-medium">
                      108 Av. de Malakoff,
                    </p>
                    <p className="text-teal-100 font-medium">75116 Paris</p>
                  </CardContent>
                </Card>

                <Card className="group bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-cyan-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-cyan-800 mb-3 uppercase text-sm tracking-wide">
                      EMAIL
                    </h3>
                    <p className="text-cyan-700 font-semibold text-base break-all">
                      secretariat.cabinet@email.com
                    </p>
                  </CardContent>
                </Card>

                <Card className="group bg-gradient-to-br from-teal-500 to-teal-600 border-teal-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-white mb-3 uppercase text-sm tracking-wide">
                      WORKING HOURS
                    </h3>
                    <p className="text-teal-100 font-medium">
                      Mon-Sat: 09:00-20:00
                    </p>
                    <p className="text-teal-100 font-medium">
                      Sunday Emergency only
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
