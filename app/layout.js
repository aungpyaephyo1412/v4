import './globals.css'
import {Analytics} from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google'
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})
export const metadata = {
    metadataBase: new URL('https://aungpyaephyoe.vercel.app'),
    title: {
        default: 'Aung Pyae Phyo',
        template: '%s | Aung Pyae Phyo',
    },
    icons :[{ rel: 'icon', url: "/fav.png" }],
    description: 'Experienced Frontend developer',
    openGraph: {
        title: 'Aung Pyae Phyo',
        description: 'Experienced Frontend developer',
        url: 'https://aungpyaephyoe.vercel.app',
        siteName: 'Aung Pyae Phyo',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: 'Aung Pyae Phyo',
        card: 'summary_large_image',
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${inter.className} w-full bg-slate-950`} suppressHydrationWarning>
            {children}
            <Analytics mode={'production'}/>
            <SpeedInsights />
            </body>
        </html>
    )
}
