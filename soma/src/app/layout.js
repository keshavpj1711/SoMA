"use client"
import { AuthProvider, useAuth } from '../supabase/AuthContext';
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "../app/metadata"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<AuthProvider>
			<html lang="en">
				<head>
					<title>{metadata.title}</title>
					<meta name="description" content={metadata.description} />
				</head>
				<body className={inter.className}>
					{children}
				</body>
			</html>
		</AuthProvider>
	);
}
