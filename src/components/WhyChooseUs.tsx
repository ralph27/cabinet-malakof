import { Cpu, Heart, User } from 'lucide-react'

export const WhyChooseUs = () => {
  const features = [
    {
      icon: User,
      title: 'Highly Skilled & Certified',
      description:
        'Our team consists of highly trained and certified dental professionals with years of expertise.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'Advanced Technology',
      description:
        'We use state-of-the-art equipment and cutting-edge dental techniques for optimal results.',
      gradient: 'from-teal-600 to-teal-500'
    },
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description:
        'Your comfort and satisfaction are our top priorities throughout every treatment journey.',
      gradient: 'from-cyan-500 to-teal-500'
    }
  ]

  return (
    <div className="relative py-20 bg-gradient-to-br from-teal-50 to-cyan-50/50 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Our Practice
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience exceptional dental care with our commitment to excellence
            and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-8">
                <div
                  className={`w-20 h-20 mx-auto bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
