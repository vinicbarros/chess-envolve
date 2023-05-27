"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";

export default function Container({ children }: { children: ReactNode }) {
  return <Box>{children}</Box>;
}

const Box = styled.section`
  padding-top: 20px;
  border-top: 3px solid #48627a;
  width: 90%;

  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
