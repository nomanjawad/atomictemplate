/*
 * InputField.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

"use client"

import { Content, BaseText } from "@atoms"
import { ReactNode, ChangeEvent } from "react"

import styles from "./contact-form.module.css"

/**
 * InputField - Form input component with label and validation support
 *
 * USE CASES:
 * - Contact forms, login forms, registration forms
 * - Single-line text inputs (name, email, phone)
 * - Multi-line text areas (message, description)
 * - Number inputs (age, quantity)
 * - Any form data collection
 *
 * FEATURES:
 * - Client-side state management with setValue
 * - Optional label with bold styling
 * - Supports input and textarea tags
 * - Automatic ID generation from name
 * - Styled with CSS modules
 *
 * @param {"input" | "textarea"} tag - HTML element type (default: "input")
 *   - "input": Single-line input field
 *   - "textarea": Multi-line text area
 *
 * @param {string} id - HTML id attribute (default: uses name)
 *   - For label association: <label htmlFor={id}>
 *   - Auto-generated if not provided
 *
 * @param {string} name - Input name attribute (required)
 *   - Used for form submission
 *   - Used as fallback id
 *   - Should be unique within form
 *
 * @param {string} label - Label text (optional)
 *   - Displayed above input field
 *   - Bold styling by default
 *   - Accessible with htmlFor
 *
 * @param {string} type - Input type (default: "text")
 *   - "text": Plain text
 *   - "email": Email validation
 *   - "tel": Phone number
 *   - "number": Numeric input
 *   - "password": Hidden text
 *   - "url": URL validation
 *
 * @param {number} rows - Textarea rows (default: undefined)
 *   - Only applies when tag="textarea"
 *   - Controls initial height
 *   - User can still resize
 *
 * @param {string} placeholder - Placeholder text
 *   - Shown when field is empty
 *   - Should be descriptive hint
 *   - Not a replacement for label
 *
 * @param {Function} setValue - State setter function
 *   - Called on input change
 *   - Receives string or number value
 *   - Number type auto-converts to number
 *
 * @example
 * // Basic text input
 * const [name, setName] = useState("")
 * <InputField
 *   name="name"
 *   label="Full Name"
 *   placeholder="Enter your name"
 *   setValue={setName}
 * />
 *
 * @example
 * // Email input
 * const [email, setEmail] = useState("")
 * <InputField
 *   name="email"
 *   label="Email Address"
 *   type="email"
 *   placeholder="you@example.com"
 *   setValue={setEmail}
 * />
 *
 * @example
 * // Textarea for message
 * const [message, setMessage] = useState("")
 * <InputField
 *   tag="textarea"
 *   name="message"
 *   label="Message"
 *   rows={5}
 *   placeholder="Tell us about your project..."
 *   setValue={setMessage}
 * />
 *
 * @example
 * // Number input
 * const [age, setAge] = useState(0)
 * <InputField
 *   name="age"
 *   label="Age"
 *   type="number"
 *   setValue={setAge}
 * />
 *
 * @example
 * // In a form
 * <form onSubmit={handleSubmit}>
 *   <InputField name="name" label="Name" setValue={setName} />
 *   <InputField name="email" type="email" label="Email" setValue={setEmail} />
 *   <InputField tag="textarea" name="message" label="Message" rows={5} setValue={setMessage} />
 *   <button type="submit">Submit</button>
 * </form>
 *
 * STYLING:
 * - Uses CSS modules: contact-form.module.css
 * - .inputField class for input/textarea styling
 * - Vertical layout with label above field
 * - Gap-small between label and input
 *
 * ACCESSIBILITY:
 * - Label properly associated with input (htmlFor)
 * - Placeholder provides additional context
 * - Keyboard accessible
 * - Screen reader friendly
 *
 * VALIDATION:
 * - HTML5 validation with type attribute
 * - type="email": Validates email format
 * - type="tel": Mobile keyboards show numbers
 * - type="url": Validates URL format
 * - Add required, pattern, min, max as needed
 *
 * BEST PRACTICES:
 * - Always provide a label (required for accessibility)
 * - Use descriptive names: "email" not "field1"
 * - Placeholder is hint, not instructions
 * - Validate on submit, not on every keystroke
 * - Show error messages near the field
 * - Use appropriate input types for mobile keyboards
 */
interface InputFieldProps {
  tag?: "input" | "textarea"
  id?: string
  name: string
  label?: string
  type?: string
  value?: string | number
  rows?: number
  placeholder?: string
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
  pattern?: string
  autoComplete?: string
  error?: string
  helperText?: string
  setValue?: (value: string | number) => void
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

/**
 * InputContainer - Internal wrapper for label + input layout
 * Provides consistent vertical spacing and structure.
 */
function InputContainer({
  id,
  label,
  required,
  error,
  helperText,
  children,
}: {
  id?: string
  label?: string
  required?: boolean
  error?: string
  helperText?: string
  children: ReactNode
}) {
  return (
    <Content direction="column" gap="sm">
      {label && (
        <label htmlFor={id} className="font-bold">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {helperText && !error && (
        <BaseText size="small" className="text-gray-600">
          {helperText}
        </BaseText>
      )}
      {error && (
        <BaseText size="small" className="text-red-500">
          {error}
        </BaseText>
      )}
    </Content>
  )
}

export default function InputField({
  id,
  name,
  label,
  type = "text",
  value,
  rows,
  placeholder,
  required,
  disabled,
  readOnly,
  min,
  max,
  minLength,
  maxLength,
  pattern,
  autoComplete,
  error,
  helperText,
  tag = "input",
  setValue,
  onChange,
}: InputFieldProps) {
  const fieldId = id || name

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = type === "number" ? Number(e.target.value) : e.target.value
    
    if (setValue) {
      setValue(inputValue)
    }
    
    if (onChange) {
      onChange(e)
    }
  }

  const commonProps = {
    name,
    id: fieldId,
    placeholder,
    required,
    disabled,
    readOnly,
    className: `${styles.inputField} ${error ? styles.inputFieldError : ""}`,
    onChange: handleChange,
    value: value ?? "",
  }

  if (tag === "textarea") {
    return (
      <InputContainer
        id={fieldId}
        label={label}
        required={required}
        error={error}
        helperText={helperText}
      >
        <textarea
          {...commonProps}
          rows={rows}
          minLength={minLength}
          maxLength={maxLength}
        />
      </InputContainer>
    )
  }

  return (
    <InputContainer
      id={fieldId}
      label={label}
      required={required}
      error={error}
      helperText={helperText}
    >
      <input
        {...commonProps}
        type={type}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        autoComplete={autoComplete}
      />
    </InputContainer>
  )
}
