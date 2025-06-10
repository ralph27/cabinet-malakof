import { Card } from '@/components/ui/card'

interface DoctorCardProps {
  name: string
  specialty: string
  image: string
  specialtyColor: string
}

const DoctorCard = ({
  name,
  specialty,
  image,
  specialtyColor
}: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg">
      <div className="relative">
        <img
          src={image}
          alt={`Dr. ${name}`}
          className="w-full h-96 object-cover"
        />
        <div
          className={`absolute bottom-0 left-0 right-0 ${specialtyColor} text-white p-4`}
        >
          <h3 className="font-semibold text-lg">Dr. {name}</h3>
          <p className="text-sm uppercase tracking-wide">{specialty}</p>
        </div>
      </div>
    </Card>
  )
}

export default DoctorCard
