/*
 * contact-page-data.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

export interface ContactInfo {
  icon: string
  label: string
  value: string
  href?: string
}

export interface ContactFormField {
  name: string
  label: string
  type: "text" | "email" | "tel" | "textarea"
  placeholder: string
  required: boolean
  rows?: number
}

export interface ContactPageData {
  hero: {
    title: string
    subtitle: string
    description: string
  }
  contactInfo: ContactInfo[]
  form: {
    title: string
    description: string
    fields: ContactFormField[]
    submitButton: string
  }
  map?: {
    title: string
    embedUrl: string
  }
}

export const contactPageData: ContactPageData = {
  hero: {
    title: "Get in Touch",
    subtitle: "Contact Us",
    description:
      "Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  },
  contactInfo: [
    {
      icon: "email",
      label: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
    },
    {
      icon: "phone",
      label: "Phone",
      value: "+1 234 567 8900",
      href: "tel:+12345678900",
    },
    {
      icon: "location",
      label: "Address",
      value: "123 Business Street, Suite 100, City, State 12345",
    },
    {
      icon: "clock",
      label: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ],
  form: {
    title: "Send us a Message",
    description: "Fill out the form below and we'll get back to you shortly.",
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
        required: true,
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number",
        required: false,
      },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "What is this about?",
        required: true,
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Tell us more about your inquiry...",
        required: true,
        rows: 6,
      },
    ],
    submitButton: "Send Message",
  },
  map: {
    title: "Find Us",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
  },
}
