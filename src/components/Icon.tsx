import LeftArrowSVG from '../../public/iconmonstr-caret-left-circle-filled.svg'
import RightArrowSVG  from '../../public/iconmonstr-caret-right-circle-filled.svg'

type IconsInterface = {
    left?: boolean
    right?: boolean
    className?: string
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined

}

export default function Icons({left, className}: IconsInterface) {
    return (
        left? 
          <LeftArrowSVG fill='white' height={64} width={64} className={className} />
        :
          <RightArrowSVG fill='white' height={64} width={64} className={className} />
    )
}