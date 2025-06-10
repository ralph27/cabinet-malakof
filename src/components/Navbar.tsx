'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from './ui/button'
import { Globe, Menu, Search, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Treatments', href: '#', hasDropdown: true },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact us', href: '/contact' }
  ]

  const treatmentItems = [
    { name: 'Periodontal Techniques', href: '/treatments/periodontal' },
    { name: 'Implantology Techniques', href: '/treatments/implantology' },
    { name: 'Patient Follow-up', href: '/treatments/follow-up' },
    { name: 'Innovative Surgical Techniques', href: '/treatments/surgical' }
  ]

  return (
    <nav className="bg-[#B8D4D1] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full relative">
                  <div className="absolute inset-1 bg-teal-600 rounded-full"></div>
                  <div className="absolute top-1 left-2 w-1 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800">CABINET</div>
                <div className="text-sm text-gray-700 -mt-1">MALAKOFF</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white rounded-full px-6 py-1 shadow-sm">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    ref={item.hasDropdown ? dropdownRef : null}
                  >
                    {item.hasDropdown ? (
                      <button
                        className="text-gray-700 hover:text-teal-700 px-2 py-1 text-sm font-medium transition-colors duration-200 relative group flex items-center"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-teal-700 px-2 py-1 text-sm font-medium transition-colors duration-200 relative group"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    )}

                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-teal-100 transition-all duration-300 z-50 ${
                          isDropdownOpen
                            ? 'opacity-100 visible transform translate-y-0'
                            : 'opacity-0 invisible transform -translate-y-2'
                        }`}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <div className="py-3">
                          {treatmentItems.map((treatmentItem, index) => (
                            <Link
                              key={treatmentItem.name}
                              href={treatmentItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:text-teal-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-200 relative group"
                            >
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                  {treatmentItem.name}
                                </span>
                              </div>
                              {index < treatmentItems.length - 1 && (
                                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
                              )}
                            </Link>
                          ))}
                        </div>
                        <div className="absolute -top-2 left-4 w-4 h-4 bg-white border-l border-t border-teal-100 transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="bg-white rounded-full px-4 py-1 shadow-sm flex items-center">
              <div className="flex items-center space-x-3 pr-3">
                <button className="text-gray-700 hover:text-teal-700 transition-colors duration-200">
                  <Search className="h-5 w-5" />
                </button>
                <button className="text-gray-700 hover:text-teal-700 transition-colors duration-200">
                  <Globe className="h-5 w-5" />
                </button>
              </div>
              <Button className="bg-gray-700 hover:bg-gray-800 text-white px-4 h-full rounded-full transition-all duration-200 transform hover:scale-105 text-xs font-medium">
                BOOK NOW
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button className="text-gray-700 hover:text-teal-700 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-teal-700 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 bg-[#B8D4D1] border-t border-teal-200">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <div className="space-y-2">
                  <div className="text-gray-700 py-3 text-base font-medium border-b border-teal-200">
                    {item.name}
                  </div>
                  <div className="pl-4 space-y-2">
                    {treatmentItems.map((treatmentItem) => (
                      <Link
                        key={treatmentItem.name}
                        href={treatmentItem.href}
                        className="block text-gray-600 hover:text-teal-700 py-2 text-sm transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        • {treatmentItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-teal-700 py-3 text-base font-medium transition-colors duration-200 border-b border-teal-200 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-full transition-all duration-200 transform hover:scale-105">
              Appointment
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
