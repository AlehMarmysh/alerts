import React from 'react';
import { TextInputContainer } from './styles';

const TextInput = ({ type, name, placeholder }) => {
  return <TextInputContainer type={type} name={name} placeholder={placeholder} />;
};

export default React.memo(TextInput);
