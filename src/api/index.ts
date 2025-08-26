import { createFetch } from "@better-fetch/fetch";
import { cookies } from "next/headers";
const API_BASE_URL = 
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
const cookie = await cookies()
const token = cookie.get("token")?.value ?? ""

export const $HttpClient = createFetch({
    baseURL: API_BASE_URL,
    auth: {
        type: "Bearer",
        token: token ,
  },
})