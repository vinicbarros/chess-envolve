"use client";

import { piecesDataType } from "@/types/piecesTypes";
import { styled } from "styled-components";

export default function ChessPiece({
  chessPiece,
}: {
  chessPiece: piecesDataType;
}) {
  return (
    <ChessBox>
      <InfoBox>
        <Title>{chessPiece.name}</Title>
        <Description>{chessPiece.description}</Description>
      </InfoBox>
      <ImageBox>
        <StyledImage src={chessPiece.image} alt={chessPiece.name} />
        <PieceValue>{chessPiece.value}</PieceValue>
      </ImageBox>
    </ChessBox>
  );
}

const ChessBox = styled.div`
  width: calc(33.33% - 10px);
  height: 216px;
  background-color: #45556c;
  padding: 11px;

  align-items: center;
  justify-content: center;
  border-radius: 5px;

  @media (max-width: 1250px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 1024px) {
    width: calc(33.33% - 10px);
  }

  @media (max-width: 769px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 481px) {
    height: 238px;
  }
`;

const StyledImage = styled.img``;

const Title = styled.h1`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 4px;
`;

const Description = styled.h4`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
`;

const InfoBox = styled.div`
  height: 48px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PieceValue = styled.h2`
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  margin-top: 6px;
`;
