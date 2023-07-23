"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const handleLoginClick = () => {
  // signIn()
};
const handleLogoutClick = () => {
  // signOut()
};
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const { data, status } = useSession()

  // const user = data?.user

  return (
    <header className="flex h-[64px] items-center bg-white sm:h-[106px]">
      <div className="container mx-auto flex w-full items-center justify-between">
        <div className="flex items-center justify-between m-0 p-0">
          <div className="flex w-2/12 ">
            <Link href="/" className="text-[#FBAB34] font-bold text-3xl flex">
              Coin<span className="text-[#8C8A97] font-bold">Synch</span>
              <Image
                className="mx-3"
                src={"/Union.svg"}
                alt={"union"}
                width={31}
                height={31}
              />
            </Link>
          </div>

          <div className="flex w-auto">
            <Link href="/" className="text-[#5D6670] font-normal text-sm mx-3">
              About us
            </Link>
            <Link href="/" className="text-[#5D6670] font-normal text-sm mx-3">
              Top Cryptos
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>bit R$23,62 +7,082</p>

          <div>
            <button> Sign in</button>
            <button> Sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
};
