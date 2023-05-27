"use client";

import { useMainContext } from "@/context/mainContext";
import { styled } from "styled-components";
import { BsTrash3 } from "react-icons/bs";

export default function ResumeSelection() {
  const { cart, setCart } = useMainContext();

  const total = cart.reduce((sum, piece) => {
    return sum + piece.value;
  }, 0);

  const cleanCart = () => {
    setCart([]);
  };

  return (
    <Wrapper>
      <Box2>
        <Title>Quantidade de peças selecionadas:</Title>
        <QuantityBox>
          <>{cart.length}</>
        </QuantityBox>
      </Box2>
      <Box>
        <TotalTitle>Total:</TotalTitle>
        <ValueBox>{total}</ValueBox>
      </Box>
      <Button onClick={cleanCart}>
        <BsTrash3 size={18} style={{ marginRight: 5 }} /> Limpar tudo
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 70px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  margin-right: 16px;

  @media (max-width: 600px) {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

const QuantityBox = styled.div`
  background-color: #0f253a;
  width: 60px;
  height: 20px;
  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;

const TotalTitle = styled.h4`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;

  margin-right: 16px;

  @media (max-width: 600px) {
    margin-bottom: 5px;
    font-size: 16px;
  }
`;

const ValueBox = styled.div`
  background-color: #0f253a;
  width: 158px;
  height: 48px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
`;

const Button = styled.button`
  background: rgb(5, 117, 198);
  background: linear-gradient(
    0deg,
    rgba(5, 117, 198, 1) 52%,
    rgba(26, 160, 255, 1) 100%
  );

  width: 174px;
  height: 37px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  border-radius: 4px;

  font-weight: 600;
  font-size: 13px;
  line-height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgb(0, 77, 133);
    background: linear-gradient(
      0deg,
      rgba(0, 77, 133, 1) 52%,
      rgba(20, 114, 181, 1) 100%
    );
  }

  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 600px) {
    position: unset;
    margin-top: 15px;
  }
`;

const Box = styled.div`
  display: flex;

  position: absolute;
  right: 0;
  top: -40px;

  @media (max-width: 1250px) {
    position: unset;
    margin-top: 10px;
  }

  @media (max-width: 1024px) {
    position: absolute;
    right: 0;
    top: -40px;
    margin-top: 0px;
  }

  @media (max-width: 600px) {
    position: unset;
    margin-top: 10px;
    flex-direction: column;
  }
`;

const Box2 = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
