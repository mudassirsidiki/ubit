"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  ArrowLeft,
  Plus,
  Trash2,
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  Globe,
  Check,
} from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function PortfolioGeneratorPage() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template")

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    github: "",
    linkedin: "",
    skills: [],
    education: [],
    experience: [],
    projects: [],
  })

  const [newSkill, setNewSkill] = useState("")
  const [newEducation, setNewEducation] = useState({
    institution: "",
    degree: "",
    field: "",
    startYear: "",
    endYear: "",
  })
  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  })
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: "",
    link: "",
    image: "",
  })

  const [activeTab, setActiveTab] = useState("personal")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPortfolio, setGeneratedPortfolio] = useState(null)
  const [templateStyle, setTemplateStyle] = useState({
    primaryColor: "#3b82f6",
    secondaryColor: "#f3f4f6",
    fontFamily: "'Inter', sans-serif",
    borderRadius: "0.5rem",
  })

  // Set template style based on selected template
  useEffect(() => {
    if (templateId) {
      switch (templateId) {
        case "minimal":
          setTemplateStyle({
            primaryColor: "#3b82f6",
            secondaryColor: "#f3f4f6",
            fontFamily: "'Inter', sans-serif",
            borderRadius: "0.5rem",
          })
          break
        case "creative":
          setTemplateStyle({
            primaryColor: "#f59e0b",
            secondaryColor: "#fef3c7",
            fontFamily: "'Poppins', sans-serif",
            borderRadius: "1rem",
          })
          break
        case "professional":
          setTemplateStyle({
            primaryColor: "#0ea5e9",
            secondaryColor: "#f8fafc",
            fontFamily: "'Roboto', sans-serif",
            borderRadius: "0.25rem",
          })
          break
        case "academic":
          setTemplateStyle({
            primaryColor: "#10b981",
            secondaryColor: "#f0fdf4",
            fontFamily: "'Merriweather', serif",
            borderRadius: "0.375rem",
          })
          break
        default:
          // Default style
          break
      }
    }
  }, [templateId])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Add a new skill
  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }))
      setNewSkill("")
    }
  }

  // Remove a skill
  const removeSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }))
  }

  // Handle education form changes
  const handleEducationChange = (e) => {
    const { name, value } = e.target
    setNewEducation((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Add a new education entry
  const addEducation = () => {
    if (newEducation.institution && newEducation.degree) {
      setFormData((prev) => ({
        ...prev,
        education: [...prev.education, newEducation],
      }))
      setNewEducation({
        institution: "",
        degree: "",
        field: "",
        startYear: "",
        endYear: "",
      })
    }
  }

  // Remove an education entry
  const removeEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }))
  }

  // Handle experience form changes
  const handleExperienceChange = (e) => {
    const { name, value } = e.target
    setNewExperience((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Add a new experience entry
  const addExperience = () => {
    if (newExperience.company && newExperience.position) {
      setFormData((prev) => ({
        ...prev,
        experience: [...prev.experience, newExperience],
      }))
      setNewExperience({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      })
    }
  }

  // Remove an experience entry
  const removeExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }))
  }

  // Handle project form changes
  const handleProjectChange = (e) => {
    const { name, value } = e.target
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Add a new project
  const addProject = () => {
    if (newProject.title && newProject.description) {
      setFormData((prev) => ({
        ...prev,
        projects: [...prev.projects, newProject],
      }))
      setNewProject({
        title: "",
        description: "",
        technologies: "",
        link: "",
        image: "",
      })
    }
  }

  // Remove a project
  const removeProject = (index) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }))
  }

  // Generate the portfolio
  const generatePortfolio = () => {
    setIsGenerating(true)

    // Simulate portfolio generation
    setTimeout(() => {
      setGeneratedPortfolio(formData)
      setIsGenerating(false)
    }, 1500)
  }

  // Handle portfolio submission
  const handleSubmitPortfolio = () => {
    // In a real app, this would submit the portfolio to a database
    alert("Your portfolio has been submitted to the UBIT Portfolio Showcase!")
    // Redirect to the review page
    window.location.href = "/services/portfolio-generation/review"
  }

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
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services/portfolio-generation" className="hover:underline">
              Portfolio Generation
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Generate</span>
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

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Create Your Portfolio</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
          Fill in the details below to generate a professional portfolio. You can download or preview your portfolio
          once it's generated.
        </p>

        {!generatedPortfolio ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tabs Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sticky top-24">
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab("personal")}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeTab === "personal"
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">1</span>
                    Personal Info
                  </button>
                  <button
                    onClick={() => setActiveTab("skills")}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeTab === "skills"
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">2</span>
                    Skills
                  </button>
                  <button
                    onClick={() => setActiveTab("education")}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeTab === "education"
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">3</span>
                    Education
                  </button>
                  <button
                    onClick={() => setActiveTab("experience")}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeTab === "experience"
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">4</span>
                    Experience
                  </button>
                  <button
                    onClick={() => setActiveTab("projects")}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeTab === "projects"
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">5</span>
                    Projects
                  </button>
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={generatePortfolio}
                    disabled={!formData.name || isGenerating}
                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Generating...</span>
                      </>
                    ) : (
                      <span>Generate Portfolio</span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                {/* Personal Information */}
                {activeTab === "personal" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Professional Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="e.g. Software Engineer"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label
                          htmlFor="bio"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Bio / About Me
                        </label>
                        <textarea
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Write a short bio about yourself..."
                        ></textarea>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="e.g. Karachi, Pakistan"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="website"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Website
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="e.g. https://yourwebsite.com"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="github"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          GitHub Profile
                        </label>
                        <input
                          type="url"
                          id="github"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          placeholder="e.g. https://github.com/username"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="linkedin"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          id="linkedin"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          placeholder="e.g. https://linkedin.com/in/username"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Skills */}
                {activeTab === "skills" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Skills</h2>
                    <div className="mb-6">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          placeholder="Add a skill (e.g. JavaScript, Photoshop)"
                          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          onKeyPress={(e) => e.key === "Enter" && addSkill()}
                        />
                        <button
                          onClick={addSkill}
                          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full flex items-center gap-2"
                        >
                          <span className="text-gray-800 dark:text-gray-200">{skill}</span>
                          <button
                            onClick={() => removeSkill(index)}
                            className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      {formData.skills.length === 0 && (
                        <p className="text-gray-500 dark:text-gray-400 italic">No skills added yet.</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Education */}
                {activeTab === "education" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Education</h2>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-6">
                      <h3 className="font-medium mb-4 text-gray-900 dark:text-white">Add Education</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="institution"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Institution *
                          </label>
                          <input
                            type="text"
                            id="institution"
                            name="institution"
                            value={newEducation.institution}
                            onChange={handleEducationChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="degree"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Degree *
                          </label>
                          <input
                            type="text"
                            id="degree"
                            name="degree"
                            value={newEducation.degree}
                            onChange={handleEducationChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="field"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Field of Study
                          </label>
                          <input
                            type="text"
                            id="field"
                            name="field"
                            value={newEducation.field}
                            onChange={handleEducationChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="startYear"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                              Start Year
                            </label>
                            <input
                              type="text"
                              id="startYear"
                              name="startYear"
                              value={newEducation.startYear}
                              onChange={handleEducationChange}
                              placeholder="e.g. 2018"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="endYear"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                              End Year
                            </label>
                            <input
                              type="text"
                              id="endYear"
                              name="endYear"
                              value={newEducation.endYear}
                              onChange={handleEducationChange}
                              placeholder="e.g. 2022"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={addEducation}
                          disabled={!newEducation.institution || !newEducation.degree}
                          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Add Education
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {formData.education.map((edu, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">{edu.institution}</h4>
                              <p className="text-primary">
                                {edu.degree} {edu.field && `in ${edu.field}`}
                              </p>
                              {(edu.startYear || edu.endYear) && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {edu.startYear} - {edu.endYear || "Present"}
                                </p>
                              )}
                            </div>
                            <button
                              onClick={() => removeEducation(index)}
                              className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                      {formData.education.length === 0 && (
                        <p className="text-gray-500 dark:text-gray-400 italic text-center py-4">
                          No education entries added yet.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Experience */}
                {activeTab === "experience" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Work Experience</h2>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-6">
                      <h3 className="font-medium mb-4 text-gray-900 dark:text-white">Add Experience</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Company *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={newExperience.company}
                            onChange={handleExperienceChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="position"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Position *
                          </label>
                          <input
                            type="text"
                            id="position"
                            name="position"
                            value={newExperience.position}
                            onChange={handleExperienceChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="startDate"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Start Date
                          </label>
                          <input
                            type="text"
                            id="startDate"
                            name="startDate"
                            value={newExperience.startDate}
                            onChange={handleExperienceChange}
                            placeholder="e.g. Jan 2020"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="endDate"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            End Date
                          </label>
                          <input
                            type="text"
                            id="endDate"
                            name="endDate"
                            value={newExperience.endDate}
                            onChange={handleExperienceChange}
                            placeholder="e.g. Present"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Description
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            value={newExperience.description}
                            onChange={handleExperienceChange}
                            rows={3}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Describe your responsibilities and achievements..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={addExperience}
                          disabled={!newExperience.company || !newExperience.position}
                          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Add Experience
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {formData.experience.map((exp, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">{exp.position}</h4>
                              <p className="text-primary">{exp.company}</p>
                              {(exp.startDate || exp.endDate) && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {exp.startDate} - {exp.endDate || "Present"}
                                </p>
                              )}
                              {exp.description && (
                                <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                              )}
                            </div>
                            <button
                              onClick={() => removeExperience(index)}
                              className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                      {formData.experience.length === 0 && (
                        <p className="text-gray-500 dark:text-gray-400 italic text-center py-4">
                          No experience entries added yet.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Projects */}
                {activeTab === "projects" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Projects</h2>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-6">
                      <h3 className="font-medium mb-4 text-gray-900 dark:text-white">Add Project</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Project Title *
                          </label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            value={newProject.title}
                            onChange={handleProjectChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="technologies"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Technologies Used
                          </label>
                          <input
                            type="text"
                            id="technologies"
                            name="technologies"
                            value={newProject.technologies}
                            onChange={handleProjectChange}
                            placeholder="e.g. React, Node.js, MongoDB"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label
                            htmlFor="projectDescription"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Description *
                          </label>
                          <textarea
                            id="projectDescription"
                            name="description"
                            value={newProject.description}
                            onChange={handleProjectChange}
                            rows={3}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Describe your project..."
                          ></textarea>
                        </div>
                        <div>
                          <label
                            htmlFor="link"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Project Link
                          </label>
                          <input
                            type="url"
                            id="link"
                            name="link"
                            value={newProject.link}
                            onChange={handleProjectChange}
                            placeholder="e.g. https://github.com/username/project"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Project Image URL
                          </label>
                          <input
                            type="url"
                            id="image"
                            name="image"
                            value={newProject.image}
                            onChange={handleProjectChange}
                            placeholder="e.g. https://example.com/image.jpg"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={addProject}
                          disabled={!newProject.title || !newProject.description}
                          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Add Project
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {formData.projects.map((project, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm"
                        >
                          <div className="flex justify-between items-start">
                            <div className="w-full">
                              <h4 className="font-semibold text-gray-900 dark:text-white">{project.title}</h4>
                              {project.technologies && <p className="text-primary text-sm">{project.technologies}</p>}
                              <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
                              {project.link && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline text-sm mt-2 inline-block"
                                >
                                  View Project
                                </a>
                              )}
                            </div>
                            <button
                              onClick={() => removeProject(index)}
                              className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 ml-4"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                      {formData.projects.length === 0 && (
                        <p className="text-gray-500 dark:text-gray-400 italic text-center py-4">
                          No projects added yet.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Generated Portfolio</h2>
              <div className="flex gap-3">
                <button
                  onClick={() => setGeneratedPortfolio(null)}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={handleSubmitPortfolio}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Submit to Showcase
                </button>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </div>
            </div>

            {/* Portfolio Preview */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              {/* Header */}
              <div
                className="p-8 text-white"
                style={{
                  backgroundColor: templateStyle.primaryColor,
                  fontFamily: templateStyle.fontFamily,
                }}
              >
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{formData.name}</h1>
                  {formData.title && <p className="text-xl text-white/90 mb-6">{formData.title}</p>}
                  {formData.bio && <p className="text-white/80 max-w-2xl">{formData.bio}</p>}

                  <div className="flex flex-wrap gap-4 mt-6">
                    {formData.email && (
                      <a
                        href={`mailto:${formData.email}`}
                        className="flex items-center gap-2 text-white/90 hover:text-white"
                      >
                        <Mail className="w-4 h-4" />
                        {formData.email}
                      </a>
                    )}
                    {formData.website && (
                      <a
                        href={formData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/90 hover:text-white"
                      >
                        <Globe className="w-4 h-4" />
                        Website
                      </a>
                    )}
                    {formData.github && (
                      <a
                        href={formData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/90 hover:text-white"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    {formData.linkedin && (
                      <a
                        href={formData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/90 hover:text-white"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 bg-white dark:bg-gray-800" style={{ fontFamily: templateStyle.fontFamily }}>
                <div className="max-w-4xl mx-auto space-y-12">
                  {/* Skills Section */}
                  {formData.skills.length > 0 && (
                    <section>
                      <h2
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700"
                        style={{ color: templateStyle.primaryColor }}
                      >
                        Skills
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {formData.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm font-medium"
                            style={{
                              backgroundColor: `${templateStyle.primaryColor}20`,
                              color: templateStyle.primaryColor,
                              borderRadius: templateStyle.borderRadius,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Experience Section */}
                  {formData.experience.length > 0 && (
                    <section>
                      <h2
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700"
                        style={{ color: templateStyle.primaryColor }}
                      >
                        Experience
                      </h2>
                      <div className="space-y-8">
                        {formData.experience.map((exp, index) => (
                          <div key={index}>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.position}</h3>
                            <p style={{ color: templateStyle.primaryColor }} className="font-medium">
                              {exp.company}
                            </p>
                            {(exp.startDate || exp.endDate) && (
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {exp.startDate} - {exp.endDate || "Present"}
                              </p>
                            )}
                            {exp.description && (
                              <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Education Section */}
                  {formData.education.length > 0 && (
                    <section>
                      <h2
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700"
                        style={{ color: templateStyle.primaryColor }}
                      >
                        Education
                      </h2>
                      <div className="space-y-6">
                        {formData.education.map((edu, index) => (
                          <div key={index}>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                            <p style={{ color: templateStyle.primaryColor }}>
                              {edu.degree} {edu.field && `in ${edu.field}`}
                            </p>
                            {(edu.startYear || edu.endYear) && (
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {edu.startYear} - {edu.endYear || "Present"}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Projects Section */}
                  {formData.projects.length > 0 && (
                    <section>
                      <h2
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700"
                        style={{ color: templateStyle.primaryColor }}
                      >
                        Projects
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {formData.projects.map((project, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm"
                            style={{ borderRadius: templateStyle.borderRadius }}
                          >
                            {project.image ? (
                              <div className="h-48 relative">
                                <Image
                                  src={project.image || "/placeholder.svg"}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ) : (
                              <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                <Eye className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                              </div>
                            )}
                            <div className="p-4">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                              {project.technologies && (
                                <p style={{ color: templateStyle.primaryColor }} className="text-sm mt-1">
                                  {project.technologies}
                                </p>
                              )}
                              <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
                              {project.link && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:underline text-sm mt-3 inline-block"
                                  style={{ color: templateStyle.primaryColor }}
                                >
                                  View Project
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
