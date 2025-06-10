'use client'

import { useState } from 'react'
import BlogList from '@/components/BlogList'
import BlogHeader from '@/components/BlogsHeader'

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

const Blogs = () => {
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'Understanding Modern Healthcare Technology',
      description:
        "Explore how digital innovation is transforming patient care and medical procedures in today's healthcare landscape.",
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Dr. Sarah Johnson',
        avatar:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
      publishDate: '2024-01-15',
      likes: 245,
      views: 1820,
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Mental Health in the Digital Age',
      description:
        'Addressing the challenges and opportunities for mental wellness in our increasingly connected world.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Dr. Michael Chen',
        avatar:
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
      publishDate: '2024-01-10',
      likes: 189,
      views: 2340,
      category: 'Mental Health'
    },
    {
      id: 3,
      title: 'Preventive Care: Your Best Investment',
      description:
        'Learn why regular check-ups and preventive measures are crucial for maintaining long-term health and wellness.',
      image:
        'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Dr. Emily Rodriguez',
        avatar:
          'https://images.unsplash.com/photo-1594824797441-d75052db3b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
      publishDate: '2024-01-05',
      likes: 312,
      views: 2890,
      category: 'Prevention'
    },
    {
      id: 4,
      title: 'Nutrition and Lifestyle Medicine',
      description:
        'Discover the powerful connection between what we eat, how we live, and our overall health outcomes.',
      image:
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Dr. James Wilson',
        avatar:
          'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
      publishDate: '2023-12-28',
      likes: 278,
      views: 1950,
      category: 'Nutrition'
    },
    {
      id: 5,
      title: 'Telemedicine: The Future is Now',
      description:
        'How remote healthcare consultations are making medical care more accessible and convenient for patients.',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Dr. Lisa Thompson',
        avatar:
          'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
      publishDate: '2023-12-20',
      likes: 456,
      views: 3240,
      category: 'Telemedicine'
    },
    {
      id: 6,
      title: 'Exercise as Medicine',
      description:
        'Understanding how physical activity serves as one of the most effective treatments for various health conditions.',
      image:
        'https://images.unsplash.com/photo-1571019613914-85e3cbcc1ed8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Dr. Robert Kim',
        avatar:
          'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
      publishDate: '2023-12-15',
      likes: 203,
      views: 1670,
      category: 'Fitness'
    }
  ])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <BlogHeader />
        <BlogList posts={blogPosts} />
      </div>
    </div>
  )
}

export default Blogs
