"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 45*(60*1000), // 45 mins
			gcTime: 50*(60*1000), // 50 mins
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<QueryClientProvider client={queryClient}>
				<body className={inter.className}>
					<Toaster
						position="top-center"
					/>
					<Header/>
					<main>
						{children}
					</main>
					<Footer/>
				</body>
			</QueryClientProvider>
		</html>
	);
}
