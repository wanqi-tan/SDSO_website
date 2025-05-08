import Link from "next/link"
import { ArrowRight, Download, ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white">
        <div className="container-sdso">
          <div className="max-w-3xl fade-in-up">
            <h1 className="manufactur-heading mb-6">Resources</h1>
            <p className="text-xl text-gray-300 mb-8">
              Access our collection of tools, guides, and frameworks to enhance your data strategy
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12">Reference Materials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="openai-card sdso-card-hover flex flex-col fade-in-up">
              <div className="h-48 bg-secondary rounded-lg"></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium mb-3">Data Governance Framework</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  A comprehensive guide to establishing robust data governance practices within your organization.
                </p>
                <Link href="#" className="flex items-center text-sm font-medium text-accent">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Link>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="openai-card sdso-card-hover flex flex-col fade-in-up stagger-1">
              <div className="h-48 bg-secondary rounded-lg"></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium mb-3">Analytics Toolkit</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Collection of tools and templates for implementing advanced analytics in research environments.
                </p>
                <Link href="#" className="flex items-center text-sm font-medium text-accent">
                  <ArrowRight className="mr-2 h-4 w-4" /> Access Toolkit
                </Link>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="openai-card sdso-card-hover flex flex-col fade-in-up stagger-2">
              <div className="h-48 bg-secondary rounded-lg"></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium mb-3">Data Ethics Guidelines</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Ethical considerations and best practices for responsible data usage in scientific research.
                </p>
                <Link href="#" className="flex items-center text-sm font-medium text-accent">
                  <ArrowRight className="mr-2 h-4 w-4" /> Read Guidelines
                </Link>
              </div>
            </div>

            {/* Resource 4 */}
            <div className="openai-card sdso-card-hover flex flex-col fade-in-up stagger-3">
              <div className="h-48 bg-secondary rounded-lg"></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium mb-3">Research Data Management Plan</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Template and guidance for creating comprehensive data management plans for research projects.
                </p>
                <Link href="#" className="flex items-center text-sm font-medium text-accent">
                  <Download className="mr-2 h-4 w-4" /> Download Template
                </Link>
              </div>
            </div>

            {/* Resource 5 */}
            <div className="openai-card sdso-card-hover flex flex-col fade-in-up stagger-4">
              <div className="h-48 bg-secondary rounded-lg"></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium mb-3">Data Visualization Guide</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Best practices and techniques for effective data visualization in scientific contexts.
                </p>
                <Link href="#" className="flex items-center text-sm font-medium text-accent">
                  <ArrowRight className="mr-2 h-4 w-4" /> View Guide
                </Link>
              </div>
            </div>

            {/* Resource 6 */}
            <div className="openai-card sdso-card-hover flex flex-col fade-in-up stagger-5">
              <div className="h-48 bg-secondary rounded-lg"></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium mb-3">AI Implementation Framework</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Structured approach to integrating AI capabilities into existing data systems and workflows.
                </p>
                <Link href="#" className="flex items-center text-sm font-medium text-accent">
                  <ArrowRight className="mr-2 h-4 w-4" /> Explore Framework
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datasets Section */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12">Central Datasets</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dataset Category 1 */}
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up">
              <h3 className="text-xl font-medium mb-3">Biomedical Research Datasets</h3>
              <p className="text-gray-300 mb-4">
                Collection of standardized datasets from biomedical research projects, including genomics, proteomics,
                and clinical data.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Genomic Sequence Database (2023)
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Protein Structure Repository
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Clinical Trial Results Database
                </li>
              </ul>
              <Link href="#" className="flex items-center text-sm font-medium text-white/80 hover:text-white">
                Browse Datasets <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Dataset Category 2 */}
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up stagger-1">
              <h3 className="text-xl font-medium mb-3">Materials Science Datasets</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive datasets related to materials properties, structures, and performance characteristics.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Materials Properties Database
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Crystallographic Structure Repository
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Nanomaterials Characterization Dataset
                </li>
              </ul>
              <Link href="#" className="flex items-center text-sm font-medium text-white/80 hover:text-white">
                Browse Datasets <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Dataset Category 3 */}
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up stagger-2">
              <h3 className="text-xl font-medium mb-3">AI & Machine Learning Datasets</h3>
              <p className="text-gray-300 mb-4">
                Curated datasets for training and testing AI and machine learning models across various domains.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Benchmark Image Classification Dataset
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Scientific Text Corpus
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Time Series Analysis Dataset
                </li>
              </ul>
              <Link href="#" className="flex items-center text-sm font-medium text-white/80 hover:text-white">
                Browse Datasets <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Dataset Category 4 */}
            <div className="border border-white/20 rounded-lg p-6 hover-lift fade-in-up stagger-3">
              <h3 className="text-xl font-medium mb-3">Environmental Research Datasets</h3>
              <p className="text-gray-300 mb-4">
                Datasets related to environmental monitoring, climate research, and sustainability studies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Climate Monitoring Dataset
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Biodiversity Survey Data
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white mr-2"></span>
                  Environmental Impact Assessment Data
                </li>
              </ul>
              <Link href="#" className="flex items-center text-sm font-medium text-white/80 hover:text-white">
                Browse Datasets <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="#" className="manufactur-button border border-white/30 hover:bg-white/10">
              View All Datasets
            </Link>
          </div>
        </div>
      </section>

      {/* Data Classification Section */}
      <section className="section-sdso bg-background">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12">Data Classification</h2>

          <div className="openai-card p-8 mb-12">
            <p className="text-muted-foreground mb-6">
              The Scientific Data Strategy Office has established a standardized data classification framework to ensure
              appropriate handling, storage, and access controls for different types of research data. This framework
              helps researchers and administrators understand the sensitivity and value of data assets.
            </p>

            <h3 className="text-xl font-medium mb-4">Classification Levels</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Level 1 */}
              <div className="border border-border/40 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                  <h4 className="font-medium">Public</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Data that can be freely shared with the public without restrictions.
                </p>
              </div>

              {/* Level 2 */}
              <div className="border border-border/40 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                  <h4 className="font-medium">Internal</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Data that can be shared within A*STAR but not with external parties.
                </p>
              </div>

              {/* Level 3 */}
              <div className="border border-border/40 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
                  <h4 className="font-medium">Confidential</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sensitive data with restricted access within specific research groups.
                </p>
              </div>

              {/* Level 4 */}
              <div className="border border-border/40 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
                  <h4 className="font-medium">Restricted</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Highly sensitive data with strict access controls and security measures.
                </p>
              </div>
            </div>

            <Link href="#" className="flex items-center text-sm font-medium text-accent">
              <Download className="mr-2 h-4 w-4" /> Download Complete Classification Guide
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="openai-card p-6">
              <h3 className="text-xl font-medium mb-4">Data Classification Tool</h3>
              <p className="text-muted-foreground mb-6">
                Our interactive tool helps researchers determine the appropriate classification level for their data
                based on content, sensitivity, and regulatory requirements.
              </p>
              <Link href="#" className="button-sdso button-primary-sdso">
                Access Classification Tool
              </Link>
            </div>

            <div className="openai-card p-6">
              <h3 className="text-xl font-medium mb-4">Data Handling Guidelines</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive guidelines for handling, storing, and sharing data based on classification levels,
                ensuring compliance with institutional policies and regulations.
              </p>
              <Link href="#" className="button-sdso button-primary-sdso">
                View Guidelines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources Section */}
      <section className="section-sdso bg-secondary/20">
        <div className="container-sdso">
          <h2 className="text-3xl font-bold mb-12">External Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* External Resource 1 */}
            <Link href="#" target="_blank" rel="noopener noreferrer" className="openai-card sdso-card-hover p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium">FAIR Data Principles</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">
                Guidelines for making data Findable, Accessible, Interoperable, and Reusable.
              </p>
              <p className="text-sm text-muted-foreground">GO FAIR Initiative</p>
            </Link>

            {/* External Resource 2 */}
            <Link href="#" target="_blank" rel="noopener noreferrer" className="openai-card sdso-card-hover p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium">Research Data Alliance</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">
                International organization focused on data sharing and interoperability in scientific research.
              </p>
              <p className="text-sm text-muted-foreground">RDA</p>
            </Link>

            {/* External Resource 3 */}
            <Link href="#" target="_blank" rel="noopener noreferrer" className="openai-card sdso-card-hover p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium">Data Management Planning Tool</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">
                Online tool for creating comprehensive data management plans for research projects.
              </p>
              <p className="text-sm text-muted-foreground">DMPTool</p>
            </Link>

            {/* External Resource 4 */}
            <Link href="#" target="_blank" rel="noopener noreferrer" className="openai-card sdso-card-hover p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium">Open Science Framework</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">
                Free, open platform to support research and enable collaboration.
              </p>
              <p className="text-sm text-muted-foreground">Center for Open Science</p>
            </Link>

            {/* External Resource 5 */}
            <Link href="#" target="_blank" rel="noopener noreferrer" className="openai-card sdso-card-hover p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium">Data Citation Principles</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">
                Guidelines for citing data in scientific publications and research outputs.
              </p>
              <p className="text-sm text-muted-foreground">FORCE11</p>
            </Link>

            {/* External Resource 6 */}
            <Link href="#" target="_blank" rel="noopener noreferrer" className="openai-card sdso-card-hover p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium">Data Carpentry</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">
                Training resources for researchers in data management and analysis skills.
              </p>
              <p className="text-sm text-muted-foreground">The Carpentries</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sdso bg-black text-white">
        <div className="container-sdso text-center">
          <h2 className="text-3xl font-bold mb-6">Need customized resources?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team can develop tailored solutions to address your specific data challenges.
          </p>
          <Link href="/contact" className="manufactur-button bg-white text-black hover:bg-gray-200">
            Request Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
