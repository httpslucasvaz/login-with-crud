'use client'


import { auth } from '@/firebase/auth/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { Poppins } from 'next/font/google'
import { usePathname, useRouter } from 'next/navigation'
import { APP_ROUTES } from './constants/app-routes'
import { useEffect } from 'react'
import PrivateRoute from './components/privateRoute'
import { checkIsPublicRoute } from './functions/check-is-public-route'

const poppins = Poppins({
    weight: '300',
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const  pathname  = usePathname()
    const isPublicPage = checkIsPublicRoute(pathname!)
    
    return (
        <html lang="pt-BR">
            <body className={poppins.className}>
                <>
                    {isPublicPage && children}
                    {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
                </>

            </body>
        </html>
    )
}
