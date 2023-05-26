"use client";
import { styled } from "styled-components";

export default function BoxWrapper({
  element,
  title,
}: {
  element: JSX.Element;
  title: string;
}) {
  return (
    <Container>
      <Title>{title}</Title>
      {element}
    </Container>
  );
}

const Container = styled.section`
  background-color: #21394f;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: fit-content;

  padding: 15px 15px 20px 15px;
  border-radius: 5px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 15px;
  letter-spacing: 0.25px;
  font-weight: 600;

  margin-bottom: 22px;
`;
