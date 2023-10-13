import styles from "@/styles/Home.module.css"
import { SearchIcon, Book } from "lucide-react"
import Link from "next/link"

interface ISearch {
    closeSearch?: () => void
}

export default function Search({ closeSearch }: ISearch) {
    return (
        <div className='search hidden absolute backdrop-contrast-50 h-[100vh] w-[100%] top-0 left-0'>
            <div className='searchForm border-2 border-[#808893] h-[70vh] rounded-bl-[43px] rounded-br-[43px] bg-[#0a0c10] p-3'>
                <div className='relative'>
                    <input type='search' className={`flex justify-between w-[100%] h-[39px] ${styles.search} border-2 border-[#808893] pl-[36px] rounded-md bg-[#0a0c10] text-white`} placeholder='Procure aqui um livro.'/>
                    <SearchIcon className='absolute top-[9px] left-[15px] text-white w-[16px]'/>
                    <button onClick={closeSearch} className='inline-grid justify-center items-center absolute w-[25px] h-[23px] top-[9px] right-[15px] hover:bg-[#525964]'>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-x-circle-fill fill-white Button-visual">
                        <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path></svg>
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
    )
}