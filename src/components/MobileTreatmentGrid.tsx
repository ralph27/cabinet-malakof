import { ArrowRight } from 'lucide-react'

export const MobileTreatmentGrid = ({ treatments }: { treatments: any }) => {
  return (
    <div className="md:hidden space-y-6">
      {treatments.map((treatment: any) => (
        <div
          key={treatment.id}
          className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-80"
        >
          <div className="absolute inset-0">
            <img
              src={`https://images.unsplash.com/${treatment.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
              alt={treatment.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 p-6 h-full flex flex-col justify-end">
            <div className="mb-2 opacity-90">
              <span className="text-xs font-medium text-white/80 tracking-wider uppercase">
                {treatment.subtitle}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
              {treatment.title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              {treatment.description}
            </p>
            <button className="self-start bg-white/20 backdrop-blur-sm border border-white/30 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
              Learn More
              <ArrowRight className="inline ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
