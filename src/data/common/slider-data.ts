/*
 * slider-data.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { imgPlaceholder1, imgPlaceholder2, imgPlaceholder3 } from "@images"
import { staticRoutes } from "@constants"
import type { InfoCardOption } from "@organisms"

export const sliderData: InfoCardOption[] = [
  {
    imageSection: {
      src: imgPlaceholder1,
      alt: "Modern Web Solutions",
    },
    textSection: {
      title: "Modern Web Solutions",
      subTitle: "Next.js & React",
      description:
        "Build lightning-fast web applications with the latest technologies and best practices.",
      titleProps: {
        tag: "h3",
        variant: "primary",
        weight: "bold",
      },
      subTitleProps: {
        tag: "p",
        variant: "secondary",
        weight: "semibold",
      },
      descriptionProps: {
        tag: "p",
        variant: "tertiary",
      },
    },
    link: {
      href: staticRoutes.SERVICES,
      type: "button",
      buttonText: "Learn More",
    },
  },
  {
    imageSection: {
      src: imgPlaceholder2,
      alt: "Mobile First Design",
    },
    textSection: {
      title: "Mobile First Design",
      subTitle: "Responsive & Adaptive",
      description:
        "Create stunning experiences that work perfectly on every device and screen size.",
      titleProps: {
        tag: "h3",
        variant: "primary",
        weight: "bold",
      },
      subTitleProps: {
        tag: "p",
        variant: "secondary",
        weight: "semibold",
      },
      descriptionProps: {
        tag: "p",
        variant: "tertiary",
      },
    },
    link: {
      href: staticRoutes.SERVICES,
      type: "button",
      buttonText: "Explore",
    },
  },
  {
    imageSection: {
      src: imgPlaceholder3,
      alt: "Performance Optimized",
    },
    textSection: {
      title: "Performance Optimized",
      subTitle: "Speed & Efficiency",
      description:
        "Deliver exceptional user experiences with optimized performance and fast load times.",
      titleProps: {
        tag: "h3",
        variant: "primary",
        weight: "bold",
      },
      subTitleProps: {
        tag: "p",
        variant: "secondary",
        weight: "semibold",
      },
      descriptionProps: {
        tag: "p",
        variant: "tertiary",
      },
    },
    link: {
      href: staticRoutes.SERVICES,
      type: "button",
      buttonText: "View Details",
    },
  },
  {
    imageSection: {
      src: imgPlaceholder1,
      alt: "Scalable Architecture",
    },
    textSection: {
      title: "Scalable Architecture",
      subTitle: "Built to Grow",
      description:
        "Future-proof your application with scalable architecture designed for growth.",
      titleProps: {
        tag: "h3",
        variant: "primary",
        weight: "bold",
      },
      subTitleProps: {
        tag: "p",
        variant: "secondary",
        weight: "semibold",
      },
      descriptionProps: {
        tag: "p",
        variant: "tertiary",
      },
    },
    link: {
      href: staticRoutes.SERVICES,
      type: "button",
      buttonText: "Get Started",
    },
  },
  {
    imageSection: {
      src: imgPlaceholder2,
      alt: "SEO Optimized",
    },
    textSection: {
      title: "SEO Optimized",
      subTitle: "Rank Higher",
      description:
        "Improve your search engine rankings with built-in SEO best practices and optimization.",
      titleProps: {
        tag: "h3",
        variant: "primary",
        weight: "bold",
      },
      subTitleProps: {
        tag: "p",
        variant: "secondary",
        weight: "semibold",
      },
      descriptionProps: {
        tag: "p",
        variant: "tertiary",
      },
    },
    link: {
      href: staticRoutes.SERVICES,
      type: "button",
      buttonText: "Learn How",
    },
  },
  {
    imageSection: {
      src: imgPlaceholder3,
      alt: "Type Safe Code",
    },
    textSection: {
      title: "Type Safe Code",
      subTitle: "TypeScript & Zod",
      description:
        "Write robust, maintainable code with full TypeScript support and runtime validation.",
      titleProps: {
        tag: "h3",
        variant: "primary",
        weight: "bold",
      },
      subTitleProps: {
        tag: "p",
        variant: "secondary",
        weight: "semibold",
      },
      descriptionProps: {
        tag: "p",
        variant: "tertiary",
      },
    },
    link: {
      href: staticRoutes.SERVICES,
      type: "button",
      buttonText: "Discover More",
    },
  },
]
