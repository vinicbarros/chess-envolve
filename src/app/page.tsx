import BoxWrapper from "@/components/common/boxWrapper";
import MappedPieces from "@/components/selectChessPieces/mappedPieces";
import { piecesDataType } from "@/types/piecesTypes";
import dynamic from "next/dynamic";

const getDados = async (): Promise<piecesDataType[]> => {
  const res = await fetch("http://localhost:5000/api/pieces");
  return res.json();
};

const DynamicContainer = dynamic(
  () => import("../components/common/container"),
  {
    ssr: false,
    loading: () => <p>Loading page soon...</p>,
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
            element={<MappedPieces chessPieces={data} />}
          />
        </DynamicContainer>
      </main>
    </>
  );
}
