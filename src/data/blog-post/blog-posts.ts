/*
 * blog-posts.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { imgBlogDetailsHeader } from "@images"
import { ImageSource } from "@types"

export interface BlogPostDetails {
  title: string
  subtitle?: string
  description?: string
  list?: string[]
  image?: ImageSource
}

export interface BlogPostMetadata {
  title: string
  description: string
}

export interface BlogPost {
  slug: string
  title: string
  metadata: BlogPostMetadata[]
  banner?: {
    title: string
    description?: string
    imageUrl?: ImageSource
    heroImageUrl?: ImageSource
    backgroundImageUrl?: ImageSource
  }
  content: BlogPostDetails[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "recruitment-best-practices",
    title: "Recruitment Best Practices",
    metadata: [
      {
        title: "Author",
        description: "Asraful Islam Hanif",
      },
      {
        title: "Date",
        description: "January 15, 2025",
      },
      {
        title: "Category",
        description: "Recruitment",
      },
    ],
    banner: {
      title: "Recruitment Best Practices",
      description: "Insights, Stories, and Updates from AMCO",
    },
    content: [
      {
        title: "Introduction",
        description:
          "In today's fast-paced business world, industries like construction, oil and gas, hospitality, logistics, shipping, and FMCG face the same challenge — finding the right people at the right time. Without skilled manpower, projects stall, deadlines slip, and growth slows. Recruitment is no longer just about filling vacancies — it's about building the foundation of success.",
      },
      {
        title: "The Power of People",
        description:
          "At AMCO, we believe people are the driving force behind every successful business. A trained and committed workforce doesn't just complete tasks — it delivers results. From construction sites to hotels and logistics networks, skilled manpower directly impacts efficiency, quality, and client satisfaction.",
      },
      {
        image: imgBlogDetailsHeader,
        title: "Our End-to-End Process",
        subtitle: "We manage the recruitment journey from start to finish:",
        list: [
          "Requirement Analysis – Understanding your exact needs.",
          "Sourcing & Shortlisting – Selecting candidates who fit.",
          "Interviews & Medical Checks – Ensuring skill and health standards.",
          "Visa & Processing – Handling all documentation.",
          "Training & Orientation – Preparing workers for overseas success.",
          "Deployment & After-Sale Service – Delivering manpower with ongoing support.",
        ],
      },
      {
        title: "Beyond Deployment",
        description:
          "What makes AMCO different is our long-term commitment. We offer two years of after-deployment support and a six-month mutual guarantee, ensuring clients and candidates continue to benefit from a reliable partnership.",
      },
      {
        title: "Conclusion",
        description:
          "As industries expand and competition grows, businesses need trusted recruitment partners. AMCO bridges the gap between opportunity and talent — providing manpower solutions with professionalism, transparency, and dedication. Our mission is simple: to help clients achieve success through people.",
      },
    ],
  },
  {
    slug: "industry-insights",
    title: "Industry Insights",
    metadata: [
      {
        title: "Author",
        description: "Asraful Islam Hanif",
      },
      {
        title: "Date",
        description: "January 10, 2025",
      },
      {
        title: "Category",
        description: "Industry",
      },
    ],
    banner: {
      title: "Industry Insights",
      description: "Insights, Stories, and Updates from AMCO",
    },
    content: [
      {
        title: "Introduction",
        description:
          "In today's fast-paced business world, industries like construction, oil and gas, hospitality, logistics, shipping, and FMCG face the same challenge — finding the right people at the right time.",
      },
      {
        title: "Industry Trends",
        description:
          "Understanding industry trends is crucial for successful recruitment and business growth.",
      },
    ],
  },
  {
    slug: "success-stories",
    title: "Success Stories",
    metadata: [
      {
        title: "Author",
        description: "Asraful Islam Hanif",
      },
      {
        title: "Date",
        description: "January 5, 2025",
      },
      {
        title: "Category",
        description: "Success",
      },
    ],
    banner: {
      title: "Success Stories",
      description: "Insights, Stories, and Updates from AMCO",
    },
    content: [
      {
        title: "Introduction",
        description:
          "Success stories from our clients and candidates showcase the impact of quality recruitment.",
      },
      {
        title: "Client Testimonials",
        description:
          "Our clients share their experiences working with AMCO and the results they've achieved.",
      },
    ],
  },
]

