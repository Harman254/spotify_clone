"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome, HiSearch } from "react-icons/hi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast"
type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const AuthModal = useAuthModal()
  const supabaseClient = useSupabaseClient()
  const { user } = useUser()

  const handleLogOut = async () => {
    const { error } = await supabaseClient.auth.signOut()

    //! reset any playing songs
    if(error) {
       toast.error(error.message)
    } else {
      toast.success("Logged out successfully")
    } 

    router.refresh()

  };

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-900 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-centter justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight size={35} />
          </button>
        </div>
        <div className="flex md:hidden items-center gap-x-2">
          <button className="flex rounded-full bg-white p-2 justify-center items-center hover:opacity-75 transition  ">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="flex rounded-full bg-white p-2 justify-center items-center hover:opacity-75 transition  ">
            <HiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4 ">
        { user ? ( 
          <div className="flex gap-x-4 items-center"> 
          <Button className="bg-white px-6 py-2" onClick={handleLogOut}>
            Logout
          </Button>
          <Button onClick={() => router.push("/account")} className="bg-white">
            <FaUserAlt />
          </Button>
          </div>
        ): (
          <>

          <div>
            <Button onClick={AuthModal.onOpen} className=" bg-transparent text-neutral-300 font-medium">
              Sign up
            </Button>
          </div>
          <div>
            <Button onClick={AuthModal.onOpen} className=" bg-white px-6 py-2">
              Login
            </Button>
          </div>


        </>
        )}

        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
