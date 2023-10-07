import Image from "next/image"

interface InterfaceImage {
    alt: string
    path: string
    className?: string
    id?: string
}

export default function ImageComp({ alt, path, className, id}: InterfaceImage) {
    return (
        <Image src={path} alt={alt} className={className} id={id} width={300} height={300}/>
    )
}