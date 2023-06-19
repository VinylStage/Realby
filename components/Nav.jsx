"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders} from 'nex-auth/react'

const Nav = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, settoggleDropdown] = useState(false)

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }
    })

    return (
        <nav className=''> 
            <Link href="/" className=''>
                <Image 
                src=""
                alt=''
                width={30}
                height={30}
                className=''
                />
                <p className='logo_text'>Realby</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {isUserLoggedIn ? (
                    <div className="">
                        <button type='button' onClick={signOut} className=''>로그아웃</button>
                        {/* 드롭다운(온클릭) 추가해서 마이프로필, 마이블로그들을 링크로 */}
                        <Link href="">
                            <Image
                            src=""
                            width={37}
                            height={37}
                            className=''
                            alt=''
                            onClick={() => settoggleDropdown(!toggleDropdown)}
                            />
                        </Link>
                    </div>
                ): (
                    <Link>
                        {providers && 
                        Object.values(providers).map((provider) => (
                        <button
                        type='button'
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className=''>
                            Getting Started
                        </button>
                        ))}
                    </Link>
                )}
            </div>


            {/* Desktop Navigation */}
            <div></div> 
        </nav>

    )
}
