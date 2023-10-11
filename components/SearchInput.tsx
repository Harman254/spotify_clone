"use client"
import qs from "query-string"
import useDebounce from '@/hooks/useDebounce'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState, useEffect } from 'react'
import Input from "./Input"

type SearchInputProps = {}

const SearchInput: React.FC<SearchInputProps> = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 500)

useEffect(() => {
    const query = {
        title: debouncedValue
    }

    const Url = qs.stringifyUrl({
        url: "/search",
        query: query,
    })

    router.push(Url)
  
}, [debouncedValue, router])


  return (
    <Input placeholder="what do you want to listen to?"  value={value} onChange={(e) => setValue(e.target.value)}/>
  )
}

export default SearchInput