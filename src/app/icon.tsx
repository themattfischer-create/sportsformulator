import Image from "next/image";

export default function Icon() {
  return (
    <Image
      src="/sf-icon.png"
      alt="SportsFormulator"
      width={32}
      height={32}
      priority
    />
  );
}