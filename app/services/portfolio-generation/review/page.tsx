"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowLeft, MessageCircle, ThumbsUp, Send, Filter } from "lucide-react"

// Sample student portfolios
const studentPortfolios = [
  {
    id: 1,
    name: "Ahmed Khan",
    title: "Full Stack Developer",
    department: "Computer Science",
    batch: "2023",
    image: "/placeholder.svg?height=400&width=400",
    portfolioUrl: "https://example.com/portfolio1",
    description: "A portfolio showcasing web development projects using React, Node.js, and MongoDB.",
    tags: ["Web Development", "React", "Node.js", "MongoDB"],
    likes: 24,
    comments: [
      {
        id: 1,
        user: "Dr. Syed Ali",
        role: "Professor",
        comment: "Excellent work on the e-commerce project. Your code structure is very clean and well-organized.",
        time: "2 days ago",
      },
      {
        id: 2,
        user: "Fatima Zaidi",
        role: "Student",
        comment: "I really like the UI design of your portfolio. What template did you use?",
        time: "1 day ago",
      },
    ],
  },
  {
    id: 2,
    name: "Ayesha Ahmed",
    title: "UI/UX Designer",
    department: "Computer Science",
    batch: "2023",
    image: "/placeholder.svg?height=400&width=400",
    portfolioUrl: "https://example.com/portfolio2",
    description: "A design portfolio featuring mobile app interfaces, user research, and interactive prototypes.",
    tags: ["UI/UX", "Figma", "User Research", "Prototyping"],
    likes: 32,
    comments: [
      {
        id: 1,
        user: "Prof. Amina Khalid",
        role: "Professor",
        comment:
          "Your user research methodology is very thorough. Great job implementing user feedback in your designs.",
        time: "3 days ago",
      },
    ],
  },
  {
    id: 3,
    name: "Muhammad Bilal",
    title: "Data Scientist",
    department: "Computer Science",
    batch: "2022",
    image: "/placeholder.svg?height=400&width=400",
    portfolioUrl: "https://example.com/portfolio3",
    description: "A portfolio showcasing data analysis projects, machine learning models, and visualizations.",
    tags: ["Data Science", "Python", "Machine Learning", "Data Visualization"],
    likes: 18,
    comments: [],
  },
  {
    id: 4,
    name: "Zainab Malik",
    title: "Frontend Developer",
    department: "Computer Science",
    batch: "2023",
    image: "/placeholder.svg?height=400&width=400",
    portfolioUrl: "https://example.com/portfolio4",
    description: "A portfolio featuring responsive web designs, animations, and interactive user interfaces.",
    tags: ["Frontend", "JavaScript", "CSS", "React"],
    likes: 27,
    comments: [
      {
        id: 1,
        user: "Hassan Ali",
        role: "Industry Professional",
        comment: "Your animation work is impressive. Have you considered applying for our internship program?",
        time: "1 week ago",
      },
      {
        id: 2,
        user: "Saad Khan",
        role: "Student",
        comment: "The responsive design on your portfolio is amazing. Would love to learn how you implemented it.",
        time: "5 days ago",
      },
    ],
  },
  {
    id: 5,
    name: "Omar Farooq",
    title: "Mobile App Developer",
    department: "Computer Science",
    batch: "2022",
    image: "/placeholder.svg?height=400&width=400",
    portfolioUrl: "https://example.com/portfolio5",
    description: "A portfolio showcasing Android and iOS applications with a focus on performance and user experience.",
    tags: ["Mobile Development", "Android", "iOS", "Flutter"],
    likes: 21,
    comments: [
      {
        id: 1,
        user: "Dr. Imran Malik",
        role: "Professor",
        comment: "Your approach to cross-platform development is very practical. Good use of Flutter.",
        time: "2 weeks ago",
      },
    ],
  },
  {
    id: 6,
    name: "Hira Naveed",
    title: "Cybersecurity Specialist",
    department: "Computer Science",
    batch: "2022",
    image: "/placeholder.svg?height=400&width=400",
    portfolioUrl: "https://example.com/portfolio6",
    description:
      "A portfolio highlighting security analysis, penetration testing projects, and security tool development.",
    tags: ["Cybersecurity", "Penetration Testing", "Network Security"],
    likes: 15,
    comments: [],
  },
]

// All available tags for filtering
const allTags = [
  "Web Development",
  "React",
  "Node.js",
  "MongoDB",
  "UI/UX",
  "Figma",
  "User Research",
  "Prototyping",
  "Data Science",
  "Python",
  "Machine Learning",
  "Data Visualization",
  "Frontend",
  "JavaScript",
  "CSS",
  "Mobile Development",
  "Android",
  "iOS",
  "Flutter",
  "Cybersecurity",
  "Penetration Testing",
  "Network Security",
]

export default function PortfolioReviewPage() {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null)
  const [newComment, setNewComment] = useState("")
  const [portfolios, setPortfolios] = useState(studentPortfolios)
  const [selectedTags, setSelectedTags] = useState([])
  const [showFilters, setShowFilters] = useState(false)

  // Filter portfolios based on selected tags
  const filteredPortfolios =
    selectedTags.length > 0
      ? portfolios.filter((portfolio) => portfolio.tags.some((tag) => selectedTags.includes(tag)))
      : portfolios

  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const handleLike = (portfolioId) => {
    setPortfolios(
      portfolios.map((portfolio) =>
        portfolio.id === portfolioId ? { ...portfolio, likes: portfolio.likes + 1 } : portfolio,
      ),
    )
  }

  const handleAddComment = (portfolioId) => {
    if (!newComment.trim()) return

    const updatedPortfolios = portfolios.map((portfolio) => {
      if (portfolio.id === portfolioId) {
        const newCommentObj = {
          id: portfolio.comments.length + 1,
          user: "You", // In a real app, this would be the logged-in user
          role: "Student",
          comment: newComment,
          time: "Just now",
        }
        return {
          ...portfolio,
          comments: [...portfolio.comments, newCommentObj],
        }
      }
      return portfolio
    })

    setPortfolios(updatedPortfolios)
    setNewComment("")
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
            <span>Portfolio Review</span>
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

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Student Portfolio Showcase</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Browse and review portfolios created by UBIT students. Provide feedback to help your peers improve their
              work.
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            <Filter className="w-5 h-5 text-gray-600" />
            <span>Filter</span>
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Filter by Skills & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedTags.includes(tag) ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            {selectedTags.length > 0 && (
              <div className="mt-4 flex justify-end">
                <button onClick={() => setSelectedTags([])} className="text-primary hover:underline text-sm">
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-48">
                <Image src={portfolio.image || "/placeholder.svg"} alt={portfolio.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{portfolio.name}</h3>
                    <p>{portfolio.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-600">
                    {portfolio.department} • {portfolio.batch}
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4 text-primary" />
                    <span className="text-sm">{portfolio.likes}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{portfolio.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {portfolio.tags.map((tag, index) => (
                    <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => setSelectedPortfolio(portfolio)}
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Review ({portfolio.comments.length})</span>
                  </button>
                  <a
                    href={portfolio.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPortfolios.length === 0 && (
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-gray-600 mb-4">No portfolios match your selected filters.</p>
            <button onClick={() => setSelectedTags([])} className="text-primary hover:underline">
              Clear all filters
            </button>
          </div>
        )}

        {/* Portfolio Review Modal */}
        {selectedPortfolio && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-xl font-bold">Portfolio Review</h3>
                <button onClick={() => setSelectedPortfolio(null)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative">
                    <Image
                      src={selectedPortfolio.image || "/placeholder.svg"}
                      alt={selectedPortfolio.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{selectedPortfolio.name}</h4>
                    <p className="text-primary">{selectedPortfolio.title}</p>
                    <p className="text-sm text-gray-600">
                      {selectedPortfolio.department} • {selectedPortfolio.batch}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium mb-2">About the Portfolio</h5>
                  <p className="text-gray-700">{selectedPortfolio.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {selectedPortfolio.tags.map((tag, index) => (
                      <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-medium">Reviews & Feedback</h5>
                    <button
                      onClick={() => handleLike(selectedPortfolio.id)}
                      className="flex items-center gap-1 text-gray-600 hover:text-primary"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{selectedPortfolio.likes} Likes</span>
                    </button>
                  </div>

                  {selectedPortfolio.comments.length > 0 ? (
                    <div className="space-y-4">
                      {selectedPortfolio.comments.map((comment) => (
                        <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <div className="font-medium">
                              {comment.user} <span className="text-xs text-gray-500">({comment.role})</span>
                            </div>
                            <div className="text-xs text-gray-500">{comment.time}</div>
                          </div>
                          <p className="text-gray-700">{comment.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic text-center py-4">
                      No reviews yet. Be the first to provide feedback!
                    </p>
                  )}
                </div>

                <div>
                  <h5 className="font-medium mb-2">Add Your Review</h5>
                  <div className="flex gap-2">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your thoughts, suggestions, or questions about this portfolio..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                      rows={3}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200 flex justify-between">
                <a
                  href={selectedPortfolio.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Full Portfolio
                </a>
                <button
                  onClick={() => handleAddComment(selectedPortfolio.id)}
                  disabled={!newComment.trim()}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Create Your Own Portfolio</h2>
            <p className="text-gray-600 mb-8">
              Ready to showcase your skills and projects? Create your own professional portfolio and join the UBIT
              student showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/portfolio-generation/generate"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Create Your Portfolio
              </Link>
              <Link
                href="/services/portfolio-generation/templates"
                className="bg-white text-primary px-6 py-3 rounded-lg border border-primary hover:bg-primary/5 transition-colors"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
