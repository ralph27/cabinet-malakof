'use client'

import DoctorCard from '@/components/DoctorCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import { Users, Sparkles } from 'lucide-react'

const DoctorsSection = () => {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(1)

  const doctors = [
    {
      name: 'Alan Kaddouh',
      specialty: 'PERIODONTOLOGY & IMPLANTOLOGY',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      specialtyColor: 'bg-teal-500'
    },
    {
      name: 'Ali',
      specialty: 'IMPLANTOLOGY',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop',
      specialtyColor: 'bg-teal-600'
    },
    {
      name: "Doctor's Name",
      specialty: 'NEUROLOGY',
      image:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop',
      specialtyColor: 'bg-teal-700'
    }
  ]

  useEffect(() => {
    if (!api) {
      return
    }

    api.scrollTo(1)

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    onSelect()

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const getCardScale = (index: number) => {
    if (index === current) {
      return 'scale-100'
    }
    return 'scale-90'
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-teal-50/30 to-white overflow-hidden">
      <div className="absolute top-20 left-20 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full mb-6 border border-teal-100">
            <Users className="w-4 h-4 text-teal-600" />
            <span className="text-teal-700 font-medium text-sm tracking-wide uppercase">
              TRUSTED CARE
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Meet Our
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent block">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated professionals committed to your dental health and
            beautiful smile
          </p>
        </div>

        <div className="block md:hidden overflow-visible">
          <Carousel
            className="w-full overflow-visible"
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true,
              startIndex: 1
            }}
          >
            <CarouselContent className="overflow-visible -ml-2">
              {doctors.map((doctor, index) => (
                <CarouselItem
                  key={index}
                  className="basis-2/3 pl-2 overflow-visible"
                >
                  <div
                    className={`transition-all duration-500 ease-out ${getCardScale(
                      index
                    )} px-2`}
                  >
                    <DoctorCard
                      name={doctor.name}
                      specialty={doctor.specialty}
                      image={doctor.image}
                      specialtyColor={doctor.specialtyColor}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group hover:-translate-y-2 transition-transform duration-300"
            >
              <DoctorCard
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
                specialtyColor={doctor.specialtyColor}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full shadow-lg shadow-teal-100/50 border border-teal-100 hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <Sparkles className="w-5 h-5 text-teal-600 group-hover:rotate-12 transition-transform" />
            <span className="text-foreground font-semibold">
              Schedule Your Consultation
            </span>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorsSection
