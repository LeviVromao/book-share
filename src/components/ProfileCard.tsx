import { User2, XIcon, UserCircle, Book } from "lucide-react"
import Link from "next/link"

interface IProfileCard {
    closeCardProfile?: () => void
}

export default function ProfileCard({closeCardProfile}: IProfileCard) {
    return (
        <div className="profilePopup hidden absolute top-0 left-0 h-[100vh] w-[100%] backdrop-contrast-50">
            <div className="profileCard bg-[#272b33] border border-[#525964] rounded-tl-[19px] rounded-bl-[19px] h-[100vh] w-[324px] p-[12px] float-right">
                <div className="flex text-white justify-between border-b-2 border-b-[#525964] pb-[25px]">
                    <div className="flex gap-[4px]">  
                        <UserCircle />
                        <p>Levi</p>
                    </div>
                    <button className="cardProfileClose hover:bg-[#525964]">
                        <XIcon className="h-[18px]" onClick={closeCardProfile}/>
                    </button>
                </div>
                <div className="pl-[6px] py-[13px] border-b-2 border-b-[#525964]">
                    <Link href="/profile" className="flex items-center gap-[4px] w-[100%] rounded p-[3px] text-white hover:border border-[#525964]">
                        <User2 className="h-[17px]"/>
                        <p className="text-sm">Seu perfil</p>
                    </Link>
                </div>
                <div className="pl-[6px] py-[9px]">
                    <Link href="/repositoriy" className="flex items-center gap-[4px] text-white hover:border-[#525964]">
                        <Book className="h-[17px]"/>
                        <p className="text-sm">Seu repositório</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}