import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Users, BookOpen, Code, Award, Lightbulb, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-primary text-white py-3">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Story
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering Students Through Technology
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              UBIT is a student-driven platform designed to streamline academic processes, connect students with
              opportunities, and foster a collaborative learning environment. Built by students, for students, our
              mission is to enhance the university experience through innovative digital solutions.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="UBIT Team"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-xl font-semibold">Building the future of education technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision & Mission */}
        <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-md dark:border dark:border-gray-800 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:shadow-md transition-all border-l-4 border-primary">
              <h3 className="font-semibold text-2xl mb-4 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To create a seamless digital ecosystem that empowers students to excel academically, connect
                professionally, and grow personally. We envision a university experience where technology removes
                barriers, enhances learning, and prepares students for the challenges of tomorrow.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:shadow-md transition-all border-l-4 border-primary">
              <h3 className="font-semibold text-2xl mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To develop and maintain open-source solutions that address real student needs, foster collaboration
                between students and faculty, and create opportunities for hands-on learning in software development and
                design. We're committed to accessibility, security, and continuous improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We embrace new technologies and creative solutions to solve complex problems. Our platform evolves
                continuously to meet changing student needs.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Collaboration</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in the power of community. Our platform is built by students working together, sharing
                knowledge, and supporting each other's growth.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We strive for the highest quality in everything we do. From code to user experience, we're committed to
                excellence in every aspect of our platform.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Learning</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We view every challenge as an opportunity to learn. Our platform serves as both a tool for students and
                a learning environment for contributors.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Accessibility</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe education should be accessible to all. Our platform is designed to be inclusive,
                user-friendly, and available to every student regardless of background.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Community</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We foster a sense of belonging and support among students. Our platform connects individuals to create a
                thriving community of learners and future professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div
                key={member}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Team Member ${member}`}
                    alt={`Team Member ${member}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Team Member {member}</h3>
                  <p className="text-primary text-sm mb-2">Role / Position</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Brief description about the team member and their contribution to the project.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all"
            >
              View Full Team
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="bg-primary text-white rounded-2xl p-8 shadow-lg">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-white/90 mb-8">
              Whether you're a student looking to use our services or a developer interested in contributing to our
              open-source project, we'd love to have you join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Sign Up
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
