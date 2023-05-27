"use client";

import { piecesDataType } from "@/types/piecesTypes";
import { styled } from "styled-components";
import { BsTrash3 } from "react-icons/bs";
import { useMainContext } from "@/context/mainContext";

export default function ListChessPiece({
  chessPiece,
}: {
  chessPiece: piecesDataType;
}) {
  const { setCart } = useMainContext();

  const handleClick = (chessPiece: piecesDataType) => {
    setCart((prev) => prev.filter((piece) => piece.id !== chessPiece.id));
  };

  return (
    <ChessBox>
      <Wrapper>
        <ImageWrapper>
          <Image src={chessPiece.image} alt={chessPiece.name} />
        </ImageWrapper>
        <InfoBox>
          <Title>{chessPiece.name}</Title>
          <Description>{chessPiece.description}</Description>
        </InfoBox>
      </Wrapper>
      <Wrapper>
        <ValueBox>{chessPiece.value}</ValueBox>
        <Trash
          onClick={() => {
            handleClick(chessPiece);
          }}
        >
          <BsTrash3 size={12} />
        </Trash>
      </Wrapper>
    </ChessBox>
  );
}

const ChessBox = styled.div`
  background-color: #45556c;
  width: 100%;
  min-height: 70.3px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 11px;
  border-radius: 5px;

  & + & {
    margin-top: 2px;
  }

  @media (max-width: 481px) {
    height: 120px;
    position: relative;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 481px) {
    &:nth-child(2) {
      flex-direction: column;
      position: absolute;
      top: 11px;
      right: 11px;
    }
  }
`;

const Image = styled.img`
  height: 44px;
`;

const ImageWrapper = styled.div`
  width: 27px;
  margin-right: 50px;
  margin-left: 12px;

  @media (max-width: 600px) {
    margin-right: 10px;
  }
`;

const InfoBox = styled.div``;

const Title = styled.h1`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
`;

const ValueBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #293952;
  height: 30px;
  width: 98px;
  border-radius: 2px;

  color: white;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;

  @media (max-width: 481px) {
    margin-bottom: 40px;
  }
`;

const Trash = styled.div`
  width: 32px;
  height: 23px;

  margin-left: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: rgb(83, 82, 96);
  background: linear-gradient(
    0deg,
    rgba(83, 82, 96, 1) 30%,
    rgba(136, 136, 136, 1) 100%
  );

  &:hover {
    background: rgb(76, 76, 82);
    background: linear-gradient(
      0deg,
      rgba(76, 76, 82, 1) 30%,
      rgba(115, 110, 110, 1) 100%
    );
  }

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 481px) {
    margin-left: 60px;
  }
`;
