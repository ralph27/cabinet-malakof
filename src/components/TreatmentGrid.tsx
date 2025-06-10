import { ArrowRight } from 'lucide-react'

export const TreatmentGrid = ({ treatments }: { treatments: any }) => {
  return (
    <div className="hidden md:grid md:grid-cols-3 md:grid-rows-3 gap-6 h-[600px]">
      {treatments.map((treatment: any) => (
        <div
          key={treatment.id}
          className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${treatment.className}`}
        >
          <div className="absolute inset-0">
            <img
              src={`https://images.unsplash.com/${treatment.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
              alt={treatment.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 p-8 h-full flex flex-col justify-end">
            <div className="mb-3 opacity-90">
              <span className="text-xs font-medium text-white/80 tracking-wider uppercase">
                {treatment.subtitle}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
              {treatment.title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              {treatment.description}
            </p>
            <button className="self-start bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 group/btn">
              Learn More
              <ArrowRight className="inline ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
