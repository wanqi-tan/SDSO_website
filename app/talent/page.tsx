import Link from "next/link"
import { MapPin, Clock } from "lucide-react"

// Sample job openings data
const jobOpenings = [
  {
    id: 1,
    title: "Senior Data Scientist",
    description:
      "Lead advanced analytics projects and develop innovative data solutions for complex research challenges.",
    location: "Singapore",
    type: "Full-time",
    department: "Data Science & Analytics",
  },
  {
    id: 2,
    title: "Data Governance Specialist",
    description: "Develop and implement data governance frameworks and policies to ensure data quality and compliance.",
    location: "Singapore",
    type: "Full-time",
    department: "Data Governance",
  },
  {
    id: 3,
    title: "AI Research Engineer",
    description: "Research and develop AI solutions for data analysis, pattern recognition, and predictive modeling.",
    location: "Singapore",
    type: "Full-time",
    department: "AI & Machine Learning",
  },
  {
    id: 4,
    title: "Data Strategy Consultant",
    description: "Advise research teams and partners on data strategy development and implementation.",
    location: "Remote",
    type: "Contract",
    department: "Strategy & Consulting",
  },
  {
    id: 5,
    title: "Research Data Manager",
    description:
      "Oversee the management of research data throughout its lifecycle, ensuring compliance with standards and best practices.",
    location: "Singapore",
    type: "Full-time",
    department: "Research Data Management",
  },
]

export default function TalentPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white">
        <div className="container-sdso">
          <div className="max-w-3xl fade-in-up">
            <h1 className="manufactur-heading mb-6">Talent & Careers</h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our team of data scientists, researchers, and strategists shaping the future of data-driven
              innovation
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="openai-card p-6 sdso-card-hover fade-in-up">
              <h3 className="text-xl font-bold mb-3">Cutting-Edge Research</h3>
              <p className="text-muted-foreground">
                Work on innovative projects at the forefront of data science and strategy, collaborating with leading
                researchers and institutions.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="openai-card p-6 sdso-card-hover fade-in-up stagger-1">
              <h3 className="text-xl font-bold mb-3">Professional Growth</h3>
              <p className="text-muted-foreground">
                Access continuous learning opportunities, mentorship programs, and career development pathways tailored
                to your goals.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="openai-card p-6 sdso-card-hover fade-in-up stagger-2">
              <h3 className="text-xl font-bold mb-3">Impactful Work</h3>
              <p className="text-muted-foreground">
                Contribute to projects that drive real-world impact across scientific research, policy development, and
                industry innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div
                key={job.id}
                className={`border border-white/20 rounded-lg p-6 hover-lift fade-in-up ${index > 0 ? `stagger-${Math.min(index, 5)}` : ""}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{job.type}</span>
                      </div>
                      <div className="px-2 py-1 bg-white/10 text-white rounded-full text-xs">{job.department}</div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Link
                      href={`/talent/${job.id}`}
                      className="manufactur-button bg-white text-black hover:bg-gray-200"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <div className="openai-card p-8">
            <div className="md:flex md:items-center">
              <div className="md:flex-1">
                <h2 className="text-3xl font-bold mb-6">Internship Program</h2>
                <p className="text-muted-foreground mb-6">
                  Our internship program offers students and early-career professionals the opportunity to gain hands-on
                  experience in data science, analytics, and strategy while contributing to meaningful projects.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-accent mt-0.5 mr-3 flex-shrink-0"></div>
                    <p>3-6 month placements available throughout the year</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-accent mt-0.5 mr-3 flex-shrink-0"></div>
                    <p>Mentorship from experienced professionals</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-accent mt-0.5 mr-3 flex-shrink-0"></div>
                    <p>Opportunity to work on real-world projects</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="#" className="button-sdso button-primary-sdso">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8 md:w-1/3 bg-secondary h-64 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team Culture</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary/20 rounded-lg h-80"></div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Collaborative Environment</h3>
              <p className="text-gray-300 mb-4">
                We foster a culture of collaboration, where diverse perspectives and expertise come together to solve
                complex challenges. Our team members work across disciplines and departments, sharing knowledge and
                building on each other's strengths.
              </p>
              <p className="text-gray-300">
                Regular team activities, knowledge sharing sessions, and cross-functional projects create opportunities
                for meaningful collaboration and innovation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-gray-300 mb-4">
                We're committed to the ongoing professional development of our team members. Through workshops,
                conferences, online courses, and mentorship programs, we provide numerous opportunities for growth and
                skill enhancement.
              </p>
              <p className="text-gray-300">
                Our learning culture encourages experimentation, embraces challenges, and values both successes and
                failures as opportunities for growth.
              </p>
            </div>
            <div className="bg-secondary/20 rounded-lg h-80"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12 text-center">Team Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="openai-card p-6 sdso-card-hover fade-in-up">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-secondary mb-4"></div>
                <h3 className="font-bold">Dr. Sarah Chen</h3>
                <p className="text-sm text-muted-foreground">Senior Data Scientist</p>
              </div>
              <p className="text-muted-foreground italic">
                "Working at SDSO has been incredibly rewarding. I've had the opportunity to apply my expertise to
                meaningful projects while continuously learning from talented colleagues across different disciplines."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="openai-card p-6 sdso-card-hover fade-in-up stagger-1">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-secondary mb-4"></div>
                <h3 className="font-bold">Dr. James Wong</h3>
                <p className="text-sm text-muted-foreground">Data Governance Lead</p>
              </div>
              <p className="text-muted-foreground italic">
                "The collaborative culture at SDSO is what sets it apart. We're encouraged to share ideas, challenge
                assumptions, and work together to develop innovative solutions to complex data challenges."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="openai-card p-6 sdso-card-hover fade-in-up stagger-2">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-secondary mb-4"></div>
                <h3 className="font-bold">Dr. Priya Sharma</h3>
                <p className="text-sm text-muted-foreground">AI Research Engineer</p>
              </div>
              <p className="text-muted-foreground italic">
                "SDSO provides the perfect balance of academic rigor and practical application. I've been able to pursue
                cutting-edge research while seeing my work make a tangible impact on real-world challenges."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our current openings and take the next step in your career with the Scientific Data Strategy Office.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#open-positions" className="manufactur-button bg-white text-black hover:bg-gray-200">
              View Open Positions
            </Link>
            <Link href="/contact" className="manufactur-button border border-white/30 hover:bg-white/10">
              Contact Recruitment Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
