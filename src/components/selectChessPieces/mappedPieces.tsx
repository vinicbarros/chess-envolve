"use client";

import { piecesDataType } from "@/types/piecesTypes";
import { styled } from "styled-components";
import ChessPiece from "./chessPiece";

export default function MappedPieces({
  chessPieces,
}: {
  chessPieces: piecesDataType[];
}) {
  return (
    <ChessPiecesBox>
      {chessPieces.map((piece) => (
        <ChessPiece chessPiece={piece} key={piece.id} />
      ))}
    </ChessPiecesBox>
  );
}

const ChessPiecesBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 15px;
`;
