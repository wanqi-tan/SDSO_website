import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollIndicator from "@/components/scroll-indicator";
import RevealText from "@/components/reveal-text";
import ParallaxSection from "@/components/parallax-section";
import AnimatedDarkSection from "@/components/animated-dark-section";
import AnimatedSectionTransition from "@/components/animated-section-transition";
import HorizontalGallery from "@/components/horizontal-gallery";

export default function Home() {
  return (
    <>
      <ScrollIndicator />

      {/* Hero section inspired by manufactur.co and hyve.systems */}
      <AnimatedDarkSection py="py-0" className="min-h-screen flex items-center">
        <div className="container-sdso relative z-10 py-32">
          <RevealText className="max-w-4xl mb-8">
            <h1 className="manufactur-heading text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
          </RevealText>
          <RevealText className="max-w-2xl mb-12" delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-200">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation
            </p>
          </RevealText>
          <RevealText delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="manufactur-button bg-white text-black hover:bg-gray-200"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="manufactur-button border border-white/30 hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </RevealText>
        </div>
      </AnimatedDarkSection>

      {/* Image banner section with horizontal gallery */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
          <HorizontalGallery images={[]} />
        </div>
      </section>

      {/* Spacer with decorative element */}
      <section className="py-24 bg-background">
        <div className="container-sdso">
          <div className="max-w-3xl mx-auto text-center">
            <RevealText>
              <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
              <p className="text-xl text-muted-foreground italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="mt-4 font-medium">— Dr. Jane Smith, Director</p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-45 bg-background">
        <div className="container-sdso">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
            <RevealText>
              <div className="flex flex-col">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-2">
                  The Scientific Data Strategy Office (SDSO) is dedicated to
                  ipsum dolor sit amet consectetur adipiscing elit. Quisque
                  faucibus ex sapien vitae pellentesque sem placerat. In id
                  cursus mi pretium tellus duis convallis. Tempus leo eu aenean
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is Tempus leo eu aenean sed diam urna tempor.
                  Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                  Iaculis massa nisl malesuada lacinia integer nunc posuere.
                </p>
              </div>
            </RevealText>
            <AnimatedSectionTransition>
              <div className="flex items-start h-full">
                <div className="h-[300px] w-full max-w-md mx-auto bg-secondary rounded-lg"></div>
              </div>
            </AnimatedSectionTransition>
          </div>

          <div className="mt-24 min-h-[500px]">
            <RevealText className="text-center mb-2">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Values</h2>
            </RevealText>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <RevealText delay={0.1}>
                <AnimatedSectionTransition>
                  <div className="openai-card sdso-card-hover p-8 h-full bg-gray-800 text-white">
                    <div className="h-40 bg-gray-700 rounded-lg mb-6"></div>
                    <h3 className="text-xl font-medium mb-3">Innovation</h3>
                    <p className="text-gray-300">
                      We continuously posuere. Ut hendrerit semper vel class
                      aptent taciti sociosqu.litora torquent per conubia a
                      inceptos himenaeos.
                    </p>
                  </div>
                </AnimatedSectionTransition>
              </RevealText>

              <RevealText delay={0.2}>
                <AnimatedSectionTransition>
                  <div className="openai-card sdso-card-hover p-8 h-full bg-gray-800 text-white">
                    <div className="h-40 bg-gray-700 rounded-lg mb-6"></div>
                    <h3 className="text-xl font-medium mb-3">Collaboration</h3>
                    <p className="text-gray-300">
                      Pulvinar vivamus fringilla lacus nec metus bibendum
                      egestas. Iaculis massa nisl malesuada lacinia integer
                      nunc.
                    </p>
                  </div>
                </AnimatedSectionTransition>
              </RevealText>

              <RevealText delay={0.3}>
                <AnimatedSectionTransition>
                  <div className="openai-card sdso-card-hover p-8 h-full bg-gray-800 text-white">
                    <div className="h-40 bg-gray-700 rounded-lg mb-6"></div>
                    <h3 className="text-xl font-medium mb-3">Integrity</h3>
                    <p className="text-gray-300">
                      We ipsum dolor sit amet consectetur adipiscing elit.
                      Quisque faucibus ex sapien vitae pellentesque sem.
                    </p>
                  </div>
                </AnimatedSectionTransition>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image section */}
      <AnimatedDarkSection>
        <AnimatedSectionTransition>
          <div className="h-96 bg-secondary/30 w-full"></div>
        </AnimatedSectionTransition>
      </AnimatedDarkSection>

      {/* Director's Message Section */}
      <section className="py-32 bg-background">
        <div className="container-sdso">
          <RevealText className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Director's Message
            </h2>
          </RevealText>
          <RevealText>
            <AnimatedSectionTransition>
              <div className="openai-card max-w-4xl mx-auto p-8 -mt-3">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-secondary h-64 w-64 rounded-lg mx-auto"></div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-muted-foreground mb-6">
                      "At the Scientific Data Strategy Office, we consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco lab."
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                      "Through consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco
                      lab.enim ad minim veniam, quis nostrud."
                    </p>
                    <p className="font-medium mt-6">Dr. Jane Smith</p>
                    <p className="text-sm text-muted-foreground">
                      Director, Scientific Data Strategy Office
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSectionTransition>
          </RevealText>
        </div>
      </section>

      {/* Team Members Section */}
      <AnimatedDarkSection py="py-32">
        <div className="container-sdso">
          <RevealText className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Our Team
            </h2>
          </RevealText>

          <RevealText className="mb-6">
            <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Leadership
            </h3>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 -mt-2">
            {/* Team member 1 */}
            <RevealText delay={0.1}>
              <AnimatedSectionTransition darkMode>
                <div className="border border-white/20 rounded-lg p-8 hover-lift backdrop-blur-sm bg-black/20">
                  <div className="bg-white/10 h-48 rounded-lg mb-6"></div>
                  <h4 className="text-xl font-medium mb-2">Dr. Jane Smith</h4>
                  <p className="text-sm text-gray-300 mb-2">Director</p>
                  <p className="text-gray-300">
                    Leading enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </AnimatedSectionTransition>
            </RevealText>

            {/* Team member 2 */}
            <RevealText delay={0.2}>
              <AnimatedSectionTransition darkMode>
                <div className="border border-white/20 rounded-lg p-8 hover-lift backdrop-blur-sm bg-black/20">
                  <div className="bg-white/10 h-48 rounded-lg mb-6"></div>
                  <h4 className="text-xl font-medium mb-2">Dr. Michael Chen</h4>
                  <p className="text-sm text-gray-300 mb-2">Deputy Director</p>
                  <p className="text-gray-300">
                    Overseeing Duis aute irure dolor in reprehenderit in
                    voluptate.
                  </p>
                </div>
              </AnimatedSectionTransition>
            </RevealText>

            {/* Team member 3 */}
            <RevealText delay={0.3}>
              <AnimatedSectionTransition darkMode>
                <div className="border border-white/20 rounded-lg p-8 hover-lift backdrop-blur-sm bg-black/20">
                  <div className="bg-white/10 h-48 rounded-lg mb-6"></div>
                  <h4 className="text-xl font-medium mb-2">
                    Dr. Sarah Johnson
                  </h4>
                  <p className="text-sm text-gray-300 mb-2">
                    Head of Analytics
                  </p>
                  <p className="text-gray-300">
                    Leading jiost in voluptate velit esse cillum dolore
                  </p>
                </div>
              </AnimatedSectionTransition>
            </RevealText>
          </div>

          <RevealText className="mb-8">
            <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Team Members
            </h3>
          </RevealText>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {/* Team members grid with staggered animations */}
            {[
              { name: "Dr. Alex Wong", title: "Data Scientist", delay: 0.1 },
              { name: "Dr. Lisa Chen", title: "AI Specialist", delay: 0.2 },
              { name: "Dr. Raj Patel", title: "Data Engineer", delay: 0.3 },
              { name: "Dr. Emma Lee", title: "Research Analyst", delay: 0.4 },
            ].map((member, index) => (
              <RevealText key={index} delay={member.delay}>
                <div className="border border-white/20 rounded-lg p-6 hover-lift backdrop-blur-sm bg-black/20">
                  <div className="bg-white/10 h-32 rounded-lg mb-4"></div>
                  <h4 className="text-lg font-medium mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-300">{member.title}</p>
                </div>
              </RevealText>
            ))}
          </div>

          <RevealText className="mb-8">
            <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Interns & Alumni
            </h3>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealText delay={0.1}>
              <div className="border border-white/20 rounded-lg p-8 hover-lift backdrop-blur-sm bg-black/20">
                <h4 className="text-xl font-medium mb-4">Current Interns</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 h-24 rounded-lg"></div>
                  <div className="bg-white/10 h-24 rounded-lg"></div>
                </div>
                <p className="text-gray-300 mb-4">
                  Our internship Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore. eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident,
                </p>
                <Link
                  href="#"
                  className="flex items-center text-sm font-medium text-white/80 hover:text-white"
                >
                  Learn more about our internship program{" "}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <div className="border border-white/20 rounded-lg p-8 hover-lift backdrop-blur-sm bg-black/20">
                <h4 className="text-xl font-medium mb-4">Alumni Network</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 h-24 rounded-lg"></div>
                  <div className="bg-white/10 h-24 rounded-lg"></div>
                </div>
                <p className="text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisque faucibus ex sapien vitae pellentesque sem placerat. In
                  id cursus mi pretium tellus duis convallis Tempus leo eu.
                </p>
                <Link
                  href="#"
                  className="flex items-center text-sm font-medium text-white/80 hover:text-white"
                >
                  View our alumni network{" "}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </RevealText>
          </div>
        </div>
      </AnimatedDarkSection>

      {/* Data Stewards and Champions Section */}
      <section className="py-32 bg-background">
        <div className="container-sdso">
          <RevealText className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Data Stewards & Champions
            </h2>
          </RevealText>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <ParallaxSection speed={0.15}>
              <div className="h-96 bg-secondary rounded-lg"></div>
            </ParallaxSection>
            <RevealText>
              <h3 className="text-2xl font-bold mb-6">
                What are Data Stewards?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Data Stewards are Lorem ipsum dolor sit amet consectetur
                adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                sem placerat. In id cursus mi pretium tellus duis convallis.
              </p>
              <p className="text-lg text-muted-foreground">
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
                malesuada lacinia integer nunc posuere. Ut hendrerit.
              </p>
            </RevealText>
          </div>

          <RevealText className="text-center mb-8">
            <h3 className="text-2xl font-bold">Our Data Stewards Network</h3>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
            {/* Data stewards with staggered animations */}
            {[
              {
                name: "Dr. Lisa Wong",
                institute: "XXX Research Institute",
                delay: 0.1,
              },
              {
                name: "Dr. David Tan",
                institute: "XXX Research Institute",
                delay: 0.2,
              },
              {
                name: "Dr. Priya Sharma",
                institute: "XXX Research Institute",
                delay: 0.3,
              },
              {
                name: "Dr. James Lee",
                institute: "XXX Research Institute",
                delay: 0.4,
              },
            ].map((steward, index) => (
              <RevealText key={index} delay={steward.delay}>
                <div className="openai-card sdso-card-hover p-6 h-full">
                  <div className="bg-secondary h-32 rounded-lg mb-4"></div>
                  <h4 className="text-lg font-medium mb-1">{steward.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {steward.institute}
                  </p>
                </div>
              </RevealText>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealText>
              <h3 className="text-2xl font-bold mb-6">
                Data Champions Program
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu aenean sed.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
                hendrerit semper vel class aptent taciti sociosqu.
              </p>
              <Link
                href="#"
                className="button-sdso button-primary-sdso px-6 py-3"
              >
                Join the Data Champions Program
              </Link>
            </RevealText>
            <ParallaxSection speed={0.15}>
              <div className="h-96 bg-secondary rounded-lg"></div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* CTA Section with OpenAI influence */}
      <AnimatedDarkSection py="py-32">
        <div className="container-sdso text-center">
          <RevealText>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              We're always looking for talented individuals passionate about
              data strategy and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/talent"
                className="manufactur-button bg-white text-black hover:bg-gray-200 px-8 py-4"
              >
                View Open Positions
              </Link>
              <Link
                href="/contact"
                className="manufactur-button border border-white/30 hover:bg-white/10 px-8 py-4"
              >
                Contact Us
              </Link>
            </div>
          </RevealText>
        </div>
      </AnimatedDarkSection>
    </>
  );
}
