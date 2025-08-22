export const ENV = {
  isDev: process.env.NODE_ENV === "development",
  apiUrl: process.env.NEXT_PUBLIC_API_URL!,
  authUrl: process.env.NEXT_PUBLIC_AUTH_URL!,
  googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
  googleClientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
  githubClientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
  githubClientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET!,
};
