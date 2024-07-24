"use client"

import UploadImageBox from "./components/shared/UploadImageBox";


export default function Home() {
	
	return (
		<main className="w-full max-w-5xl mx-auto flex flex-col items-center justify-between p-10">
			<UploadImageBox/>
		</main>
	);
}
