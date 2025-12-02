/*
 * ContactFormSection.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

"use client"

import { useState, FormEvent } from "react"
import { Section, Container, Content } from "@atoms"
import { contactPageData } from "@data"

export default function ContactFormSection() {
  const { form } = contactPageData
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you! Your message has been sent successfully.")
      setFormData({})
    }, 1500)
  }

  return (
    <Section padding="2xl" bgColor="bg-gray-50">
      <Container>
        <Content direction="column" gap="xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {form.title}
            </h2>
            <p className="text-lg text-gray-600">{form.description}</p>
          </div>

          <div className="max-w-3xl mx-auto w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="space-y-6">
                {form.fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-secondary ml-1">*</span>
                      )}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={field.rows || 4}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                    )}
                  </div>
                ))}
              </div>

              {submitMessage && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-center">{submitMessage}</p>
                </div>
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : form.submitButton}
                </button>
              </div>
            </form>
          </div>
        </Content>
      </Container>
    </Section>
  )
}
