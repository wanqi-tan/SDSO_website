import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"

// Sample events data
const upcomingEvents = [
  {
    id: 1,
    title: "Data Strategy Summit 2023",
    description:
      "Join industry leaders and researchers for a two-day summit exploring the latest trends and best practices in data strategy and governance.",
    date: "June 15-16, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "A*STAR Auditorium, Fusionopolis",
    type: "Conference",
  },
  {
    id: 2,
    title: "Workshop: Data Visualization Techniques",
    description:
      "Learn advanced techniques for visualizing complex scientific data to enhance understanding and communication.",
    date: "July 8, 2023",
    time: "10:00 AM - 12:00 PM",
    location: "Training Room 3, Connexis North Tower",
    type: "Workshop",
  },
  {
    id: 3,
    title: "Webinar: AI in Research Data Management",
    description:
      "Discover how artificial intelligence is transforming research data management practices and workflows.",
    date: "July 22, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    type: "Webinar",
  },
  {
    id: 4,
    title: "Conference: Future of Data Science",
    description:
      "A full-day conference exploring emerging trends and technologies in data science and their implications for research.",
    date: "August 15, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "A*STAR Auditorium, Fusionopolis",
    type: "Conference",
  },
]

const pastEvents = [
  {
    id: 5,
    title: "Workshop: Data Governance Fundamentals",
    description: "Introduction to key principles and practices of effective data governance.",
    date: "May 10, 2023",
    type: "Workshop",
  },
  {
    id: 6,
    title: "Seminar: Ethical Data Usage",
    description: "Discussion on ethical considerations in data collection, analysis, and sharing.",
    date: "April 22, 2023",
    type: "Seminar",
  },
  {
    id: 7,
    title: "Panel: Data Strategy in Research",
    description: "Expert panel discussing effective data strategies for research institutions.",
    date: "March 15, 2023",
    type: "Panel",
  },
  {
    id: 8,
    title: "Workshop: FAIR Data Principles",
    description:
      "Practical implementation of FAIR (Findable, Accessible, Interoperable, Reusable) data principles in research.",
    date: "February 28, 2023",
    type: "Workshop",
  },
  {
    id: 9,
    title: "Conference: Data Innovation Day",
    description: "Showcasing innovative approaches to data management and analysis across A*STAR.",
    date: "January 20, 2023",
    type: "Conference",
  },
  {
    id: 10,
    title: "Hackathon: Data Visualization Challenge",
    description: "Collaborative event to develop creative visualizations for complex scientific datasets.",
    date: "December 10, 2022",
    type: "Hackathon",
  },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white">
        <div className="container-sdso">
          <div className="max-w-3xl fade-in-up">
            <h1 className="manufactur-heading mb-6">Events</h1>
            <p className="text-xl text-gray-300 mb-8">
              Join us for workshops, seminars, and conferences focused on data strategy and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 bg-background">
        <div className="container-sdso">
          <div className="openai-card overflow-hidden fade-in-up">
            <div className="md:flex">
              <div className="md:w-1/3 bg-secondary h-64 md:h-auto"></div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                  Featured Event
                </div>
                <h2 className="text-3xl font-bold mb-4">Data Strategy Summit 2023</h2>
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>June 15-16, 2023</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>A*STAR Auditorium, Fusionopolis</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Join industry leaders and researchers for a two-day summit exploring the latest trends and best
                  practices in data strategy and governance. The summit will feature keynote presentations, panel
                  discussions, and interactive workshops on topics including data governance, analytics, AI integration,
                  and research data management.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#" className="button-sdso button-primary-sdso">
                    Register Now
                  </Link>
                  <Link href="#" className="button-sdso button-outline-sdso">
                    View Agenda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>

          <div className="space-y-8">
            {upcomingEvents.slice(1).map((event, index) => (
              <div key={event.id} className={`openai-card p-6 fade-in-up ${index > 0 ? `stagger-${index}` : ""}`}>
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="mb-4 md:mb-0 md:mr-6 md:w-48 flex-shrink-0">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-2">
                      {event.type}
                    </div>
                    <div className="text-lg font-medium">{event.date}</div>
                    <div className="text-sm text-muted-foreground">{event.time}</div>
                    <div className="text-sm text-muted-foreground">{event.location}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Link href="#" className="flex items-center text-sm font-medium text-accent">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#" className="button-sdso button-outline-sdso px-6 py-3">
              View All Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12">Past Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.slice(0, 6).map((event, index) => (
              <div
                key={event.id}
                className={`border border-white/20 rounded-lg p-6 hover-lift fade-in-up ${index > 0 ? `stagger-${Math.min(index, 5)}` : ""}`}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-2">
                  {event.type}
                </div>
                <div className="text-sm text-gray-400 mb-2">{event.date}</div>
                <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex gap-4">
                  <Link href="#" className="flex items-center text-sm font-medium text-white/80 hover:text-white">
                    View Recording <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link href="#" className="flex items-center text-sm font-medium text-white/80 hover:text-white">
                    View Materials <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#" className="manufactur-button border border-white/30 hover:bg-white/10">
              View All Past Events
            </Link>
          </div>
        </div>
      </section>

      {/* Event Photos */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12 text-center">Event Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Photo placeholders */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={`bg-secondary aspect-square rounded-lg hover:opacity-80 transition-opacity cursor-pointer fade-in-up ${index > 0 ? `stagger-${Math.min(index, 5)}` : ""}`}
              ></div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#" className="button-sdso button-outline-sdso px-6 py-3">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso text-center">
          <h2 className="text-3xl font-bold mb-6">Host an Event with Us</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on a workshop, seminar, or conference related to data strategy?
          </p>
          <Link href="/contact" className="manufactur-button bg-white text-black hover:bg-gray-200">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
