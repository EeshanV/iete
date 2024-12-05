import React from 'react'

interface FormFieldProps {
  label: string
  name: string
  type?: string
  required?: boolean
  defaultValue?: string | number
  placeholder?: string
  className?: string
  as?: 'input' | 'textarea' | 'select'
  children?: React.ReactNode
  rows?: number
  error?: string
  description?: string
}

export default function FormField({
  label,
  name,
  type = 'text',
  required = false,
  defaultValue,
  placeholder,
  className = '',
  as = 'input',
  children,
  rows,
  error,
  description,
  ...props
}: FormFieldProps) {
  const id = `field-${name}`
  const descriptionId = `${id}-description`
  const errorId = `${id}-error`

  const baseClassName = `
    mt-1 block w-full rounded-md 
    border-gray-300 
    shadow-sm 
    transition-colors duration-200
    focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
    disabled:bg-gray-50 disabled:text-gray-500
    ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
  `
  
  return (
    <div className={`space-y-1 ${className}`}>
      <label 
        htmlFor={id} 
        className={`
          block text-sm font-medium
          ${error ? 'text-red-600' : 'text-gray-700'}
        `}
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-hidden="true">*</span>
        )}
      </label>
      
      {description && (
        <p 
          id={descriptionId}
          className="text-sm text-gray-500"
        >
          {description}
        </p>
      )}
      
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows || 4}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          className={baseClassName}
          aria-describedby={`${description ? descriptionId : ''} ${error ? errorId : ''}`}
          aria-invalid={error ? 'true' : undefined}
          {...props}
        />
      ) : as === 'select' ? (
        <select
          id={id}
          name={name}
          defaultValue={defaultValue}
          required={required}
          className={baseClassName}
          aria-describedby={`${description ? descriptionId : ''} ${error ? errorId : ''}`}
          aria-invalid={error ? 'true' : undefined}
          {...props}
        >
          {children}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          className={baseClassName}
          aria-describedby={`${description ? descriptionId : ''} ${error ? errorId : ''}`}
          aria-invalid={error ? 'true' : undefined}
          {...props}
        />
      )}

      {error && (
        <p 
          id={errorId}
          className="text-sm text-red-600 mt-1"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
} 