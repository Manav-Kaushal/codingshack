import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 h-[70px] px-10">
      <div>
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/manavkaushal/image/upload/v1671132176/Projects/codingshacks/logo_xjcrc3.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
