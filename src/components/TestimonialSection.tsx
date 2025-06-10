import { Quote, Star } from 'lucide-react'

const TestimonialSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800"></div>
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width"
        fill-opacity="0.03"
      ></div>

      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
            <Quote className="w-8 h-8 text-white" />
          </div>

          <blockquote className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            "Precision. Innovation.
            <span className="block text-cyan-200">Peace of Mind."</span>
          </blockquote>

          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <cite className="text-xl text-cyan-100 font-medium not-italic">
              Abraham Lincoln
            </cite>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <button className="w-3 h-3 bg-white rounded-full transition-all duration-300 hover:scale-110"></button>
            <button className="w-8 h-3 bg-white/40 rounded-full transition-all duration-300 hover:bg-white/60"></button>
            <button className="w-3 h-3 bg-white/40 rounded-full transition-all duration-300 hover:bg-white/60"></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
