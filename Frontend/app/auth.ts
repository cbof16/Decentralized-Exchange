import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import db from '@/app/db'
import {Keypair} from '@solana/web3.js'


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
      }),
],
callbacks: {
    async signIn({ user, account, profile, credentials }) {
        console.log({ user, account, profile, credentials });
      if (account?.provider === 'google') {
        const email = user?.email;
  
        // Ensure the email is available, if not, deny sign-in
        if (!email) {
          return false; // Return false if no email found
        }
  
       // Check if user already exists in the database
        const userDb = await db.user.findFirst({
          where: { username: email }, // Check if email is stored as 'username' in the database
        });
  
        // If user already exists, allow sign-in
        if (userDb) {
          return true;
        }
  
        // If the user doesn't exist, create a new user with Solana wallet
        const keypair = Keypair.generate();
        const publicKey = keypair.publicKey.toBase58();
        const privateKey = keypair.secretKey.toString(); 
  
        
        await db.user.create({
          data: {
            username: email,
            provider: "Google",
            solWallet: {
              create: {
                publicKey: publicKey,
                privateKey: privateKey, 
              },
            },
            inrWallet: {
              create: {
                balance: 0, 
              },
            },
          },
        });
        console.log("User created");
        return true;
      }
      console.log("Sign-in failed");
      return false;
    },
  },  
})