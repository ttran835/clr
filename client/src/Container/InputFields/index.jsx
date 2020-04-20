import React, { useState } from 'react';
import { MDBInput } from 'mdbreact';

/**
 * Renders input component
 * @param {Props} props
 * @example {className, name, icon, hint, id, size}
 */
export default function createInput({ options }) {
  const [value, setValue] = useState('');
  const { className, name, icon, hint, id, size, type } = options || {};
  const input = (
    <MDBInput
      className={className}
      onChange={(e) => setValue(e.target.value)}
      name={name}
      icon={icon}
      hint={hint}
      id={id}
      size={size}
      value={value}
      type={type}
    />
  );
  return [value, input];
}
