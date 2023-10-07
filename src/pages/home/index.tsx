import { parseCookies } from "nookies";
import { NextPageContext } from "next";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <Header pageHome/>
            <Button>Sou um botao</Button>
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