import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from '../../../lib/prisma';
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

const googlebId = process.env.GOOGLE_ID;
const googelSecret = process.env.GOOGLE_SECRET;


if (!githubId || !githubSecret || !googlebId || !googelSecret) {
    throw new Error ('Missing Google ID or Google Secret and Github ID or Github Secret')
}
export const authConfig = {
    providers : [
        GithubProvider({
            clientId: githubId,
            clientSecret: githubSecret,
        }),
        GoogleProvider({
            clientId: googlebId,
            clientSecret: googelSecret,
        }),
    ],
    adapter : PrismaAdapter(prisma),

} as NextAuthOptions

export default NextAuth(authConfig)