import CheckListPieces from "@/components/chessPiecesCart/checkListPieces";
import BoxWrapper from "@/components/common/boxWrapper";
import Wrapper from "@/components/common/wrapper";
import ResumeSelection from "@/components/resumeSelection/resumeSelection";
import MappedPieces from "@/components/selectChessPieces/mappedPieces";
import { piecesDataType } from "@/types/piecesTypes";
import dynamic from "next/dynamic";
import Loading from "@/components/loading";

const getDados = async (): Promise<piecesDataType[]> => {
  const res = await fetch("http://localhost:5000/api/pieces");
  return res.json();
};

const DynamicContainer = dynamic(
  () => import("../components/common/container"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default async function Home() {
  const data = await getDados();
  return (
    <>
      <main className="mx-auto flex w-90% justify-center">
        <DynamicContainer>
          <BoxWrapper
            title="Passo 01 - Selecione Peças"
            element={<MappedPieces data={data} />}
            type="main"
          />
          <Wrapper>
            <BoxWrapper
              title="Passo 02 - Revise a seleção"
              element={<CheckListPieces />}
              type="side"
            />
            <BoxWrapper
              title="Passo 03 - Resumo da seleção"
              element={<ResumeSelection />}
              type="side"
            />
          </Wrapper>
        </DynamicContainer>
      </main>
    </>
  );
}
