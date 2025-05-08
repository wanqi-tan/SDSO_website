import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "SDSO Launches New Data Analytics Platform",
    excerpt:
      "The Scientific Data Strategy Office has launched a new analytics platform to enhance data-driven decision making across A*STAR.",
    date: "June 10, 2023",
    category: "Announcement",
  },
  {
    id: 2,
    title: "Quarterly Newsletter: Q2 2023",
    excerpt: "Our latest quarterly newsletter highlights recent achievements, upcoming events, and new resources.",
    date: "July 1, 2023",
    category: "Newsletter",
  },
  {
    id: 3,
    title: "SDSO Partners with International Research Consortium",
    excerpt: "A new partnership aims to establish global standards for scientific data management and sharing.",
    date: "May 22, 2023",
    category: "Partnership",
  },
  {
    id: 4,
    title: "Success Story: Data Integration Accelerates Vaccine Research",
    excerpt:
      "How our data integration framework helped researchers reduce time-to-insight by 40% in vaccine development.",
    date: "April 15, 2023",
    category: "Success Story",
  },
  {
    id: 5,
    title: "Quarterly Newsletter: Q1 2023",
    excerpt: "Review our Q1 activities, including new initiatives, team updates, and upcoming training sessions.",
    date: "April 1, 2023",
    category: "Newsletter",
  },
  {
    id: 6,
    title: "SDSO Recognized for Excellence in Data Governance",
    excerpt:
      "The Scientific Data Strategy Office received an award for its innovative approach to research data governance.",
    date: "March 15, 2023",
    category: "Recognition",
  },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white">
        <div className="container-sdso">
          <div className="max-w-3xl fade-in-up">
            <h1 className="manufactur-heading mb-6">News</h1>
            <p className="text-xl text-gray-300 mb-8">
              Latest updates, announcements, and newsletters from the Scientific Data Strategy Office
            </p>
          </div>
        </div>
      </section>

      {/* News grid */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className={`openai-card sdso-card-hover fade-in-up ${index > 0 ? `stagger-${Math.min(index, 5)}` : ""}`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="bg-secondary h-full min-h-[120px] rounded-lg"></div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-accent">{item.category}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <div className="flex items-center text-sm font-medium text-accent">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletters section */}
      <section className="section-sdso bg-secondary/20">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12 text-center">Quarterly Newsletters</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Newsletter 1 */}
            <Link href="#" className="openai-card sdso-card-hover fade-in-up">
              <div className="bg-secondary h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">Q2 2023</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Q2 2023 Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Updates on our latest initiatives, team achievements, and upcoming events.
              </p>
              <div className="flex items-center text-sm font-medium text-accent">
                Download PDF <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>

            {/* Newsletter 2 */}
            <Link href="#" className="openai-card sdso-card-hover fade-in-up stagger-1">
              <div className="bg-secondary h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">Q1 2023</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Q1 2023 Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Review of Q1 activities, new partnerships, and training opportunities.
              </p>
              <div className="flex items-center text-sm font-medium text-accent">
                Download PDF <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>

            {/* Newsletter 3 */}
            <Link href="#" className="openai-card sdso-card-hover fade-in-up stagger-2">
              <div className="bg-secondary h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">Q4 2022</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Q4 2022 Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Year-end review, achievements, and strategic plans for the coming year.
              </p>
              <div className="flex items-center text-sm font-medium text-accent">
                Download PDF <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>

            {/* Newsletter 4 */}
            <Link href="#" className="openai-card sdso-card-hover fade-in-up stagger-3">
              <div className="bg-secondary h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">Q3 2022</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Q3 2022 Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Updates on data governance initiatives and research collaborations.
              </p>
              <div className="flex items-center text-sm font-medium text-accent">
                Download PDF <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="#" className="button-sdso button-outline-sdso px-6 py-3">
              View All Newsletters
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories section */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Success Story 1 */}
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up">
              <h3 className="text-xl font-medium mb-3">Data Integration Accelerates Vaccine Research</h3>
              <p className="text-gray-300 mb-4">
                Our data integration framework helped researchers reduce time-to-insight by 40% in vaccine development,
                enabling faster identification of potential candidates.
              </p>
              <Link href="#" className="flex items-center text-sm font-medium text-white/80 hover:text-white">
                Read full story <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Success Story 2 */}
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up stagger-1">
              <h3 className="text-xl font-medium mb-3">AI-Powered Materials Discovery</h3>
              <p className="text-gray-300 mb-4">
                By implementing advanced analytics and AI, we helped materials scientists analyze vast datasets to
                identify novel compounds with specific properties.
              </p>
              <Link href="#" className="flex items-center text-sm font-medium text-white/80 hover:text-white">
                Read full story <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Success Story 3 */}
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up stagger-2">
              <h3 className="text-xl font-medium mb-3">Streamlined Data Governance Implementation</h3>
              <p className="text-gray-300 mb-4">
                Our standardized data governance framework was successfully implemented across three research
                institutes, resulting in improved data quality and compliance with international standards.
              </p>
              <Link href="#" className="flex items-center text-sm font-medium text-white/80 hover:text-white">
                Read full story <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Success Story 4 */}
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up stagger-3">
              <h3 className="text-xl font-medium mb-3">Cross-Institute Data Collaboration</h3>
              <p className="text-gray-300 mb-4">
                By establishing secure data sharing protocols, we facilitated collaboration between five research teams
                across different institutes, leading to breakthrough discoveries in biomedical research.
              </p>
              <Link href="#" className="flex items-center text-sm font-medium text-white/80 hover:text-white">
                Read full story <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="#" className="manufactur-button border border-white/30 hover:bg-white/10">
              View All Success Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
