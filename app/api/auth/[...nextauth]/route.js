// https://next-auth.js.org/configuration/initialization#route-handlers-app
// Route Handlers (app/)

// (참고) Route Handlers (app/) vs API Routes (pages)
// https://next-auth.js.org/getting-started/example#add-api-route
// https://next-auth.js.org/configuration/initialization#simple-initialization
// API Routes (pages)

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import GitHubProvider from "next-auth/providers/github";

console.log({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    clientId: process.env.KAKAO_CLIENT_ID,
    clientSecret: process.env.KAKAO_SECRET,
    clientId: process.env.NAVER_CLIENT_ID,
    clientSecret: process.env.NAVER_SECRET,
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
})

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_SECRET,
        }),
        NaverProvider({
            clientId: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session;
        },
        async signIn({ profile }) {
            try {
    
            } catch (error) {
                
            }
        }
    }
    
})

export { handler as GET, handler as POST }



// export default NextAuth({
//     // Configure one or more authentication providers
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         }),
//         KakaoProvider({
//             clientId: process.env.KAKAO_CLIENT_ID,
//             clientSecret: process.env.KAKAO_SECRET,
//         }),
//         NaverProvider({
//           clientId: process.env.NAVER_CLIENT_ID,
//           clientSecret: process.env.NAVER_SECRET,
//         }),
//         GitHubProvider({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET
//         }),
//     ],
//     callbacks: {
//         async jwt({ token, account }) {
//             // Persist the OAuth access_token to the token right after signin
//             if (account) {
//                 token.accessToken = account.access_token
//             }
//             return token
//         },
//         async session({ session, token, user }) {
//             // Send properties to the client, like an access_token from a provider.
//             session.accessToken = token.accessToken
//             return session
//         }
//     }
// })
