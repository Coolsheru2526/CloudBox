import Image from "next/image";
import Link from "next/link";
import img from '../public/pngwing.com.png'
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";


const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <Link href='/' className="flex items-center space-x-2">
                <div className="bg-[#0160FE]">
                    <Image
                    src={img}
                    alt='logo'
                    className="invert"
                    height={50}
                    width={50}
                    />
                </div>
                <h1 className="font-bold text-xl">DropBox</h1>
            </Link>
            <div className="px-5 flex space-x-2 items-center">
                <ThemeToggler/>
                <UserButton afterSignOutUrl="/"/>
                <SignedOut>
                    <SignInButton forceRedirectUrl="/dashboard" mode="modal"/>
                </SignedOut>
            </div>
        </header>
    );
}

export default Header;