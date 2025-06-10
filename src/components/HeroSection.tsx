import { ArrowRight, Calendar } from 'lucide-react'
import { MobileTreatmentGrid } from './MobileTreatmentGrid'
import { TreatmentGrid } from './TreatmentGrid'

export const HeroSection = ({ treatments }: { treatments: any }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/30 to-gray-100 pt-20 pb-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-teal-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-teal-100 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Calendar className="w-5 h-5 text-teal-600 mr-2" />
            <span className="text-gray-700 font-medium">
              Available for Appointments
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Excellence in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Dental Care
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience premium dental treatments with cutting-edge technology
            and personalized care that puts your comfort first.
          </p>

          <button className="group bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Schedule Consultation
            <ArrowRight className="inline ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <TreatmentGrid treatments={treatments} />
        <MobileTreatmentGrid treatments={treatments} />
      </div>
    </div>
  )
}
