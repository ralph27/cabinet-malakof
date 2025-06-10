import {
  CheckCircle,
  Heart,
  Award,
  Users,
  Star,
  Zap,
  Shield
} from 'lucide-react'

interface ServiceHighlightProps {
  title: string
  description: string
  icon?: string
}

const ServiceHighlight = ({
  title,
  description,
  icon = 'check'
}: ServiceHighlightProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'heart':
        return <Heart className="w-5 h-5 text-teal-600" />
      case 'award':
        return <Award className="w-5 h-5 text-teal-600" />
      case 'users':
        return <Users className="w-5 h-5 text-teal-600" />
      case 'star':
        return <Star className="w-5 h-5 text-teal-600" />
      case 'zap':
        return <Zap className="w-5 h-5 text-teal-600" />
      case 'shield':
        return <Shield className="w-5 h-5 text-teal-600" />
      default:
        return <CheckCircle className="w-5 h-5 text-teal-600" />
    }
  }

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-teal-50 hover:border-teal-100 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-100 transition-colors duration-300 flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground text-base mb-2 group-hover:text-teal-700 transition-colors">
            {title}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceHighlight
