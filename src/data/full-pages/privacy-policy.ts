/*
 * Privacy-policy.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

export interface PrivacyPolicySection {
  title: string
  subtitle?: string
  description?: string
  list?: string[]
  summary?: string
}

export const privacyPolicySectionData: PrivacyPolicySection[] = [
  {
    title: "Introduction",
    description:
      "This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.",
  },
  {
    title: "Information We Collect",
    subtitle: "We may collect the following types of information:",
    list: [
      "Personal information such as name, email address, and phone number",
      "Usage data including IP address, browser type, and pages visited",
      "Cookies and similar tracking technologies",
    ],
  },
  {
    title: "How We Use Your Information",
    subtitle: "Your information is used to:",
    list: [
      "Provide and improve our services",
      "Communicate with you about updates and offers",
      "Analyze usage patterns and optimize user experience",
      "Comply with legal obligations",
    ],
  },
  {
    title: "Data Security",
    description:
      "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.",
  },
  {
    title: "Your Rights",
    list: [
      "Recruitment service fees (if applicable) are governed by agreements between Amco Enterprise Limited, candidates, and employers.",
      "Any payment terms will be clearly stated in advance and must be honored by all parties.",
      "We do not tolerate fraudulent or unauthorized payments.",
    ],
  },
  {
    title: "Data Privacy",
    description:
      "Your use of our website and services is also governed by our Privacy Policy, which explains how we collect, store, and process personal data.",
  },
  {
    title: "Third-Party Links",
    description:
      "Our website may contain links to third-party websites for convenience. We are not responsible for the content, accuracy, or practices of those websites.",
  },
  {
    title: "Limitation of Liability",
    subtitle:
      "While we strive to provide accurate and reliable recruitment services, Amco Enterprise Limited is not responsible for:",
    list: [
      "Any losses or damages resulting from inaccurate information provided by candidates or employers.",
      "Employment disputes between candidates and employers after placement.",
      "Service interruptions, website downtime, or technical issues.",
    ],
    summary:
      "Our liability, where legally applicable, is limited to the extent of fees paid for our services.",
  },
  {
    title: "Intellectual Property",
    description:
      "All content on our website, including text, images, graphics, and logos, is the property of Amco Enterprise Limited unless otherwise stated. You may not copy, distribute, or reproduce without written permission.  ",
  },
  {
    title: "Governing Law",
    description:
      "These Terms & Conditions are governed by and construed in accordance with the laws of Bangladesh. Any disputes shall be subject to the jurisdiction of the courts in Dhaka, Bangladesh.",
  },
  {
    title: "Changes to Terms",
    description:
      "We reserve the right to modify or update these Terms & Conditions at any time. Updates will be posted on this page with a revised effective date. Continued use of our services means you accept the updated terms.",
  },
  {
    title: "Contact Us",
    description:
      "For any questions or concerns regarding these Terms, please contact us at:",
  },
]
