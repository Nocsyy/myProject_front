'use client'

import BattleNet from "next-auth/providers/battlenet"
import { signIn } from "next-auth/react"

export const LoginButton = () => {
    return (
        <button onClick={async() => await signIn() } className="btn btn-primary">Login</button>
    )
}