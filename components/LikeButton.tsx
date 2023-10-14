import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

type LikeButtonProps = {
    songId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ songId }) => {
    const [isLiked, setIsLiked] = useState(false)
    const router = useRouter();
    const { supabaseClient } = useSessionContext()
    const { user } = useUser()
    const AuthModal = useAuthModal()

    useEffect(() => {
        if (!user?.id) return

        const fetchData = async () => {
            const { data, error } = await supabaseClient
                .from('liked_songs')
                .select('*')
                .eq('user_id', user.id)
                .eq('song_id', songId)
                .single()

            if (!error && data) {
                setIsLiked(data)
            }

        }

        fetchData()
    }, [songId, supabaseClient, user?.id])


    const handleLike = async () => {
        if (!user) AuthModal.onOpen()

        if (isLiked) {
            const { error } = await supabaseClient
                .from('liked_songs')
                .delete()
                .eq('user_id', user?.id)
                .eq('song_id', songId)

            if (error) {
                toast.error(error.message)

            } else setIsLiked(false)

        } else {
            const { error } = await supabaseClient.from('liked_songs').insert({
                user_id: user?.id,
                song_id: songId,
            })

            if (error) {
                toast.error(error.message)
            } else {
                setIsLiked(true)
                toast.success("Liked!")
            }


        }

        router.refresh()
    }





    const Icon = isLiked ? AiFillHeart : AiOutlineHeart
    return (

        <button onClick={handleLike} className='hover:opacity-75 transition'>
            <Icon color={isLiked ? "#22c55e" : "white"} size={25} />
        </button>

    )
}

export default LikeButton