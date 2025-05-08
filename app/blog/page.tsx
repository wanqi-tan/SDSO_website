import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building a Robust Data Governance Framework",
    excerpt:
      "How we developed and implemented a comprehensive data governance framework to ensure data quality and compliance.",
    date: "May 15, 2023",
    author: "Dr. Jane Smith",
    category: "Data Governance",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Leveraging AI for Scientific Data Analysis",
    excerpt:
      "Exploring how artificial intelligence can enhance the analysis of complex scientific datasets and accelerate discovery.",
    date: "April 22, 2023",
    author: "Dr. Michael Chen",
    category: "AI & Analytics",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "The Future of Research Data Management",
    excerpt:
      "Insights into emerging trends and technologies that will shape how research data is managed and utilized.",
    date: "March 10, 2023",
    author: "Dr. Sarah Johnson",
    category: "Data Management",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Collaborative Data Sharing Across Research Institutes",
    excerpt: "How we're breaking down silos and fostering collaboration through strategic data sharing initiatives.",
    date: "February 28, 2023",
    author: "Dr. David Tan",
    category: "Collaboration",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Implementing FAIR Data Principles in Research",
    excerpt: "A practical guide to making research data Findable, Accessible, Interoperable, and Reusable.",
    date: "January 15, 2023",
    author: "Dr. Lisa Wong",
    category: "Best Practices",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Data Ethics in Scientific Research",
    excerpt: "Navigating the ethical considerations of data collection, analysis, and sharing in scientific research.",
    date: "December 5, 2022",
    author: "Dr. Priya Sharma",
    category: "Ethics",
    readTime: "11 min read",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white">
        <div className="container-sdso">
          <div className="max-w-3xl fade-in-up">
            <h1 className="manufactur-heading mb-6">Blog</h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, updates, and perspectives on data strategy and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className={`openai-card sdso-card-hover fade-in-up ${index > 0 ? `stagger-${Math.min(index, 5)}` : ""}`}
              >
                <div className="bg-secondary h-48 rounded-lg mb-4"></div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-accent">{post.category}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/40">
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest insights and updates from the Scientific Data Strategy
              Office.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 flex-1"
              />
              <button type="submit" className="manufactur-button bg-white text-black hover:bg-gray-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
