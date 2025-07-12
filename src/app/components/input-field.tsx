'use client';

import { Field } from 'formik';
import React from 'react';

export interface InputFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  id?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="h-11 p-3 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
}
