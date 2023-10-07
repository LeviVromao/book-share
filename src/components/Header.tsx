import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface IHeader {
    id?: string
    pageLog?: boolean
    pageHome?: boolean
    justify_between?: string
}

export default function Header({ id, pageLog, pageHome, justify_between }: IHeader) {
    return (
        <main className={`flex items-center ${justify_between} px-6 bg-blueOcean`} id={id}>
            {pageLog ? (
            <>
                <Link href="/" className='flex items-center gap-2.5'>
                    <Image src="/icon_book.png" className='w-[50px]' alt="Um livro que é o logo da página" />
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
                        <div className='flex flex-col items-center justify-center gap-[0.14rem] h-[33px] w-[33px] rounded border-solid border border-[#7a828e] cursor-pointer hover:border-[#bdc4cc]'>
                            <div className='w-[58%] h-[2px] bg-white rounded-lg'></div>
                            <div className='w-[58%] h-[2px] bg-white rounded-lg'></div>
                            <div className='w-[58%] h-[2px] bg-white rounded-lg'></div>
                        </div>
                        <Link href="/" className='flex items-center gap-2.5'>
                            <Image src="/icon_book.png" className='w-[50px]' alt="Um livro que é o logo da página" />
                            <p className='text-orange text-lg select-none'>BookShare</p>
                        </Link>
                    </div>
                </>
            ): 
            (
            <>
                <Link href="/" className='flex items-center gap-2.5'>
                    <Image src="/icon_book.png" className='w-[50px]' alt="Um livro que é o logo da página" />
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