'use client'

import { auth } from '@/firebase/auth/auth'
import { Poppins } from 'next/font/google'
import PrivateRoute from './components/privateRoute'
import { checkIsPublicRoute } from '@/functions/check-is-public-route'
import { usePathname } from 'next/navigation'

const poppins = Poppins({
    weight: '300',
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const isPublicPage = checkIsPublicRoute(pathname!)
    console.log(isPublicPage)

    return (
        <html lang="pt-BR">
            <body className={poppins.className}>

                {isPublicPage && children}
                {!isPublicPage && <PrivateRoute> {children} </PrivateRoute>}

            </body>
        </html>
    )
}
