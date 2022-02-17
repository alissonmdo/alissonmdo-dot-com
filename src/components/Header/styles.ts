import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  font-family: var(--text-font-family);
  margin-bottom: 2.5rem;
`;

export const Image = styled.img`
  width: 9.375rem;
  border: 0.1875rem solid var(--color-light-green);
  border-radius: 50%;
  margin-bottom: 0.75rem;
`;

export const Title = styled.h1`
  font-weight: var(--text-title-weight);
  font-size: 2.25rem;
  margin-bottom: 0.375rem;
`;

export const SubTitle = styled.h2`
  font-weight: var(--text-default-weight);
  font-size: 1.5rem;
`;
