import React from "react";
import styled from "styled-components";

const InputStyle = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  input {
    border: 1px solid black;
    font-size: 1.2rem;
    padding: 0.3em;
    border-radius: 5px;
    outline: none;
    flex-shrink: 0;
    flex-basis: 200px;
  }
  label {
    flex-shrink: 0;
    flex-basis: 200px;
    font-size: 1.3rem;
    &::after {
      content: "*";
      padding: 0.2em;
      color: red;
    }
  }
`;

function Input({ label, handleInput }) {
  return (
    <InputStyle>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} />
    </InputStyle>
  );
}
export default Input;
