import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white">
        <div className="container-sdso">
          <div className="max-w-3xl fade-in-up">
            <h1 className="manufactur-heading mb-6">About SDSO</h1>
            <p className="text-xl text-gray-300 mb-8">
              Driving innovation through strategic data management and analytics
            </p>
          </div>
        </div>
      </section>

      {/* Introduction section */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                The Scientific Data Strategy Office (SDSO) is dedicated to transforming how A*STAR manages, analyzes,
                and leverages its scientific data assets. We aim to establish a robust data ecosystem that facilitates
                innovation, collaboration, and evidence-based decision making across all research entities.
              </p>
              <p className="text-muted-foreground mb-6">
                Our mission is to develop and implement comprehensive data strategies that align with organizational
                goals and industry best practices, ensuring that A*STAR remains at the forefront of scientific discovery
                and technological innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/resources" className="button-sdso button-primary-sdso px-6 py-3">
                  Explore Resources
                </Link>
                <Link href="/contact" className="button-sdso button-outline-sdso px-6 py-3">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="bg-secondary h-80 rounded-lg fade-in-up stagger-1">{/* Placeholder for image */}</div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up">
              <h3 className="text-xl font-medium mb-3">Innovation</h3>
              <p className="text-gray-300">
                We continuously explore new approaches and technologies to enhance data management and analysis
                capabilities.
              </p>
            </div>
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up stagger-1">
              <h3 className="text-xl font-medium mb-3">Collaboration</h3>
              <p className="text-gray-300">
                We foster partnerships across disciplines and organizations to maximize the value of shared data
                resources.
              </p>
            </div>
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up stagger-2">
              <h3 className="text-xl font-medium mb-3">Integrity</h3>
              <p className="text-gray-300">
                We uphold the highest standards of data ethics, privacy, and security in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's message */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <div className="openai-card max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-secondary h-64 w-64 rounded-lg mx-auto">{/* Director's photo placeholder */}</div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">Director's Message</h2>
                <p className="text-muted-foreground mb-4">
                  "At the Scientific Data Strategy Office, we believe that data is one of A*STAR's most valuable assets.
                  Our goal is to build a data-driven culture that empowers researchers and administrators to make
                  informed decisions and accelerate scientific discovery."
                </p>
                <p className="text-muted-foreground mb-4">
                  "Through strategic initiatives in data governance, analytics, and AI integration, we are creating an
                  ecosystem where data can flow seamlessly across the organization, breaking down silos and fostering
                  collaboration."
                </p>
                <p className="font-medium mt-6">Dr. Jane Smith</p>
                <p className="text-sm text-muted-foreground">Director, Scientific Data Strategy Office</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="section-sdso bg-secondary/20">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>

          <h3 className="text-2xl font-bold mb-6">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Team member 1 */}
            <div className="openai-card sdso-card-hover fade-in-up">
              <div className="bg-secondary h-32 rounded-lg mb-4"></div>
              <h4 className="text-lg font-medium">Dr. Jack Smith</h4>
              <p className="text-sm text-muted-foreground mb-2">Director</p>
              <p className="text-sm text-muted-foreground">
                Leading the strategic direction and operations of the Scientific Data Strategy Office.
              </p>
            </div>

            {/* Team member 2 */}
            <div className="openai-card sdso-card-hover fade-in-up stagger-1">
              <div className="bg-secondary h-32 rounded-lg mb-4"></div>
              <h4 className="text-lg font-medium">Dr. Michael Chen</h4>
              <p className="text-sm text-muted-foreground mb-2">Deputy Director</p>
              <p className="text-sm text-muted-foreground">
                Overseeing data governance initiatives and strategic partnerships.
              </p>
            </div>

            {/* Team member 3 */}
            <div className="openai-card sdso-card-hover fade-in-up stagger-2">
              <div className="bg-secondary h-32 rounded-lg mb-4"></div>
              <h4 className="text-lg font-medium">Dr. Sarah Johnson</h4>
              <p className="text-sm text-muted-foreground mb-2">Head of Analytics</p>
              <p className="text-sm text-muted-foreground">
                Leading the development and implementation of advanced analytics solutions.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Data Stewards & Champions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {/* Data steward 1 */}
            <div className="openai-card sdso-card-hover fade-in-up">
              <div className="bg-secondary h-32 rounded-lg mb-4"></div>
              <h4 className="text-lg font-medium">Dr. Lisa Wong</h4>
              <p className="text-sm text-muted-foreground">Biomedical Research Institute</p>
            </div>

            {/* Data steward 2 */}
            <div className="openai-card sdso-card-hover fade-in-up stagger-1">
              <div className="bg-secondary h-32 rounded-lg mb-4"></div>
              <h4 className="text-lg font-medium">Dr. David Tan</h4>
              <p className="text-sm text-muted-foreground">Institute of Materials Research</p>
            </div>

            {/* Data steward 3 */}
            <div className="openai-card sdso-card-hover fade-in-up stagger-2">
              <div className="bg-secondary h-32 rounded-lg mb-4"></div>
              <h4 className="text-lg font-medium">Dr. Priya Sharma</h4>
              <p className="text-sm text-muted-foreground">Data Science & AI Division</p>
            </div>

            {/* Data steward 4 */}
            <div className="openai-card sdso-card-hover fade-in-up stagger-3">
              <div className="bg-secondary h-32 rounded-lg mb-4"></div>
              <h4 className="text-lg font-medium">Dr. James Lee</h4>
              <p className="text-sm text-muted-foreground">Institute of High Performance Computing</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Alumni</h3>
          <div className="openai-card p-6">
            <p className="text-muted-foreground mb-4">
              We are proud of our alumni who have contributed to the growth and success of the Scientific Data Strategy
              Office. Many have gone on to lead data initiatives in various research institutions and industry
              organizations.
            </p>
            <Link href="#" className="sdso-link flex items-center">
              View Alumni Network <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals passionate about data strategy and innovation.
          </p>
          <Link href="/talent" className="manufactur-button bg-white text-black hover:bg-gray-200">
            View Open Positions
          </Link>
        </div>
      </section>
    </>
  )
}
