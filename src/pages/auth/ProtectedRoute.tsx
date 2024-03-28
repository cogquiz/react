import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const ProtectedRoute = ({ children }: any) => {
    const router = useRouter()

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("authToken")
        const fetchRole: any = localStorage.getItem("userDetail") != null ? JSON.parse(localStorage.getItem("userDetail") || "") : null
        const isAuthRoute = router.pathname.startsWith('/auth')
        if (!isAuthenticated && !isAuthRoute) {
            const currentPath = router.pathname
            if (currentPath !== "/") {
                router.push('/auth/login')
            }
        }
        if (router.pathname == '/admin' && fetchRole?.role !== "Admin") {
            router.push('/')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>{children}</>
    )
}

export default ProtectedRoute