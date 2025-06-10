import { Card, CardContent } from '@/components/ui/card'

interface Treatment {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  className?: string
  bgColor?: string
  textColor?: string
}

interface TreatmentCardProps {
  treatment: Treatment
  isMobile?: boolean
}

const TreatmentCard = ({ treatment, isMobile = false }: TreatmentCardProps) => {
  if (isMobile) {
    return (
      <Card
        className={`${
          treatment.bgColor || 'bg-white'
        } overflow-hidden shadow-lg rounded-2xl border-0 relative`}
      >
        <CardContent className="p-0 h-full">
          <div className="relative h-full">
            <img
              src={`https://images.unsplash.com/${treatment.image}?auto=format&fit=crop&w=400&q=80`}
              alt={treatment.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
            <div className="absolute bottom-2 left-2 right-2 text-white">
              <h3 className="text-xs font-bold leading-tight">
                {treatment.title}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      className={`${
        treatment.bgColor || 'bg-white'
      } overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl border-0`}
    >
      <CardContent className="p-0 h-full flex flex-col">
        <div className={`p-4 flex-1 ${treatment.textColor || 'text-gray-800'}`}>
          <p className="text-sm text-gray-500 mb-2">{treatment.subtitle}</p>
          <h3 className="text-lg font-bold mb-2 leading-tight">
            {treatment.title}
          </h3>
          <p className="text-sm opacity-80 mb-3">{treatment.description}</p>
        </div>
        <div className="relative h-64 overflow-hidden">
          <img
            src={`https://images.unsplash.com/${treatment.image}?auto=format&fit=crop&w=800&q=80`}
            alt={treatment.title}
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default TreatmentCard
