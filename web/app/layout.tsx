import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
title: 'CBLZ Landing Page Builder',
description:
'Buat landing page profesional dalam hitungan detik via WhatsApp, Telegram, atau Web',
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return ( <html lang="id"> <body>{children}</body> </html>
)
}
