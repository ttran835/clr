import React, { useRef, useEffect } from 'react';
import { MDBInput } from 'mdbreact';

/**
 * Renders input component
 * @param {Props} props
 * @example {className, name, icon, hint, id, size, onChange}
 */
export default function passwordInput(props) {
  const { className, name, icon, hint, id, size, onChange, value } = props;
  return (
    <MDBInput
      className={className}
      onChange={onChange}
      name={name}
      icon={icon}
      hint={hint}
      id={id}
      size={size}
      value={value}
    />
  );
}
