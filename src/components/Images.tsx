import Image from "next/image"

type IScrollImages = {
    images: Array<string>
    count?: boolean
    className?: string
    id?: string
}

export default function ScrollImages({ images, count, className , id}: IScrollImages ) {
    const threeImages = images.slice(0, 3)
    return (
        count? (
            threeImages.map((path, i) => (
                <Image src={path} className={className} key={i} alt="A cover image of a book" id={id}/>
            ))
        ): ( 
            images.map((path, i) => (
                <Image src={path} className={className} key={i} alt="A cover image of a book" id={id}/>
            ))
        )
    )  
}