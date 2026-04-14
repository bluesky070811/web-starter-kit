import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "조회 스타터 킷",
    description: "간단한 조회용 Next.js 스타터 킷",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
