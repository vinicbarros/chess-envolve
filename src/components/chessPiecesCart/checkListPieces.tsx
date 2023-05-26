"use client";

import { useMainContext } from "@/context/mainContext";
import { styled } from "styled-components";
import ListChessPiece from "./listChessPiece";

export default function CheckListPieces() {
  const { cart } = useMainContext();

  return (
    <Wrapper>
      {cart.length === 0 ? (
        <Warning>Você ainda não selecionou nenhuma peça!</Warning>
      ) : (
        cart.map((chessPiece) => (
          <ListChessPiece key={chessPiece.id} chessPiece={chessPiece} />
        ))
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Warning = styled.h2`
  color: #9c9c9c;
`;
