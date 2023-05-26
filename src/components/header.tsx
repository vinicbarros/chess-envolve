import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center py-6">
      <Image
        src="/assets/images/logo.png"
        alt="logo Envolve"
        width={228}
        height={37}
      />
    </header>
  );
}
