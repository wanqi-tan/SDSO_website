import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white">
        <div className="container-sdso">
          <div className="max-w-3xl fade-in-up">
            <h1 className="manufactur-heading mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss your data strategy needs or explore collaboration opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="manufactur-button bg-black text-white hover:bg-black/90">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="fade-in-up stagger-1">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      1 Fusionopolis Way
                      <br />
                      #20-10 Connexis North Tower
                      <br />
                      Singapore 138632
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <Link href="mailto:info@astar-data.sg" className="sdso-link">
                        info@astar-data.sg
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      <Link href="tel:+6568266111" className="sdso-link">
                        +65 6826 6111
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-secondary rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up">
              <h3 className="text-xl font-bold mb-2">How can I collaborate with your team?</h3>
              <p className="text-gray-300">
                We offer various collaboration opportunities including research partnerships, consulting services, and
                joint projects. Contact us with details about your organization and interests to explore potential
                collaboration.
              </p>
            </div>

            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up stagger-1">
              <h3 className="text-xl font-bold mb-2">Do you offer training programs?</h3>
              <p className="text-gray-300">
                Yes, we provide customized training programs on data strategy, governance, and analytics for
                organizations and research teams. Reach out to discuss your specific training needs.
              </p>
            </div>

            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up stagger-2">
              <h3 className="text-xl font-bold mb-2">How can I stay updated on your events?</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter to receive regular updates on upcoming events, workshops, and seminars. You
                can also follow us on social media for the latest announcements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest updates, event announcements, and resources from the
              Scientific Data Strategy Office.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent flex-1"
              />
              <button type="submit" className="manufactur-button bg-black text-white hover:bg-black/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
