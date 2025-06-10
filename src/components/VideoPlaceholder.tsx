'use client'
import React, { useState } from 'react'
import { Play, Volume2, Maximize, RotateCcw } from 'lucide-react'

export const VideoPlaceholder = ({
  title = 'Advanced Dental Procedures',
  duration = '3:45',
  thumbnail = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePlayClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      console.log('Video starts playing...')
    }, 2000)
  }

  return (
    <div className={`relative group ${className}`}>
      <div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-900 to-teal-700 shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video">
          <img
            src={thumbnail}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'scale-105 brightness-75' : 'brightness-90'
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

          {isLoading && (
            <div className="absolute inset-0 bg-teal-900/80 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                <p className="text-white font-medium">Loading video...</p>
              </div>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlayClick}
              disabled={isLoading}
              className={`relative group/play transition-all duration-300 ${
                isHovered ? 'scale-110' : 'scale-100'
              } ${isLoading ? 'pointer-events-none' : ''}`}
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover/play:bg-white/30 group-hover/play:scale-110">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover/play:bg-teal-50">
                  <Play
                    className="w-6 h-6 text-teal-600 ml-1 transition-colors duration-300 group-hover/play:text-teal-700"
                    fill="currentColor"
                  />
                </div>
              </div>

              {!isLoading && (
                <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
              )}
            </button>
          </div>

          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
            {duration}
          </div>
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <Volume2 className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-teal-300 rounded-full opacity-15 group-hover:opacity-30 transition-opacity"></div>
    </div>
  )
}
