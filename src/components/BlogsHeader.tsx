import { Sparkles } from 'lucide-react'

const BlogHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full mb-6 border border-teal-100">
        <Sparkles className="w-4 h-4 text-teal-600" />
        <span className="text-teal-700 font-medium text-sm tracking-wide">
          HEALTH INSIGHTS
        </span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
        Latest Blog Posts
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Stay informed with the latest healthcare insights, medical
        breakthroughs, and wellness tips from our expert team.
      </p>
    </div>
  )
}

export default BlogHeader
