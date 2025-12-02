/*
 * ContactFormExample.tsx
 * Example of using InputField with data-driven form pattern
 */

"use client"

import { useState, FormEvent } from "react"
import { InputField } from "@molecules"
import { contactFormFields } from "@data"

export default function ContactFormExample() {
  // Initialize form state from field configs
  const [formData, setFormData] = useState<Record<string, string | number>>(
    contactFormFields.reduce((acc, field) => {
      acc[field.name] = ""
      return acc
    }, {} as Record<string, string | number>)
  )

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    // Your validation logic here
    const newErrors: Record<string, string> = {}

    // Example validation
    contactFormFields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    // Submit form data
    try {
      console.log("Form data:", formData)
      // await submitForm(formData)
      alert("Form submitted successfully!")
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold">Contact Us</h2>

      {/* Data-driven form fields */}
      {contactFormFields.map((field) => (
        <InputField
          key={field.name}
          {...field}
          value={formData[field.name]}
          setValue={(value) =>
            setFormData((prev) => ({ ...prev, [field.name]: value }))
          }
          error={errors[field.name]}
        />
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
