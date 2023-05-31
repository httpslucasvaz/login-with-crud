'use client'

import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation'
import PrivateRoute from './components/privateRoute'
import { checkIsPublicRoute } from '../functions/check-is-public-route'

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
