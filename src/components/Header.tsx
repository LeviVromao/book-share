import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { HomeIcon, XIcon, SearchIcon, User2, Book } from "lucide-react";
import styles from '@/styles/Home.module.css'

interface IHeader {
    id?: string
    pageLog?: boolean
    pageHome?: boolean
    justify_between?: string
    receiveData?: (key: String) => void
}

export default function Header({ id, pageLog, pageHome, justify_between, receiveData }: IHeader) {
    const [ menuVisibility, setMenuVisibility ] = useState<boolean>(false)
    const [ searchVisible, setSearchVisibility ] = useState<boolean>(false)

    useEffect(() => {
        const handleKeypressed = (e: any) => {
            if(e.key === '/' && pageHome) {
                openSearch()
            }
        }

        document.addEventListener('keypress', handleKeypressed)

        return () => {
            document.removeEventListener('keypress', handleKeypressed)
        }
    }, [])

    useEffect(() => {
        if(searchVisible) {
            const search = document.querySelector('.search') as HTMLDivElement
            const searchForm = document.querySelector('.searchForm') as HTMLDivElement
            const searchButton = document.querySelector('.searchButton') as HTMLDivElement
            const handleVisibility = (e: any) => {
                if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
                    setSearchVisibility(false)
                    search.style.display = 'none'
                }
            }
    
            document.addEventListener('click', handleVisibility)
            return () => {
                document.removeEventListener('click', handleVisibility)
            }
        }
    }, [])

    useEffect(() => {
        if(menuVisibility) {
            const menu = document.querySelector('.menu') as HTMLDivElement
            const menuButton = document.querySelector('.menuButton') as HTMLDivElement
            const menuBackground = document.querySelector('.menu_background') as HTMLDivElement
            const closeMenuByClick = (e: any) => {
                if(!menuButton.contains(e.target) && !menu.contains(e.target)) {
                    setMenuVisibility(false)
                    menuBackground.style.display = 'none'       
                }
            }
            
            document.addEventListener('click', closeMenuByClick)
    
            return () => {
                document.removeEventListener('click', closeMenuByClick)
            }
        }
    }, [menuVisibility])

    const openSearch = () => {
        const search = document.querySelector('.search') as HTMLDivElement
        if(!searchVisible) {
            search.style.display = 'block'
            document.body.style.overflow = 'hidden'
            setSearchVisibility(true)
        }

    }

    const closeSearch = () => {
        const search = document.querySelector('.search') as HTMLDivElement
        if(searchVisible) {
            search.style.display = 'none'
            document.body.style.overflow = 'auto'
            setSearchVisibility(false)
        }
    }

    const openMenu = () => {
        const menu = document.querySelector('.menu') as HTMLDivElement
        const menuBackground = document.querySelector('.menu_background') as HTMLDivElement
        if(!menuVisibility) {
            setMenuVisibility(true)
            document.body.style.overflow = 'hidden'
            menuBackground.style.display = 'block'
            menu.classList.add(`${styles.appearMenu}`)
        } else {
            setMenuVisibility(false)
        }
    }

    const closeMenu = () => {
        const menu = document.querySelector('.menu') as HTMLDivElement
        const menuBackground = document.querySelector('.menu_background') as HTMLDivElement
        if(menuVisibility) {
            setMenuVisibility(false)
            document.body.style.overflow = 'auto'
            menuBackground.style.display = 'none'
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
                        <div onClick={openMenu} className='flex menuButton flex-col items-center justify-center gap-[0.14rem] h-[33px] w-[33px] rounded border-solid border border-[#7a828e] cursor-pointer hover:border-[#bdc4cc]'>
                            <div className='w-[58%] h-[2px] bg-white rounded-lg'></div>
                            <div className='w-[58%] h-[2px] bg-white rounded-lg'></div>
                            <div className='w-[58%] h-[2px] bg-white rounded-lg'></div>
                        </div>
                        <Link href="/" className='flex items-center gap-2.5'>
                            <Image src="/icon_book.png" className='w-[50px]' alt="Um livro que é o logo da página" width={50} height={50}/>
                            <p className='text-orange text-lg select-none'>BookShare</p>
                        </Link>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='searchButton flex items-center rounded-md p-0.5 border-[#7a828e] border gap-[0.4rem] w-[219px] cursor-pointer' onClick={openSearch}>
                            <SearchIcon className='text-white w-[17px]'/>
                            <p className='text-white text-sm space-x-[2px] leading-tight '>Clique  <span className='inline-grid w-[12px] vertical-middle border-white border'>/</span>  para procurar</p>
                        </div>  
                        <Link href="/profile" className='border-2 border-white rounded-lg'>
                            <User2 className='text-white'/>
                        </Link>
                    </div>  
                    <div className='hidden absolute w-[100%] h-[100vh] left-0 top-0 backdrop-contrast-50 menu_background'>
                        <div className='relative'>
                            <div className='absolute left-0 top-0 p-4 w-[320px] h-[100vh] bg-[#272b33] text-white rounded-tr-3xl ${styles.hiddeMenu} rounded-br-3xl menu'>
                                <div className='flex justify-between'>
                                    <Link href="/" className='flex items-center gap-0.5'> 
                                        <Image src="/icon_book.png" alt='a colored book' height={30} width={30} />
                                        <p className='text-orange'>Book Share</p>                                    
                                    </Link>
                                    <Link href="/home">    
                                        <div onClick={closeMenu} className='flex items-center h-[24px] w-[24px] self-center cursor-pointer rounded hover:bg-[#525964]'>
                                            <XIcon className='h-[18px]'/>
                                        </div>
                                    </Link>
                                </div>
                                <div className='pt-1.5 pr-1.5 pb-1.5'>
                                    <button className='flex gap-0.5 w-[100%] p-1.5 hover:border-[1px] border-[#525964] rounded-sm'>
                                        <HomeIcon className='h-[18px]'/>
                                        <p className='text-sm'>Home</p>
                                    </button>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className='search hidden absolute backdrop-contrast-50 h-[100vh] w-[100%] top-0 left-0'>
                        <div className='searchForm border-2 border-[#808893] h-[70vh] rounded-bl-[43px] rounded-br-[43px] bg-[#0a0c10] p-3'>
                            <div className='relative'>
                                <input type='search' className={`flex justify-between w-[100%] h-[39px] ${styles.search} border-2 border-[#808893] pl-[36px] rounded-md bg-[#0a0c10] text-white`} placeholder='Procure aqui um livro.'/>
                                <SearchIcon className='absolute top-[9px] left-[15px] text-white w-[16px]'/>
                                <button onClick={closeSearch} className='inline-grid justify-center items-center absolute w-[25px] h-[23px] top-[9px] right-[15px] hover:bg-[#525964]'>
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-x-circle-fill fill-white Button-visual">
    <                               path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path></svg>
                                </button>
                                <div className='overflow-y-auto'>
                                    <p className='text-white text-sm my-2.5'>Repositories</p>
                                    <Link href="/" className='flex justify-between items-center h-[34px] text-white hover:bg-[#525964] border-[#808893] border rounded-md p-0.5'>
                                        <div className='flex gap-[5px] items-center'>
                                            <Book className='text-white w-[16px]'/>
                                            <p className='text-[14px]'>LeviVromao/AliceNoPaisDasMaravilhas</p>
                                        </div>
                                        <p>Ir para...</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
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