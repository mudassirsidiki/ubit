import Link from "next/link"
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  FileText,
  BookOpen,
  Download,
  ExternalLink,
} from "lucide-react"

export default function PortfolioGuidelinesPage() {
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
            <span>Guidelines</span>
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

        <h1 className="text-4xl font-bold text-primary mb-4">Portfolio Content Guidelines</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Best practices and recommendations for creating an effective professional portfolio
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                Do's for an Effective Portfolio
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Showcase Your Best Work</h3>
                  <p className="text-gray-600">
                    Quality over quantity. Include only your strongest projects that demonstrate your skills and
                    expertise. Each piece should serve a purpose in telling your professional story.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Tell a Story</h3>
                  <p className="text-gray-600">
                    Structure your portfolio to tell a cohesive story about your professional journey, skills, and
                    accomplishments. Guide visitors through your work in a logical flow.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Include Process Details</h3>
                  <p className="text-gray-600">
                    Don't just show the final product—explain your process, challenges faced, and how you overcame them.
                    This demonstrates your problem-solving abilities and thought process.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Keep It Updated</h3>
                  <p className="text-gray-600">
                    Regularly update your portfolio with new projects and remove outdated work. An up-to-date portfolio
                    shows that you're actively developing your skills.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Make It Accessible</h3>
                  <p className="text-gray-600">
                    Ensure your portfolio is accessible to all users, including those with disabilities. Use alt text
                    for images, ensure proper color contrast, and make navigation intuitive.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Optimize for Search Engines</h3>
                  <p className="text-gray-600">
                    Use relevant keywords in your portfolio content, meta descriptions, and image alt text to improve
                    visibility in search results. This helps potential employers or clients find your work.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Include Testimonials</h3>
                  <p className="text-gray-600">
                    Add testimonials from previous clients, employers, or professors to build credibility. Third-party
                    endorsements can significantly strengthen your portfolio.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-500" />
                Don'ts to Avoid
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Overload with Information</h3>
                  <p className="text-gray-600">
                    Avoid cluttering your portfolio with too much information or too many projects. This can overwhelm
                    visitors and dilute the impact of your best work.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Use Generic Templates</h3>
                  <p className="text-gray-600">
                    While templates can be helpful, avoid using generic ones without customization. Your portfolio
                    should reflect your unique style and personality.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Neglect Mobile Responsiveness</h3>
                  <p className="text-gray-600">
                    Many people will view your portfolio on mobile devices. Ensure your portfolio is fully responsive
                    and looks good on all screen sizes.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Include Irrelevant Work</h3>
                  <p className="text-gray-600">
                    Only include work that's relevant to your current career goals. Irrelevant projects can confuse
                    visitors about your professional focus.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Forget Contact Information</h3>
                  <p className="text-gray-600">
                    Always make it easy for potential clients or employers to contact you. Include clear contact
                    information and consider adding a contact form.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Use Low-Quality Images</h3>
                  <p className="text-gray-600">
                    Poor quality images reflect badly on your work. Always use high-resolution images that showcase your
                    projects in the best possible light.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-1">
                  <h3 className="font-medium text-lg mb-2">Ignore Loading Speed</h3>
                  <p className="text-gray-600">
                    Slow-loading portfolios can cause visitors to leave before seeing your work. Optimize images and
                    code to ensure your portfolio loads quickly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Essential Sections for Your Portfolio
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">About Me</h3>
                  <p className="text-gray-600">
                    A concise, engaging bio that highlights your professional background, skills, and what makes you
                    unique. Keep it professional but let your personality shine through.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Projects/Work Samples</h3>
                  <p className="text-gray-600">
                    The core of your portfolio. Showcase your best work with high-quality images, descriptions of your
                    role, the problem solved, and the outcome.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Skills</h3>
                  <p className="text-gray-600">
                    List your technical and soft skills relevant to your field. Consider organizing them by proficiency
                    level or categorizing them for better readability.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Experience</h3>
                  <p className="text-gray-600">
                    Highlight your professional experience, focusing on achievements rather than just responsibilities.
                    Use metrics where possible to demonstrate impact.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Education & Certifications</h3>
                  <p className="text-gray-600">
                    Include relevant education, certifications, and professional development that support your expertise
                    in your field.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Contact Information</h3>
                  <p className="text-gray-600">
                    Make it easy for potential clients or employers to reach you. Include email, professional social
                    media profiles, and a contact form if possible.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Testimonials/Recommendations</h3>
                  <p className="text-gray-600">
                    Include feedback from clients, colleagues, or professors that highlight your strengths and work
                    ethic. These third-party endorsements add credibility to your portfolio.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Resume/CV</h3>
                  <p className="text-gray-600">
                    Include a downloadable version of your resume or CV for visitors who prefer a traditional format.
                    Make sure it's up-to-date and consistent with your portfolio content.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-6">Field-Specific Portfolio Tips</h2>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">For Computer Science & IT Students</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Include GitHub repositories with clean, well-documented code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Showcase live demos of web applications or software you've developed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Highlight your problem-solving process and technical decision-making</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Include technical blog posts or tutorials you've written</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Feature contributions to open-source projects</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">For Design Students</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Focus on high-quality visuals that showcase your design skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Include before/after examples to demonstrate your impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Explain your design process and the problems you solved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Include user feedback or metrics that show the success of your designs</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">For Business & Management Students</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Highlight case studies of business problems you've solved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Include data visualizations and metrics to demonstrate results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Showcase leadership experiences and team projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Feature presentations or reports you've created (with sensitive information removed)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Ready to Create Your Portfolio?</h3>
              <p className="text-gray-600 mb-6">
                Apply these guidelines to create a standout portfolio that showcases your skills and experience
                effectively.
              </p>
              <Link
                href="/services/portfolio-generation/generate"
                className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors mb-4"
              >
                Create Your Portfolio
              </Link>
              <Link
                href="/services/portfolio-generation/templates"
                className="block w-full bg-white text-primary text-center px-6 py-3 rounded-lg border border-primary hover:bg-primary/5 transition-colors"
              >
                Browse Templates
              </Link>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Additional Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Writing Effective Project Descriptions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Portfolio SEO Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Visual Design Tips for Portfolios
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Showcasing Collaborative Projects
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 text-primary" />
                  Downloadable Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Portfolio Checklist PDF
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Project Description Template
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Portfolio Content Planner
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-4 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  External Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Behance - Design Inspiration
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      GitHub - Developer Portfolios
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      LinkedIn Profile Optimization
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
