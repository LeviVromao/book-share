import Image from "next/image"

interface InterfaceImage {
    desc: string
    path: string
    className?: string
    id?: string
}

export default function ImageComp({ desc, path, className, id}: InterfaceImage) {
    return (
        <Image src={path} alt={desc} className={className} id={id} />
    )
}