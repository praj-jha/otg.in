import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

// Mock Button component since we don't have access to shadcn/ui
const Button = React.forwardRef(({
  children,
  variant = 'default',
  size = 'default',
  asChild = false,
  className = '',
  disabled = false,
  onClick,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'

  const variants = {
    default: 'bg-orange-500 text-white hover:bg-orange-600 border-orange-500',
    outline: 'border hover:bg-gray-100/10'
  }

  const sizes = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md'
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      className: `${children.props.className || ''} ${classes}`,
      disabled,
      onClick,
      ...props
    })
  }

  return (
    <button ref={ref} className={classes} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  )
})

// Utility function
const cn = (...classes) => classes.filter(Boolean).join(' ')

// Constants moved outside component to prevent recreations
const SERVICE_ITEMS = Object.freeze([
  { name: 'Financial Models', href: '/financial-models' },
  { name: 'Valuations', href: '/valuations' },
  { name: 'Pitch Decks & Investment Materials', href: '/pitch-decks' },
  { name: 'Raise Strategy & Term Sheet Advisory', href: '/raise-strategy' },
])

const VERTICAL_ITEMS = Object.freeze([
  { name: 'Finance', href: '#finance' },
  { name: 'Healthcare', href: '#healthcare' },
  { name: 'Retail', href: '#retail' },
  { name: 'Technology', href: '#technology' },
])

const MENU_ITEMS = Object.freeze([
  {
    name: 'Services',
    href: '#services',
    hasDropdown: true,
    dropdownItems: SERVICE_ITEMS
  },
  { name: 'Blogs', href: '#blogs' },
  { name: 'About', href: '/about' },
])

// Secure link validation
const isValidHref = (href) => {
  if (!href || typeof href !== 'string') return false
  // Allow internal links and mailto
  return href.startsWith('#') || href.startsWith('/') || href.startsWith('mailto:')
}

// Memoized Mobile Dropdown Component
const MobileDropdown = React.memo(({ label, items, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(prev => !prev)
  }, [])

  const handleItemClick = useCallback((href) => {
    setIsOpen(false)
    onItemClick?.(href)
  }, [onItemClick])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleDropdown(e)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }, [toggleDropdown])

  return (
    <div ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        className="flex w-full items-center justify-between text-gray-300 hover:text-white py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`dropdown-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`dropdown-${label.toLowerCase().replace(/\s+/g, '-')}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${items.length * 42}px` : '0px',
          opacity: isOpen ? 1 : 0,
          marginLeft: '12px',
          borderLeft: '1px solid #e5e7eb',
        }}
        role="menu"
        aria-hidden={!isOpen}
      >
        {items.map((item, idx) => (
          <a
            key={`${item.name}-${idx}`}
            href={isValidHref(item.href) ? item.href : '#'}
            onClick={(e) => {
              if (!isValidHref(item.href)) {
                e.preventDefault()
                return
              }
              handleItemClick(item.href)
            }}
            className="block pl-4 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
})

MobileDropdown.displayName = 'MobileDropdown'

// Main Navbar Component
export const Navbar = ({ className, ...props }) => {
  const [menuState, setMenuState] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const scrollTimeoutRef = useRef(null)
  const navigate = useNavigate()  // Navigation handler for React Router and external links
  const handleNavigation = useCallback((href, e) => {
    if (!href || typeof href !== 'string') {
      e?.preventDefault()
      return
    }

    if (href.startsWith('/')) {
      // React Router navigation
      e?.preventDefault()
      navigate(href)
    }
    // Let anchor tags handle # links and mailto naturally
  }, [navigate])

  // Determine text colors based on scroll state and props
  const getTextColors = useCallback(() => {
    return {
      primary: 'text-white',
      primaryHover: 'hover:text-gray-300',
      secondary: 'text-gray-300',
      secondaryHover: 'hover:text-white'
    }
  }, [scrolled, className])

  // Handle mounting to prevent hydration mismatches
  useEffect(() => {
    setMounted(true)
    // Check initial scroll position on mount
    const initialScrollY = window.scrollY
    setScrolled(initialScrollY > 20)
  }, [])

  // Optimized scroll handler with debouncing
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
    }, 10) // Small debounce for smooth performance
  }, [])

  // Handle clicks outside mobile menu
  const handleClickOutside = useCallback((event) => {
    if (
      menuState &&
      mobileMenuRef.current &&
      navRef.current &&
      !navRef.current.contains(event.target)
    ) {
      setMenuState(false)
    }
  }, [menuState])

  // Handle escape key
  const handleEscapeKey = useCallback((event) => {
    if (event.key === 'Escape' && menuState) {
      setMenuState(false)
    }
  }, [menuState])

  // Handle window resize
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024 && menuState) {
      setMenuState(false)
    }
  }, [menuState])

  // Set up event listeners
  useEffect(() => {
    if (!mounted) return

    const controller = new AbortController()
    const { signal } = controller

    window.addEventListener('scroll', handleScroll, { passive: true, signal })
    document.addEventListener('click', handleClickOutside, { signal })
    document.addEventListener('keydown', handleEscapeKey, { signal })
    window.addEventListener('resize', handleResize, { signal })

    return () => {
      controller.abort()
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [mounted, handleScroll, handleClickOutside, handleEscapeKey, handleResize])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuState) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuState])

  const toggleMenu = useCallback(() => {
    setMenuState(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuState(false)
  }, [])

  const handleMobileItemClick = useCallback(() => {
    closeMenu()
  }, [closeMenu])

  const handleMenuKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleMenu()
    }
  }, [toggleMenu])

  // Memoized navigation items
  const navigationItems = useMemo(() => {
    const colors = getTextColors()
    return MENU_ITEMS.map((item, index) => (
      <li key={`nav-${item.name}-${index}`} className="relative group">
        {item.hasDropdown ? (
          <div className="relative">
            <button
              className={`flex items-center gap-1 ${colors.primary} ${colors.primaryHover} transition-colors duration-150 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded`}
              aria-expanded="false"
              aria-haspopup="true"
              aria-controls={`desktop-dropdown-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <span>{item.name}</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
            </button>
            <div
              id={`desktop-dropdown-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md bg-gray-900/95 backdrop-blur-md py-2 shadow-lg ring-1 ring-white/10 transition-all duration-200 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible"
              role="menu"
              aria-hidden="true"
            >
              <div className="absolute -top-2 left-5 h-2 w-2 rotate-45 bg-gray-900/95"></div>
              {item.dropdownItems.map((dropdownItem, idx) => (
                <a
                  key={`${dropdownItem.name}-${idx}`}
                  href={isValidHref(dropdownItem.href) ? dropdownItem.href : '#'}
                  onClick={(e) => handleNavigation(dropdownItem.href, e)}
                  className="block px-5 py-2 text-sm text-gray-100 hover:bg-gray-800/50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  role="menuitem"
                >
                  {dropdownItem.name}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <a
            href={isValidHref(item.href) ? item.href : '#'}
            onClick={(e) => handleNavigation(item.href, e)}
            className={`${colors.primary} ${colors.primaryHover} block py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded`}
          >
            <span>{item.name}</span>
          </a>
        )}
      </li>
    ))
  }, [getTextColors, handleNavigation])

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return null
  }

  return (
    <header ref={navRef} role="banner">
      <nav
        className={cn(
          'fixed z-50 w-full transition-all duration-300 bg-gray-900 backdrop-blur-md shadow-sm border-b border-gray-800'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={cn(
            'mx-auto px-6 transition-all duration-300',
            scrolled ? 'max-w-6xl' : 'max-w-7xl'
          )}
        >
          <div
            className={cn(
              'relative flex items-center justify-between transition-all duration-300',
              scrolled ? 'py-2' : 'py-3'
            )}
          >
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => handleNavigation('/', e)}
              aria-label="One Trillion Group India - Home"
              className="flex items-center space-x-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <Logo isLight={!scrolled && className?.includes('text-white')} />
            </a>

            {/* Desktop Navigation */}
            <div
              className={cn(
                'hidden lg:flex absolute left-1/2 transform -translate-x-1/2 transition-transform duration-300',
                scrolled && 'scale-95'
              )}
            >
              <ul className="flex gap-8 text-sm" role="menubar">
                {navigationItems}
              </ul>
            </div>

            {/* Desktop Buttons */}
            <div
              className={cn(
                'hidden lg:flex gap-3 transition-transform duration-300',
                scrolled && 'scale-95'
              )}
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                <a href="mailto:contact@onetrilliongroup.in">
                  <span>Email</span>
                </a>
              </Button>
              <Button asChild size="sm" className="bg-orange-500 text-white hover:bg-orange-600">
                <a href="#contact">
                  <span>Contact Us</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              onKeyDown={handleMenuKeyDown}
              aria-label={menuState ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuState}
              aria-controls="mobile-menu"
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <Menu
                className={cn(
                  'size-6 transition-all duration-200',
                  menuState && 'rotate-180 scale-0 opacity-0'
                )}
                aria-hidden="true"
              />
              <X
                className={cn(
                  'absolute inset-0 m-auto size-6 transition-all duration-200',
                  menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'
                )}
                aria-hidden="true"
              />
            </button>

            {/* Mobile Menu */}
            <div
              id="mobile-menu"
              ref={mobileMenuRef}
              className={cn(
                "absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800 shadow-lg lg:hidden transition-all duration-300",
                menuState ? "opacity-100 visible" : "opacity-0 invisible"
              )}
              aria-hidden={!menuState}
              role="menu"
            >
              <div className="p-6 space-y-4">
                <ul className="space-y-4 text-base" role="none">
                  {MENU_ITEMS.map((item, index) => (
                    <li key={`mobile-${item.name}-${index}`} role="none">
                      {item.hasDropdown ? (
                        <MobileDropdown
                          label={item.name}
                          items={item.dropdownItems}
                          onItemClick={handleMobileItemClick}
                        />
                      ) : (
                        <a
                          href={isValidHref(item.href) ? item.href : '#'}
                          onClick={(e) => {
                            if (!isValidHref(item.href)) {
                              e.preventDefault()
                              return
                            }
                            handleMobileItemClick()
                          }}
                          className="text-gray-300 hover:text-white block py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                          role="menuitem"
                        >
                          <span>{item.name}</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-800">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <a href="mailto:contact@onetrilliongroup.in">
                      <span>Email</span>
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-orange-500 text-white hover:bg-orange-600">
                    <a href="#contact">
                      <span>Contact Us</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

// Memoized Logo Component
const Logo = React.memo(({ className, isLight = false }) => {
  return (
    <div className={cn("flex items-center select-none", className)}>
      <img
        src="/otglogo.png"
        alt="One Trillion Group India"
        className="h-12 w-auto"
      />
    </div>
  )
})

Logo.displayName = 'Logo'

export default Navbar