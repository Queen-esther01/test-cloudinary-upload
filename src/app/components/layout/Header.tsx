"use client"
import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import UploadImageModal from "../../image-details/components/UploadImageModal";
import { usePathname } from "next/navigation";

const Header = () => {

    const [showUploadModal, setShowUploadModal] = useState(false)

    const pathname = usePathname()

    return (
        <>
            { showUploadModal && <UploadImageModal open={showUploadModal} onClose={() => setShowUploadModal(false)}/>}
            <header className='py-10 md:py-5 bg-[#1e293b] sticky top-0 w-full'>
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row md:flex-between gap-10 justify-between px-5 md:px-10 items-center">
                    <Link href='/'>
                        <h1 className="">Cloudinary Upload App</h1>
                    </Link>
                    {
                        pathname !== '/' && <Button onClick={() => setShowUploadModal(true)}  outline={true}>Upload Image</Button>
                    }
                    {
                        pathname === '/' &&
                        <a
                            href="/image-details/"
                            className="text-white rounded-lg border-2 border-divider px-5 py-4 hover:bg-white hover:text-darkGray duration-150 hover:ease-in"
                            target="_blank"
                            rel="noopener noreferrer"
                        > View Images </a>
                    }
                </div>
            </header>
        </>
    );
}

export default Header;