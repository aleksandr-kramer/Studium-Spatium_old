import Link from "next/link";
import Image from "next/image";

export default function Logo({ ImgLogo, AltLogo }) {
  return (
    <Link href={"/"}>
      <Image
        src={`/logo/${ImgLogo}`}
        alt={AltLogo}
        height={68}
        width={238}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </Link>
  );
}
