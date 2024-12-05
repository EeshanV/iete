'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    children: [
      { name: 'Organization', href: '/about/organization' },
      { name: 'Advisory Committee', href: '/about/advisory-committee' },
      { name: 'Sub-Committees', href: '/about/sub-committees' },
    ],
  },
  {
    name: 'Academics',
    children: [
      { name: 'Short Term Courses', href: '/academics/short-term-courses' },
      { name: 'R & D Activities', href: '/academics/r-and-d-activities' },
    ],
  },
  {
    name: 'Membership',
    children: [
      { name: 'Join IETE', href: '/membership/join-iete' },
      { name: 'Membership Categories', href: '/membership/membership-categories' },
      { name: 'Registration of Experts', href: '/membership/registration-of-experts' },
      { name: 'Organization Members', href: '/membership/organization-members' },
      { name: 'E-Directory of Members', href: 'http://iete-elan.ac.in/elan/membership/membership.jsp', external: true },
    ],
  },
  {
    name: 'Students',
    children: [
      { name: "Student's Forum", href: '/students/students-forum' },
      { name: 'Facilities', href: '/students/facilities' },
    ],
  },
  {
    name: 'Resources',
    children: [
      { name: 'Newsletter', href: '/resources/newsletter' },
      { name: 'News & Events', href: '/resources/news-and-events' },
      { name: 'Recent Events', href: '/resources/recent-events'},
    ],
  },
  {
    name: 'Contact',
    children: [
      { name: 'Contact Us', href: '/contact/contact-us' },
      { name: 'Suggestions', href: '/contact/suggestions' },
    ],
  },
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const isActiveLink = (href: string) => {
    return pathname === href
  }

  const isActiveDropdown = (children: any[]) => {
    return children.some(child => pathname === child.href)
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative z-10">
              <img 
                src="/IETE-Logo.png" 
                alt="IETE Hyderabad Logo" 
                className="h-16 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group"
                >
                  {item.children ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                          isScrolled 
                            ? `text-gray-700 ${isActiveDropdown(item.children) ? 'bg-gray-100' : 'hover:bg-gray-100'}` 
                            : `text-white ${isActiveDropdown(item.children) ? 'bg-black/10' : 'hover:bg-black/10'}`
                        } transition-colors`}
                      >
                        {item.name}
                        <ChevronDown size={16} className="ml-1" />
                      </button>

                      {openDropdown === item.name && (
                        <div 
                          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                          onMouseEnter={() => setOpenDropdown(item.name)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <div className="py-1" role="menu">
                            {item.children.map((child, childIndex) => (
                              child.external ? (
                                <a
                                  key={childIndex}
                                  href={child.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`block px-4 py-2 text-sm ${
                                    isActiveLink(child.href)
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700 hover:bg-gray-100'
                                  }`}
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {child.name}
                                </a>
                              ) : (
                                <Link
                                  key={childIndex}
                                  href={child.href}
                                  className={`block px-4 py-2 text-sm ${
                                    isActiveLink(child.href)
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700 hover:bg-gray-100'
                                  }`}
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {child.name}
                                </Link>
                              )
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={item.href} 
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isScrolled 
                          ? `text-gray-700 ${isActiveLink(item.href) ? 'bg-gray-100' : 'hover:bg-gray-100'}` 
                          : `text-white ${isActiveLink(item.href) ? 'bg-black/10' : 'hover:bg-black/10'}`
                      } transition-colors`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-black/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="px-4 py-2 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md ${
                        isActiveDropdown(item.children)
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transform transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {openDropdown === item.name && (
                      <div className="ml-4 space-y-1">
                        {item.children.map((child, childIndex) => (
                          child.external ? (
                            <a
                              key={childIndex}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`block px-3 py-2 rounded-md ${
                                isActiveLink(child.href)
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-600 hover:bg-gray-100'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.name}
                            </a>
                          ) : (
                            <Link
                              key={childIndex}
                              href={child.href}
                              className={`block px-3 py-2 rounded-md ${
                                isActiveLink(child.href)
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-600 hover:bg-gray-100'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md ${
                      isActiveLink(item.href)
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Overlay for transparent navbar */}
      {!isScrolled && (
        <div 
          className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/50 to-transparent z-40 pointer-events-none"
          style={{ backdropFilter: 'blur(4px)' }}
        />
      )}
    </>
  )
} 