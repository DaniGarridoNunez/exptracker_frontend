import { cookies } from "next/headers";

export default function getToken() {
    const token = cookies().get('EXPTRACKER_TOKEN')?.value
    return token
}