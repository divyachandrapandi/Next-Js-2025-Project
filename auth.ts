import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

console.log("----------hello")
const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub],
});

console.log("----hello 2")
console.log(auth)

export {
    handlers, signIn, signOut, auth
}