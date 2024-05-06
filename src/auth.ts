import NextAuth from "next-auth"


export const { handlers, signIn, signOut, auth } = NextAuth({
  //! adapter for mongoose should be added here
  //? npm i @next-auth/mongodb-adapter
  providers: []
})