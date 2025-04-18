"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft, Eye, X } from "lucide-react"

// Define the templates
const templates = [
  {
    id: "minimal",
    title: "Minimal",
    description: "A clean, minimalist design that puts your content front and center",
    image: "/placeholder.svg?height=400&width=600",
    previewImages: [
      "/images/1.png?height=600&width=800",
      "/images/2.png?height=600&width=800",


    ],
    features: ["Clean layout", "Responsive design", "Easy to customize", "Perfect for developers"],
    colors: ["#ffffff", "#f3f4f6", "#111827", "#3b82f6"],
  },
  {
    id: "creative",
    title: "Creative",
    description: "A bold, colorful design for creative professionals to showcase their work",
    image: "/placeholder.svg?height=400&width=600",
    previewImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: ["Vibrant colors", "Gallery layout", "Animation effects", "Perfect for designers"],
    colors: ["#ffffff", "#fef3c7", "#7c2d12", "#f59e0b"],
  },
  {
    id: "professional",
    title: "Professional",
    description: "A sophisticated, corporate design for business professionals",
    image: "/placeholder.svg?height=400&width=600",
    previewImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: ["Business-focused", "Formal layout", "Resume integration", "Perfect for executives"],
    colors: ["#ffffff", "#f8fafc", "#0f172a", "#0ea5e9"],
  },
  {
    id: "academic",
    title: "Academic",
    description: "A structured design for researchers and academics to showcase their work",
    image: "/placeholder.svg?height=400&width=600",
    previewImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: ["Publication listings", "Research focus", "Citation integration", "Perfect for researchers"],
    colors: ["#ffffff", "#f0fdf4", "#14532d", "#10b981"],
  },
]

export default function PortfolioTemplatesPage() {
  const [previewTemplate, setPreviewTemplate] = useState(null)
  const [previewImageIndex, setPreviewImageIndex] = useState(0)

  const openPreview = (template) => {
    setPreviewTemplate(template)
    setPreviewImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closePreview = () => {
    setPreviewTemplate(null)
    document.body.style.overflow = "auto"
  }

  const nextPreviewImage = () => {
    if (previewTemplate) {
      setPreviewImageIndex((prevIndex) => (prevIndex === previewTemplate.previewImages.length - 1 ? 0 : prevIndex + 1))
    }
  }

  const prevPreviewImage = () => {
    if (previewTemplate) {
      setPreviewImageIndex((prevIndex) => (prevIndex === 0 ? previewTemplate.previewImages.length - 1 : prevIndex - 1))
    }
  }

  return (
    <div className="min-h-screen bg-secondary/30 pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-primary text-white py-3">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services/portfolio-generation" className="hover:underline">
              Portfolio Generation
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Templates</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/services/portfolio-generation" className="flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio Generation
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">Portfolio Templates</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Choose from our professionally designed templates to create your perfect portfolio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-[300px] overflow-hidden cursor-pointer" onClick={() => openPreview(template)}>
                <Image
                  src={template.image || "/placeholder.svg"}
                  alt={template.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold">{template.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 rounded-full p-3">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Color Palette:</h4>
                  <div className="flex gap-2">
                    {template.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/services/portfolio-generation/generate?template=${template.id}`}
                    className="flex-1 inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all hover:shadow-md text-center"
                  >
                    Use Template
                  </Link>
                  <button
                    onClick={() => openPreview(template)}
                    className="flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Need a Custom Template?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We can help you create a custom template that perfectly matches your
            needs and style.
          </p>
          <Link
            href="/services/portfolio-generation/generate"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all hover:shadow-md"
          >
            Create Custom Template
          </Link>
        </div>
      </div>

      {/* Template Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold">{previewTemplate.title} Template Preview</h3>
              <button onClick={closePreview} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-auto relative">
              <div className="relative h-[60vh]">
                <Image
                  src={previewTemplate.previewImages[previewImageIndex] || "/placeholder.svg"}
                  alt={`${previewTemplate.title} preview`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevPreviewImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
              >
                <ArrowLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextPreviewImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* Pagination dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {previewTemplate.previewImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPreviewImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === previewImageIndex ? "bg-primary" : "bg-gray-300"}`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Page {previewImageIndex + 1} of {previewTemplate.previewImages.length}
                </p>
              </div>
              <div className="flex gap-3">
                <button onClick={closePreview} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Close
                </button>
                <Link
                  href={`/services/portfolio-generation/generate?template=${previewTemplate.id}`}
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
                >
                  Use This Template
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
