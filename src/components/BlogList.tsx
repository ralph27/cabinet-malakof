import BlogCard from './BlogCard'

interface BlogPost {
  id: number
  title: string
  description: string
  image: string
  author: {
    name: string
    avatar: string
  }
  publishDate: string
  likes: number
  views: number
  category: string
}

interface BlogListProps {
  posts: BlogPost[]
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default BlogList
