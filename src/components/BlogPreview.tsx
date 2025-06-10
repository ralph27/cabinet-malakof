import { ArrowRight } from 'lucide-react'

export const BlogPreviewSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'PRP In Oral Surgery: A Regenerative Approach To Healing',
      description:
        'Discover how Platelet-Rich Plasma is revolutionizing oral surgery recovery with faster healing and better outcomes.',
      image: 'photo-1581091226825-a6a2a5aee158',
      readTime: '5 min read',
      category: 'Surgery'
    },
    {
      id: 2,
      title: 'What Is Guided Dental Surgery - A Game-Changer For Implants',
      description:
        'Getting a dental implant is no longer what it used to be. Learn about precision-guided techniques.',
      image: 'photo-1488590528505-98d2b5aba04b',
      readTime: '7 min read',
      category: 'Implants'
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Expert Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Latest Discoveries
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay informed with our latest research, treatment insights, and
              dental health knowledge
            </p>
          </div>
          <button className="group bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 self-start lg:self-auto">
            View All Articles
            <ArrowRight className="inline ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${post.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {post.description}
                </p>
                <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors group/btn">
                  Read More
                  <ArrowRight className="inline ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
