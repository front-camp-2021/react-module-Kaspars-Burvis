import React from 'react';

const InputCheckbox = ({ name, checked, handleCheck }) => (
  <>
    <label>
      <input
        type='checkbox'
        checked={checked}
        name={name}
        onChange={handleCheck}
      />
      <span>{name}</span>
    </label>
  </>
);

export default InputCheckbox;
