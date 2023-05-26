"use client";

import { piecesDataType } from "@/types/piecesTypes";
import { styled } from "styled-components";
import ChessPiece from "./chessPiece";

export default function MappedPieces({ data }: { data: piecesDataType[] }) {
  return (
    <ChessPiecesBox>
      {data.map((piece) => (
        <ChessPiece chessPiece={piece} key={piece.id} />
      ))}
    </ChessPiecesBox>
  );
}

const ChessPiecesBox = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 15px;
`;
