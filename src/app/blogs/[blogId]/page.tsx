import React from 'react'
import {
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  ArrowLeft
} from 'lucide-react'

const BlogDetailsPage = () => {
  // Sample treatment data
  const treatmentData = {
    title:
      'Advanced Periodontal Techniques: Modern Approaches to Gum Disease Treatment',
    subtitle: 'Comprehensive guide to contemporary periodontal therapy methods',
    author: 'Dr. Sarah Mitchell',
    publishDate: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Periodontal Techniques',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: {
      introduction:
        'Periodontal disease affects millions of people worldwide, but modern dental techniques have revolutionized how we approach gum disease treatment. This comprehensive guide explores the latest advances in periodontal therapy.',
      sections: [
        {
          title: 'Understanding Periodontal Disease',
          content:
            'Periodontal disease is a progressive condition that affects the supporting structures of teeth, including gums, periodontal ligament, and alveolar bone. Early detection and intervention are crucial for successful treatment outcomes. The condition typically begins with gingivitis and can progress to more severe forms if left untreated.'
        },
        {
          title: 'Non-Surgical Treatment Approaches',
          content:
            'Modern non-surgical approaches include scaling and root planing with ultrasonic instruments, laser therapy, and antimicrobial treatments. These methods are less invasive and promote faster healing with excellent patient outcomes.',
          image: {
            url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption:
              'Modern ultrasonic scaling equipment used in non-surgical periodontal therapy'
          }
        },
        {
          title: 'Advanced Surgical Interventions',
          content:
            'When non-surgical methods are insufficient, advanced surgical techniques such as regenerative procedures and pocket reduction surgery offer excellent outcomes for severe cases. These procedures can restore lost tissue and bone structure.',
          beforeAfter: {
            before:
              'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            after:
              'https://images.unsplash.com/photo-1606811841689-23dfdb7ee460?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            caption:
              'Remarkable improvement achieved through advanced periodontal surgical intervention'
          }
        },
        {
          title: 'Long-term Success and Maintenance',
          content:
            'Successful periodontal treatment requires ongoing maintenance and patient compliance. Regular follow-up appointments, proper home care, and lifestyle modifications are essential for long-term success. Patients who maintain good oral hygiene and attend regular maintenance visits have significantly better outcomes.'
        }
      ]
    },
    tags: ['Periodontics', 'Gum Disease', 'Dental Surgery', 'Oral Health'],
    relatedTreatments: [
      'Implantology Techniques',
      'Patient Follow-up',
      'Innovative Surgical Techniques'
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50/30">
      <div className="bg-white shadow-sm border-b border-teal-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="mb-4">
            <span className="inline-block bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
              {treatmentData.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {treatmentData.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {treatmentData.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-teal-500" />
              {treatmentData.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-teal-500" />
              {treatmentData.publishDate}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-teal-500" />
              {treatmentData.readTime}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={treatmentData.image}
                alt={treatmentData.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            <article className="bg-white rounded-2xl shadow-sm border border-teal-100 p-8">
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {treatmentData.content.introduction}
                </p>
              </div>

              {treatmentData.content.sections.map((section, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {section.content}
                  </p>

                  {section.image && (
                    <div className="mb-6">
                      <div className="rounded-xl overflow-hidden shadow-md">
                        <img
                          src={section.image.url}
                          alt={section.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-3 text-center italic">
                        {section.image.caption}
                      </p>
                    </div>
                  )}

                  {section.beforeAfter && (
                    <div className="mb-6">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                          Before & After Results
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="relative rounded-lg overflow-hidden shadow-md">
                              <img
                                src={section.beforeAfter.before}
                                alt="Before treatment"
                                className="w-full h-48 object-cover"
                              />
                              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                BEFORE
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="relative rounded-lg overflow-hidden shadow-md">
                              <img
                                src={section.beforeAfter.after}
                                alt="After treatment"
                                className="w-full h-48 object-cover"
                              />
                              <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                                AFTER
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-4 text-center italic">
                          {section.beforeAfter.caption}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Related Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {treatmentData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-teal-100 text-teal-700 px-3 py-2 rounded-full text-sm font-medium hover:bg-teal-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Actions</h4>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-teal-200 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 text-white">
                <h4 className="font-semibold mb-2">Need a Consultation?</h4>
                <p className="text-teal-100 text-sm mb-4">
                  Schedule an appointment with our periodontal specialists.
                </p>
                <button className="w-full bg-white text-teal-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsPage
