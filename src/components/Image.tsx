interface InterfaceImage {
    desc: string
    path: string
    className?: string
    id?: string
}

export default function Image({ desc, path, className, id}: InterfaceImage) {
    return (
        <img src={path} alt={desc} className={className} id={id} />
    )
}