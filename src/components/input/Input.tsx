import React, { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./Input.props";
import styled from "styled-components";

export const Input = forwardRef(
  ({ error, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <InputWrapper>
        <input {...rest} ref={ref} />
        {error && <Error>{error.message}</Error>}
      </InputWrapper>
    );
  }
);

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    padding: 5px;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 0.8rem;
  word-wrap: break-word;
`;
