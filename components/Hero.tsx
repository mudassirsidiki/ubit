"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowRight, X } from "lucide-react"

export default function Hero() {
  const searchParams = useSearchParams()
  const [showWelcome, setShowWelcome] = useState(false)
  const [username, setUsername] = useState("")

  useEffect(() => {
    // Check if user just logged in and should see welcome message
    const welcome = searchParams.get("welcome") === "true"
    const storedUsername = localStorage.getItem("username")

    if (welcome && storedUsername) {
      setUsername(storedUsername)
      setShowWelcome(true)

      // Auto-hide welcome message after 5 seconds
      const timer = setTimeout(() => {
        setShowWelcome(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [searchParams])

  const handleCloseWelcome = useCallback(() => {
    setShowWelcome(false)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-primary/90 text-white">
      {/* Welcome notification */}
      {showWelcome && (
        <div
          className="fixed top-20 right-4 z-50 bg-white text-primary px-6 py-4 rounded-lg shadow-lg flex items-center justify-between max-w-md animate-slideIn"
          role="alert"
          aria-live="polite"
        >
          <div>
            <h3 className="font-bold text-lg">Hi {username}!</h3>
            <p>Welcome back to UBIT Services Portal.</p>
          </div>
          <button
            onClick={handleCloseWelcome}
            className="ml-4 p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close notification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              UBIT Services Portal
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-white/80">
                University of Balochistan Institute of Technology
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Access a comprehensive suite of services designed to enhance your academic journey, from result management
              to career opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/#servicesSection" className="btn-primary flex items-center justify-center gap-2 group">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/login" className="btn-outline">
                Sign In
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              {/* Main image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5"
                          aria-hidden="true"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-1">Academic Results</h3>
                      <p className="text-sm text-white/70">Access your results and transcripts</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5"
                          aria-hidden="true"
                        >
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                          <path d="M8 14h.01" />
                          <path d="M12 14h.01" />
                          <path d="M16 14h.01" />
                          <path d="M8 18h.01" />
                          <path d="M12 18h.01" />
                          <path d="M16 18h.01" />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-1">Events</h3>
                      <p className="text-sm text-white/70">Stay updated with university events</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5"
                          aria-hidden="true"
                        >
                          <path d="M17 6.1H3" />
                          <path d="M21 12.1H3" />
                          <path d="M15.1 18H3" />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-1">Fee Management</h3>
                      <p className="text-sm text-white/70">View and pay your fees online</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5"
                          aria-hidden="true"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-1">Alumni Network</h3>
                      <p className="text-sm text-white/70">Connect with UBIT graduates</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">And Much More</h3>
                      <p className="text-sm text-white/70">Explore all our services designed for students</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 rounded-full blur-2xl"
                aria-hidden="true"
              ></div>
              <div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
