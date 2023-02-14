import Link from "next/link";
import Image from "next/image";

export default function Logo({ ImgName, ImgAlt }) {
  return (
    <Link href={"/"}>
      <Image
        src={`/logo/${ImgName}`}
        alt={ImgAlt}
        height={60}
        width={238}
        priority
      />
    </Link>
  );
}
