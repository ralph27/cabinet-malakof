import DoctorsSection from '@/components/DoctorsSection'
import ServiceHighlight from '@/components/ServiceHighlight'
import TestimonialSection from '@/components/TestimonialSection'
import { Sparkles, Heart } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-cyan-50/30"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full mb-6 border border-teal-100">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-teal-700 font-medium text-sm tracking-wide">
                WELCOME TO CABINET MALAKOFF
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Best Care for Your
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent block">
                Beautiful Smile
              </span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative">
              <div className="absolute inset-4 bg-gradient-to-br from-teal-200/40 to-cyan-200/40 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl shadow-teal-100/50">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl overflow-hidden">
                  <img
                    src="/lovable-uploads/b61d4aaf-4e42-40d1-8fa7-2dc6d5254972.png"
                    alt="Dental professionals discussing patient care"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <ServiceHighlight
                    title="A Passion for Healing"
                    description="Dedicated to exceptional patient care with genuine compassion"
                    icon="heart"
                  />
                  <ServiceHighlight
                    title="Dual Expertise"
                    description="Comprehensive dental solutions from our skilled specialists"
                    icon="award"
                  />
                  <ServiceHighlight
                    title="Multidisciplinary Care"
                    description="Complete treatment approach for optimal results"
                    icon="users"
                  />
                  <ServiceHighlight
                    title="8-Star Care"
                    description="Excellence in every service we provide"
                    icon="star"
                  />
                  <ServiceHighlight
                    title="Advanced Surgical Techniques"
                    description="Modern treatment methods with cutting-edge technology"
                    icon="zap"
                  />
                  <ServiceHighlight
                    title="Comfortable Environment"
                    description="Relaxing patient experience in our modern facility"
                    icon="shield"
                  />
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-white to-teal-50/50 rounded-2xl p-8 border border-teal-100/50 shadow-lg shadow-teal-100/20">
                <div className="absolute top-6 right-6">
                  <div className="p-2 bg-teal-100 rounded-xl">
                    <Heart className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  Our Vision
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our Vision Is To Elevate The Standards Of Care, Fostering
                  Trust, Excellence, And Clinical Leadership In Dental Surgery.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We Aim To Transform Surgical Dental Treatment Anxiety Into
                  Confidence Through Innovation And Trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <DoctorsSection />
    </div>
  )
}

export default About
