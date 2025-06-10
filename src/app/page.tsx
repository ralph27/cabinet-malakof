import React from 'react'
import { HeroSection } from '@/components/HeroSection'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { BlogPreviewSection } from '@/components/BlogPreview'
import { ClientReviewsSection } from '@/components/ClentReviewsSection'
import { VideoPlaceholder } from '@/components/VideoPlaceholder'

const ModernDentalHomepage = () => {
  const treatments = [
    {
      id: 1,
      title: 'Periodontal Techniques',
      subtitle: 'Advanced Gum Care',
      description:
        'Preserving your gums and teeth, protecting your overall health with cutting-edge periodontal treatments.',
      image: 'photo-1649972904349-6e44c42644a7',
      className: 'md:col-span-1 md:row-span-2'
    },
    {
      id: 2,
      title: 'Implantology Techniques',
      subtitle: 'Permanent Solutions',
      description:
        'Restore your smile with precision-placed implants for lasting confidence and functionality.',
      image: 'photo-1488590528505-98d2b5aba04b',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 3,
      title: 'Patient Follow-Up & Mental Wellbeing',
      subtitle: 'Comprehensive Care',
      description:
        'Beyond surgery: personalized care and support that stays with you throughout your journey.',
      image: 'photo-1518770660439-4636190af475',
      className: 'md:col-span-1 md:row-span-2'
    },
    {
      id: 4,
      title: 'Innovative Surgical Techniques',
      subtitle: 'Next-Generation Dentistry',
      description:
        'Experience the future of dental care with advanced surgical techniques tailored to your needs.',
      image: 'photo-1461749280684-dccba630e2f6',
      className: 'md:col-span-1 md:row-span-1'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <VideoPlaceholder className="w-1/2 m-auto my-10" />
      <HeroSection treatments={treatments} />
      <WhyChooseUs />
      <BlogPreviewSection />
      <ClientReviewsSection />
    </div>
  )
}

export default ModernDentalHomepage
