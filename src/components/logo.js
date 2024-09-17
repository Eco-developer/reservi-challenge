import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
    <Link href="/">
        <Image
            alt="mercadolibre-logo"
            src={"/images/logo_large_25years_v2.png"}
            height={34}
            width={134}
        />
    </Link>
)