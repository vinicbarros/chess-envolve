"use client";
import { styled } from "styled-components";

export default function BoxWrapper({
  element,
  title,
  type,
}: {
  element: JSX.Element;
  title: string;
  type: string;
}) {
  return (
    <Container $type={type}>
      <Title>{title}</Title>
      {element}
    </Container>
  );
}

const Container = styled.section<ContainerType>`
  background-color: #21394f;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$type === "main" ? "50%" : "100%")};
  height: fit-content;

  padding: 15px 15px 20px 15px;
  border-radius: 5px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  &:nth-child(2) {
    margin-top: 21px;
  }
`;

type ContainerType = {
  $type: string;
};

const Title = styled.h1`
  font-size: 15px;
  letter-spacing: 0.25px;
  font-weight: 600;

  margin-bottom: 22px;
`;
