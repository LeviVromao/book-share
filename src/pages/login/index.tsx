import Text from "@/components/Text"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { setCookie } from "nookies"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

export default function Login() {
    const [ login, setLogin ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ error, setError ] = useState<string>('')
    const router = useRouter()
    
    const authorizeUser = async (e: any) => {
        e.preventDefault()
        let res
        let data
        if(login && password) {
            res = await fetch('http://localhost:3100/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({login, password})
            })

            res.status? data = await res?.json(): ''

            if(res.status === 404) {
                setError(data.message)
            } else if(res.status === 200) {
                setCookie(undefined, 'authToken', data.token, {
                    maxAge: 60 * 60 * 1 // 1 hora de acesso.
                })
                router.push('/home')
            }
        }
    }

    setTimeout(() => {
        if(error) setError('')
    }, 3000)

    return (
        <div className="h-[100vh] pt-7 bg-blueOcean">
            <Head>
                <title>Login - book share</title>
            </Head>
            <div className="flex flex-col items-center mb-7">
                <Link href="/" className="w-fit block">
                    <Image src="/icon_book.png" alt="A book used by logo" />
                </Link>
                <Text elem="h1" className="text-xl text-[#fff]">Faça login no Book-share</Text>
            </div>
            <div className="flex flex-col items-center justify-center h-[60%]">
                {error? <i className="self-center text-red-700 select-none lowercase">{error}</i>: ''}
                <form onSubmit={authorizeUser} className="flex flex-col mb-4 items-center justify-center gap-3 pl-3 pr-3 bg-[#0C162D] w-[277px] h-[259px] rounded border-2 border-[#627597] sm:w-[340px]">
                    <div className="flex flex-col gap-3 w-[94%]">
                        <label htmlFor="username_or_address" className="text-[#8193b2]">
                            Username ou endereço de email
                        </label>
                        <input 
                            type="text" 
                            name="login" 
                            id="username_or_address"
                            onChange={e => setLogin(e.target.value)}
                            className="rounded border-2 border-[#d0d7de] pl-2 "
                        />
                    </div>
                    <div className="flex flex-col w-[94%] gap-3">
                        <div className="flex justify-between">
                            <label 
                                htmlFor="password"
                                className="text-[#8193b2]"
                            >
                                Senha
                            </label>
                            <Link href="/forgotpass">
                                <Text elem="p" className="text-blue-500">Esqueceu a senha?</Text>
                            </Link>
                        </div>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={e => setPassword(e.target.value)}
                            className="rounded border-2 border-[#d0d7de] pl-2"
                        />
                    </div>
                    <button type="submit" className="bg-[#1f883d] text-[#fff] w-[94%] pointer p-1 rounded hover:bg-[#216e39]">Entrar</button>
                </form>
                <div className="border-2 border-[#627597] pl-7 pr-7 rounded pt-4 pb-4 w-[277px] sm:w-[340px]">
                    <div className="flex items-center justify-center gap-2">
                        <Text 
                            elem="p" 
                            className="text-sm text-[#8193b2]"
                        >
                            Novo(a) no Book-Share?
                        </Text>
                        <Link href="/signup" className="text-sm text-blue-600">
                            Criar uma conta
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}