import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";

const providers: Provider[] = [];

// Only add Google provider when real credentials are configured
const googleId = process.env.GOOGLE_CLIENT_ID;
const googleSecret = process.env.GOOGLE_CLIENT_SECRET;

if (
  googleId &&
  googleSecret &&
  !googleId.startsWith("your_") &&
  !googleSecret.startsWith("your_")
) {
  providers.push(
    Google({ clientId: googleId, clientSecret: googleSecret })
  );
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  session: { strategy: "jwt" },
  // Use a stable secret even in dev so sessions survive restarts
  secret: process.env.NEXTAUTH_SECRET || "dev-only-fallback-secret-change-me",
});
