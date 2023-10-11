"use client";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import { useState, useEffect } from "react";

const ModalProvider = () => {
  const [ismounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!ismounted) null



  return (

    <>
      <AuthModal />
      <UploadModal />
    </>

  )
}

export default ModalProvider