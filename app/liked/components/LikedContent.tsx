"use client"
import LikeButton from '@/components/LikeButton'
import MediaItem from '@/components/MediaItem'
import useOnPlay from '@/hooks/useOnPlay'
import { useUser } from '@/hooks/useUser'
import { Song } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type LikedContentProps = {
    songs: Song[]
}

const LikedContent: React.FC<LikedContentProps> = ({ songs}) => {

    const { isLoading, user} = useUser()
    const router = useRouter()
    const onPlay = useOnPlay(songs)

    useEffect(() => {
        if(!isLoading && !user) {
            router.replace("/")
        }

    }, [isLoading, router, user])


    if(songs.length === 0) {
        return <div className='flex flex-col gap-y-2 w-full px-4 text-neutral-400'>
            No Liked Songs
        </div>
    }
  return (
    <div className='flex flex-col gap-y-2 w-full p-6'>
        { songs.map((song: Song) => (
            <div key={song.id} className='flex items-center gap-x-4 w-full'>
                <div className='flex-1'>
                    <MediaItem song={song} onClick={(id:string) => onPlay(id)} />
                </div>
                <LikeButton songId={song.id} />
            </div>
        ))}
    </div>
  )
}

export default LikedContent