import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from '@/src/lib/prisma';
import GithubProvider from "next-auth/providers/github"

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId ||!githubSecret) {
    throw new Error ('Missing github ID or SECRET')
}
export const authConfig = {
    providers : [
        GithubProvider({
            clientId: githubId,
            clientSecret: githubSecret,
        }),
    ],
    adapter : PrismaAdapter(prisma),

} as NextAuthOptions

export default NextAuth(authConfig)