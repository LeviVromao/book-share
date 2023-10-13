import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { SearchIcon, User2 } from "lucide-react";
import styles from '@/styles/Home.module.css'
import Menu from './Menu';
import Search from './Search';
import ProfileCard from './ProfileCard';

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
    const [ profileCardVisible, setProfileCardVisibility ] = useState<boolean>(false)

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
        if(profileCardVisible) {
            const profilePopup = document.querySelector('.profilePopup') as HTMLDivElement
            const profileCard = document.querySelector('.profileCard') as HTMLDivElement
            const profileCardButton = document.querySelector('.profileCardButton') as HTMLButtonElement

            const handleProfileCardVisibility = (e: any) => {
                if(!profileCardButton.contains(e.target) && !profileCard.contains(e.target)){
                    profilePopup.style.display = 'none'
                    setProfileCardVisibility(false)
                }
            }

            document.addEventListener('click', handleProfileCardVisibility)

            return () => {
                document.removeEventListener('click', handleProfileCardVisibility)
            }
        }

    }, [profileCardVisible])

    useEffect(() => {
        if(searchVisible) {
            const search = document.querySelector('.search') as HTMLDivElement
            const searchForm = document.querySelector('.searchForm') as HTMLDivElement
            const searchButton = document.querySelector('.searchButton') as HTMLDivElement
            const handleVisibility = (e: any) => {
                if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
                    search.style.display = 'none'
                    setSearchVisibility(false)
                }
            }
    
            document.addEventListener('click', handleVisibility)
            return () => {
                document.removeEventListener('click', handleVisibility)
            }
        }
    }, [searchVisible])

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

    const openCardProfile = () => {
        const profilePopup = document.querySelector('.profilePopup') as HTMLDivElement
        profilePopup.style.display = 'block'
        setProfileCardVisibility(true)
    }

    const closeCardProfile = () => {
        const profilePopup = document.querySelector('.profilePopup') as HTMLDivElement
        profilePopup.style.display = 'none'
        setProfileCardVisibility(false)
    }

    const openSearch = () => {
        const search = document.querySelector('.search') as HTMLDivElement
        search.style.display = 'block'
        document.body.style.overflow = 'hidden'
        setSearchVisibility(true)
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
                        <button className='profileCardButton border-2 border-white rounded-lg' onClick={openCardProfile}>
                            <User2 className='text-white'/>
                        </button>
                    </div> 
                    <Menu closeMenu={closeMenu} />
                    <Search closeSearch={closeSearch}/>
                    <ProfileCard closeCardProfile={closeCardProfile}/>
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