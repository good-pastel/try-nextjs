import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/">
            <Image
              src="https://raw.githubusercontent.com/good-pastel/good-pastel.github.io/refs/heads/main/img/logo_trans.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/about">About</Link>
        </div>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}

export default Header;
