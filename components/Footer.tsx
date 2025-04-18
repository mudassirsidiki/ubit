import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black/90 backdrop-blur-sm text-white" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 bg-white/10 rounded-full p-1">
                <Image src="/ubit-logo-white.png" alt="UBIT Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold text-white">UBIT</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Empowering students with cutting-edge education in computer science and information technology since 1999.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <nav aria-label="Primary footer navigation">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav aria-label="Services footer navigation">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/services/result-storage"
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                    >
                      Result Storage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/portfolio-generation"
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                    >
                      Portfolio Generation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/blogs"
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/alumni-network"
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                    >
                      Alumni Network
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/events"
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/buy-sell-books"
                      className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                    >
                      Buy & Sell Books
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary-200 mt-1" aria-hidden="true" />
                  <span className="text-gray-300">University of Karachi, Main University Road, Karachi</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary-200" aria-hidden="true" />
                  <a
                    href="tel:+922199261300"
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    +92 21 9926 1300
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary-200" aria-hidden="true" />
                  <a
                    href="mailto:info@ubit.edu.pk"
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    info@ubit.edu.pk
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">&copy; {currentYear} UBIT. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-gray-300 text-sm hover:text-white transition-colors focus:outline-none focus:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-300 text-sm hover:text-white transition-colors focus:outline-none focus:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
