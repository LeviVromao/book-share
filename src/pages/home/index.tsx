import { parseCookies } from "nookies";
import React from 'react'
import { NextPageContext } from "next";
import Header from "@/components/Header";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {

    return (
        <div>
            <Header pageHome justify_between="justify-between" />
            
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