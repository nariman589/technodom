import React from "react";
import { ButtonProps } from "./Button.props";
import styled from "styled-components";

export const Button = ({ inline = false, ...rest }: ButtonProps) => {
  return (
    <ButtonS inline={inline} {...rest}>
      {rest.children}
    </ButtonS>
  );
};

interface ButtonSProps {
  inline?: boolean;
}

const ButtonS = styled.button<ButtonSProps>`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ inline, theme }) =>
    inline ? "transparent" : theme.colors.main};
  border: ${({ inline, theme }) =>
    inline ? "none" : `1px solid ${theme.colors.main}`};
  padding: ${({ inline }) => (inline ? "0" : `10px`)};
  color: ${({ inline, theme }) =>
    inline ? theme.colors.main : theme.colors.white};
  cursor: pointer;
`;
