/*
 * new-blog.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { imgTest } from "@images"
import { ImageSource } from "@types"

interface BlogSection {
  title: string
  image?: ImageSource
  link: string
}

export const blogSectionData: BlogSection[] = [
  {
    image: imgTest,
    title: "Recruitment Best Practices",
    link: "/blog/recruitment-best-practices",
  },
  {
    image: imgTest,
    title: "Industry Insights",
    link: "/blog/industry-insights",
  },
  {
    image: imgTest,
    title: "Success Stories",
    link: "/blog/success-stories",
  },
  {
    image: imgTest,
    title: "Workforce Management Strategies",
    link: "/blog/workforce-management-strategies",
  },
  {
    image: imgTest,
    title: "Talent Acquisition Trends",
    link: "/blog/talent-acquisition-trends",
  },
  {
    image: imgTest,
    title: "Employee Retention Tips",
    link: "/blog/employee-retention-tips",
  },
  {
    image: imgTest,
    title: "HR Technology Solutions",
    link: "/blog/hr-technology-solutions",
  },
  {
    image: imgTest,
    title: "Global Workforce Trends",
    link: "/blog/global-workforce-trends",
  },
  {
    image: imgTest,
    title: "Skills Development Programs",
    link: "/blog/skills-development-programs",
  },
  {
    image: imgTest,
    title: "Remote Work Best Practices",
    link: "/blog/remote-work-best-practices",
  },
  {
    image: imgTest,
    title: "Diversity and Inclusion",
    link: "/blog/diversity-and-inclusion",
  },
  {
    image: imgTest,
    title: "Career Development Guide",
    link: "/blog/career-development-guide",
  },
  {
    image: imgTest,
    title: "Leadership Excellence",
    link: "/blog/leadership-excellence",
  },
]
