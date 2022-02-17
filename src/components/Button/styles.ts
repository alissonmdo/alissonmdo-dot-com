import styled from "styled-components";

export const Container = styled.button`
  width: 75%;
  max-width: 21.875rem;
  height: 3.75rem;
  margin-bottom: 0.75rem;
  border: 0.1875rem solid #ffffff;
  border-radius: 0.625rem;
  background: none;

  font-family: var(--text-font-family);
  font-weight: var(--text-default-weight);
  font-size: 1.5rem;
  color: var(--color-white);

  transition: all ease-in-out 200ms;

  :hover{
    background-color: var(--color-blue);
    box-shadow: 0 0 20px var(--color-blue);
    cursor: pointer;
  }
`
