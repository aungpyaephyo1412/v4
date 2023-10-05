import './globals.css'
import FavPng from "public/fav.png"
import {Analytics} from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
const poppins = Poppins ({
    subsets: ["latin"],
    weight: ["100", "300", "500", "600", "700", "800"],
});
export const metadata = {
    title: 'Typle | developer',
    description: 'Generated by next app',
    icons: [{rel: 'icon', url: FavPng.src}],
}


export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${poppins.className} w-full bg-slate-900`} suppressHydrationWarning={true}>
            {children}
            <Analytics mode={'production'}/>
            </body>
        </html>
    )
}
