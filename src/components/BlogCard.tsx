import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Heart, Eye, Calendar, User } from 'lucide-react'

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

interface BlogCardProps {
  post: BlogPost
}

const BlogCard = ({ post }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-teal-100">
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Badge
            variant="outline"
            className="text-xs border-teal-200 text-teal-700"
          >
            {post.category}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-teal-600" />
            {formatDate(post.publishDate)}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback className="bg-teal-100 text-teal-700">
                <User className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-foreground">
              {post.author.name}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-teal-600" />
              {post.likes}
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4 text-teal-600" />
              {post.views}
            </div>
          </div>
        </div>

        <Button
          className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white"
          variant="default"
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  )
}

export default BlogCard
