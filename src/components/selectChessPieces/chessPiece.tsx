"use client";

import { useMainContext } from "@/context/mainContext";
import { piecesDataType } from "@/types/piecesTypes";
import { useState } from "react";
import { styled } from "styled-components";

export default function ChessPiece({
  chessPiece,
}: {
  chessPiece: piecesDataType;
}) {
  const { setCart, cart } = useMainContext();

  const checkIfCartHavethisPiece = (id: number) => {
    const teste = cart.filter((piece) => piece.id === id);
    if (teste.length > 0) return true;
    return false;
  };

  const handleClick = (chessPiece: piecesDataType) => {
    if (checkIfCartHavethisPiece(chessPiece.id)) {
      setCart((prev) => prev.filter((piece) => piece.id !== chessPiece.id));
    } else if (!checkIfCartHavethisPiece(chessPiece.id)) {
      setCart((prev) => [chessPiece, ...prev]);
    }
  };

  return (
    <ChessBox
      $clicked={checkIfCartHavethisPiece(chessPiece.id)}
      onClick={() => handleClick(chessPiece)}
    >
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

const ChessBox = styled.div<ChessBoxProps>`
  width: calc(33.33% - 10px);
  height: 216px;
  background-color: #45556c;
  padding: 11px;
  cursor: pointer;

  align-items: center;
  justify-content: center;
  border-radius: 5px;

  position: relative;

  border: ${(props) =>
    props.$clicked ? "4px solid #0F253A" : "4px solid #45556c"};

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

  box-shadow: ${(props) =>
    props.$clicked ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none"};
`;

interface ChessBoxProps {
  $clicked: boolean;
}

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  position: absolute;
  bottom: 4px;
  left: 0;
`;

const PieceValue = styled.h2`
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  margin-top: 6px;
`;
