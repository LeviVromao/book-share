import { parseCookies } from "nookies";
import { NextPageContext } from "next";
import Header from "@/components/Header";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <Header pageHome/>
            <Button>Sou um botao</Button>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
            <Image src="/library_img_site.jpg" alt="a selfie takes by the owner of this web site" height={500} width={500}/>
        </div>
    )
}

export function getServerSideProps(ctx: NextPageContext) {
    const {'authToken': token} = parseCookies(ctx)

    if(!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }


    return {
        props: {}
    }
}