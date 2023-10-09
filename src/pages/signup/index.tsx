import Header from '../../components/Header'
import Text from '../../components/Text'
import { useEffect, useState } from "react"
import styles from '@/styles/Signup.module.css'
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies'
import Head from 'next/head'

export default function SignUp() {
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPass ] = useState<string>('')
    const [ username, setUsername ] = useState<string>('')
    const [ error, setError ] = useState<string>('')
    const router = useRouter()

    const validateUser = async ( e: any ) => {
        e.preventDefault()
        let res
        let data
        if(email || password || username) {
            res = await fetch('https://server-node-ten.vercel.app/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({email, password, name: username})
            })
    
            res.status !== 202? data = await res.json(): ''

            if(res.status === 400) {
                setError(data.message)
            } else if(res.status === 201) {
                setCookie(undefined, 'authToken', data.token, {
                    maxAge: 60 * 60 * 1 // 1 hour access
                })
                router.push('/home')
            }

            if(email && res.status === 202) {
                const input_email = document.querySelector('.input_email') as HTMLInputElement
                input_email.readOnly = true
                input_email.style.background = '#0C162D'
                const button_password = document.querySelector('.button_password') as HTMLDivElement
                button_password.style.display = 'flex'
                const button_continue = document.querySelector('.button_continue1') as HTMLButtonElement
                button_continue.style.visibility = 'hidden'
            } 
            
            if(password && res.status === 202) {
                const input_password = document.querySelector('.input_password') as HTMLInputElement
                input_password.readOnly = true
                input_password.style.background = '#0C162D'
                const button_continue = document.querySelector('.button_continue2') as HTMLButtonElement
                button_continue.style.visibility = 'hidden'
                const button_username = document.querySelector('.button_username') as HTMLDivElement
                button_username.style.display = 'flex'
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(`.${styles.title}`)?.classList.add(`${styles.show_text}`)
            document.querySelector(`.${styles.title}`)?.classList.remove(`${styles.title}`)
            document.querySelector(`.${styles.subtitle}`)?.classList.add(`${styles.show_subtitle}`)
            document.querySelector(`.${styles.subtitle}`)?.classList.remove(`${styles.subtitle}`)
            const button_email = document.querySelector('.button_email') as HTMLDivElement
            button_email.style.display = 'flex'
        }, 3000)    
    }, [])

    setTimeout(() => {
        error? setError(''): ''
    }, 3000)

    return (
        <div className='bg-[#011627] h-[100vh] text-white'>
        <Head>
            <title>Register - book share</title>
        </Head>
        <Header pageLog justify_between='justify-between'/>
        <div className='flex h-[90%] items-center justify-center'>
            <form  onSubmit={validateUser} className='flex flex-col gap-8 bg-[#0C162D] rounded-lg w-[80%] max-w-2xl p-3'>
                <div className='flex flex-col'> 
                    {error ? <i  className='self-center text-red-700 select-none lowercase'>{error}</i>: ''}
                    <Text elem='p' className={`${styles.title} select-none text-[#8193b2]`}>
                        Bem-vindo(a) ao Book-Share!
                    </Text>
                    <Text elem='p' className={`${styles.subtitle} select-none text-[#8193b2]`}>
                        Vamos começar a exploração.
                    </Text>
                </div>

                <div className='hidden select-none flex gap-3 button_email'>
                    <div className='flex flex-col w-[88%]'>
                        <label htmlFor="email" className='text-[#00cfc8] font-semibold font-mono'>Insira seu email*</label>
                        <div>
                            <i className='text-[#ea4aaa] text-lg'>→</i>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="pl-0.5 w-[96%] outline-0 pl-1.5 input_email border-1 relative border-solid border-[#8193b2] bg-[#0C162D]" name="email" id='email'/>
                        </div>
                    </div>
                    <button type='submit' onFocus={validateUser} className='border-2 border-solid border-[#627597] p-0.5 rounded-lg text-4 h-[1.75rem] self-end text-sm button_continue1'>Continue</button>
                </div>

                <div className='hidden select-none flex gap-3 button_password'>
                    <div className='flex flex-col w-[88%]'>
                        <label htmlFor="pass" className='text-[#00cfc8] font-semibold font-mono'>Criar uma senha*</label>
                        <div>
                            <i className='text-[#ea4aaa] text-lg'>→</i>
                            <input type="password" value={password} onChange={e => setPass(e.target.value)} className="pl-0.5 w-[96%] outline-0 pl-1.5 input_password border-1 relative border-solid border-[#8193b2] bg-[#0C162D]" name="password" id='pass'/>
                        </div>
                    </div>
                    <button type='submit' className='border-2 border-solid border-[#627597] p-0.5 rounded-lg text-4 h-[1.75rem] self-end text-sm button_continue2'>Continue</button>
                </div>

                <div className='hidden select-none flex gap-3 button_username'>
                    <div className='flex flex-col w-[88%]'>
                        <label htmlFor="username" className='text-[#00cfc8] font-semibold font-mono'>Insira um username*</label>
                        <div>
                            <i className='text-[#ea4aaa] text-lg'>→</i>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="pl-0.5 w-[96%] outline-0 pl-1.5 input_username border-1 relative border-solid border-[#8193b2] bg-[#0C162D]" name="username" id='username'/>
                        </div>
                    </div>
                    <button type='submit' className='border-2 border-solid border-[#627597] p-0.5 rounded-lg text-4 h-[1.75rem] self-end text-sm button_continue3'>Continue</button>
                </div>
            </form>
        </div>
        </div>
    )
}

