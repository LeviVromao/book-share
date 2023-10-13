import Image from "next/image"
import Link from "next/link"
import { XIcon, HomeIcon, SearchIcon, Book } from "lucide-react"

interface IMenu {
    closeMenu?: () => void
}

export default function Menu({closeMenu}: IMenu) {
    return (
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
    )
}