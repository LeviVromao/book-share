import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { HomeIcon, XIcon } from "lucide-react";

interface IHeader {
    id?: string
    pageLog?: boolean
    pageHome?: boolean
    justify_between?: string
}

export default function Header({ id, pageLog, pageHome, justify_between }: IHeader) {
    const [ open, setOpen ] = useState<boolean>(false)

    const openMenu = () => {
        if(!open) {
            setOpen(true)
            document.body.style.overflow = 'hidden'
        } else {
            setOpen(false)
        }
    }

    const closeMenu = () => {
        if(open) {
            setOpen(false)
            document.body.style.overflow = 'auto'
        }
    }
    return (
        <main className={`flex items-center ${justify_between} px-6 bg-blueOcean relative`} id={id}>
            {pageLog ? (
            <>
                <Link href="/" className='flex items-center gap-2.5'>
                    <Image src="/icon_book.png" className='w-[50px]' alt="Um livro que é o logo da página" width={50} height={50}/>
                    <p className='text-orange text-lg select-none'>BookShare</p>
                </Link>                
                <div className='text-white flex gap-2 items-center'>
                    <p className='select-none'>Já tem uma conta?</p>
                    <Link href="/login" className='bg-white text-black p-2 cursor-pointer rounded-lg hover:text-white hover:bg-green select-none'>
                        Sign in
                    </Link>
                </div>
            </>
            ): pageHome ?
            (
                <>
                    <div className='flex gap-2.5 items-center'>
                        <div onClick={openMenu} className='flex flex-col items-center justify-center gap-[0.14rem] h-[33px] w-[33px] rounded border-solid border border-[#7a828e] cursor-pointer hover:border-[#bdc4cc]'>
                            <div className='w-[58%] h-[2px] bg-white rounded-lg'></div>
                            <div className='w-[58%] h-[2px] bg-white rounded-lg'></div>
                            <div className='w-[58%] h-[2px] bg-white rounded-lg'></div>
                        </div>
                        <Link href="/" className='flex items-center gap-2.5'>
                            <Image src="/icon_book.png" className='w-[50px]' alt="Um livro que é o logo da página" width={50} height={50}/>
                            <p className='text-orange text-lg select-none'>BookShare</p>
                        </Link>
                    </div>
                    {open ? 
                        (
                            <div className='absolute w-[100%] h-[100vh] left-0 top-0 backdrop-contrast-50'>
                                <div className='relative'>
                                    <div className='absolute left-0 top-0 p-4 w-[320px] h-[100vh] bg-[#272b33] text-white rounded-tr-3xl rounded-br-3xl'>
                                        <div className='flex justify-between'>
                                            <Link href="/" className='flex items-center gap-0.5'> 
                                                <Image src="/icon_book.png" alt='a colored book' height={30} width={30} />
                                                <p className='text-orange'>Book Share</p>                                    
                                            </Link>
                                            <div onClick={closeMenu} className='flex items-center h-[24px] w-[24px] self-center cursor-pointer rounded hover:bg-[#525964]'>
                                                <XIcon className='h-[18px]'/>
                                            </div>
                                        </div>
                                        <div className='pt-1.5 pr-1.5 pb-1.5'>
                                            <button className='flex gap-0.5 w-[100%] p-1.5 hover:border-[1px] border-[#808893] rounded-sm'>
                                                <HomeIcon className='h-[18px]'/>
                                                <p className='text-sm'>Home</p>
                                            </button>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        ): 
                        (
                            ''
                        )
                    }
                </>
            ): 
            (
            <>
                <Link href="/" className='flex items-center gap-2.5'>
                    <Image src="/icon_book.png" className='w-[50px]' alt="Um livro que é o logo da página" width={50} height={50}/>
                    <p className='text-orange text-lg select-none'>BookShare</p>
                </Link>
                <div className='flex gap-2 items-center text-white text-base'>
                    <Link href="/login">
                        Sign in
                    </Link>
                    <Link href="/signup" className='bg-green text-base pt-2 pb-2 pl-3 pr-3 rounded hover:bg-greenBush'>
                        SignUp
                    </Link>
                </div>
            </>
            )}
        </main>
    )   
}