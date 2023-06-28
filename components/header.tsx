import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-primary_bg">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Link href="/">
                    <p className="text-white md:text-xl text-[26px] italic">
                        Safe<span className="text-primary font-bold">Wheel</span>
                    </p>
                </Link>
                <Link href="/pokemon" className="text-primary_text">
                    Pokemon
                </Link>
            </nav>
        </header>

    );
};

export default Header;
