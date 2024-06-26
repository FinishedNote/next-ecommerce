"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavIcons = () => {
    const [isProfileOpen, SetIsProfileOpen] = useState(false);
    const [isCartOpen, SetIsCartOpen] = useState(false);

    const router = useRouter();
    const isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login")
        }
        SetIsProfileOpen((prev) => !prev)
    }

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image src="/profile.png" alt="" width={22} height={22} className="cursor-pointer" onClick={handleProfile}/>
            {isProfileOpen && 
            <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-md z-20">
                <Link href="/">Profile</Link>
                <div className="mt-2 cursor-pointer">Logout</div>
            </div>
            }
            <Image src="/notification.png" alt="" width={22} height={22} className="cursor-pointer"/>
            <Image src="/cart.png" alt="" width={22} height={22} className="cursor-pointer" onClick={() => SetIsCartOpen((prev) => !prev)}/>
            {/* {isCartOpen && ()} */}
        </div>
    );
};

export default NavIcons;