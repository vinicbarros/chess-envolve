"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <Box>{children}</Box>;
}

const Box = styled.main`
  width: 50%;
  margin-left: 21px;

  @media screen and (max-width: 1024px) {
    margin-left: 0px;
    margin-top: 21px;
    width: 100%;
  }
`;
