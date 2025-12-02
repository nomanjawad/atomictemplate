/*
 * form-fields-example.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

/**
 * Example form field configurations for data-driven forms
 * Use this pattern in your data folder for any form
 */

export interface FormFieldConfig {
  name: string
  label: string
  type?: string
  tag?: "input" | "textarea"
  placeholder?: string
  required?: boolean
  rows?: number
  minLength?: number
  maxLength?: number
  pattern?: string
  autoComplete?: string
  helperText?: string
  min?: number
  max?: number
}

// Contact Form Example
export const contactFormFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
    minLength: 2,
    maxLength: 100,
    autoComplete: "name",
    helperText: "We'll use this to address you properly",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "you@example.com",
    required: true,
    autoComplete: "email",
    helperText: "We'll never share your email",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 (234) 567-8900",
    required: false,
    autoComplete: "tel",
    helperText: "Optional - for urgent inquiries",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What is this regarding?",
    required: true,
    minLength: 5,
    maxLength: 200,
  },
  {
    name: "message",
    label: "Message",
    tag: "textarea",
    placeholder: "Tell us about your project or inquiry...",
    required: true,
    rows: 5,
    minLength: 10,
    maxLength: 1000,
    helperText: "Please provide as much detail as possible",
  },
]

// Registration Form Example
export const registrationFormFields: FormFieldConfig[] = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Choose a username",
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: "^[a-zA-Z0-9_]+$",
    helperText: "Only letters, numbers, and underscores",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "your@email.com",
    required: true,
    autoComplete: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Create a strong password",
    required: true,
    minLength: 8,
    autoComplete: "new-password",
    helperText: "Minimum 8 characters",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Re-enter your password",
    required: true,
    autoComplete: "new-password",
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    placeholder: "18",
    required: true,
    min: 18,
    max: 120,
    helperText: "Must be 18 or older",
  },
]

// Newsletter Form Example
export const newsletterFormFields: FormFieldConfig[] = [
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    autoComplete: "email",
  },
]

// Feedback Form Example
export const feedbackFormFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Your Name",
    type: "text",
    placeholder: "John Doe",
    required: false,
    autoComplete: "name",
    helperText: "Optional - help us personalize our response",
  },
  {
    name: "rating",
    label: "Rating",
    type: "number",
    placeholder: "1-5",
    required: true,
    min: 1,
    max: 5,
    helperText: "Rate your experience from 1 to 5",
  },
  {
    name: "feedback",
    label: "Your Feedback",
    tag: "textarea",
    placeholder: "Tell us what you think...",
    required: true,
    rows: 6,
    minLength: 10,
  },
]
