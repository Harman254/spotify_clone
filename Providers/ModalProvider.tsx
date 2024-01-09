"use client";

import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";
import { useState, useEffect } from "react";


interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider = ({ products }: ModalProviderProps) => {
  const [ismounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!ismounted) null



  return (

    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>

  )
}

export default ModalProvider