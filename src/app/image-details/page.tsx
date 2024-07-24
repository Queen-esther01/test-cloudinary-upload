"use client"

import { useEffect, useState } from "react";
import { ImageDetailsType } from "../typings/components";
import ImageDetail from "./components/ImageDetail";
import Loader from "../components/ui/Loader";

export default function AllImages() {

    const [images, setImages] = useState([])
    const [loadingPage, setLoadingPage] = useState(false)
    
    useEffect(() => {

        // Update state with new value from localStorage
        const updateValue = () => {
            setImages(JSON.parse(global.localStorage.getItem('CloudinaryImages')!));
        };
    
        // Listen for storage events (from other tabs/windows)
        window.addEventListener('storage', updateValue);
    
        // Listen for manual localStorage updates (in the same tab/window)
        window.addEventListener('localStorageUpdate', updateValue);
    
        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('storage', updateValue);
            window.removeEventListener('localStorageUpdate', updateValue);
        };
    });

    useEffect(() => {
        setLoadingPage(true)
        if(typeof window !== 'undefined'){
            setImages(JSON.parse(localStorage.getItem('CloudinaryImages')!))
        }else{
            setImages([])
        }
        setLoadingPage(false)
    }, [])

    const handleDeleteImage = (imageData:ImageDetailsType) => {
        const allLocalImages = JSON.parse(localStorage.getItem('CloudinaryImages')!)
        let filtered = allLocalImages.filter((image:ImageDetailsType) => image.url !== imageData.url)
        setImages(filtered)
        localStorage.setItem('CloudinaryImages', JSON.stringify(filtered))
    }
    

    return (
        <div className="">
            {
                loadingPage &&
                <div className="mt-10">
                    <Loader/>
                </div>
            }
            {
                !images && <div className="my-32 w-full text-center text-white">No Images Uploaded Yet!</div>
            }
            {
                images &&
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-5 mt-12 md:px-10 md:mb-20 w-full max-w-5xl mx-auto">
                    {
                        images.map((image:ImageDetailsType) => (
                            <ImageDetail handleDeleteImage={handleDeleteImage} key={image.url} image={image}/>
                        ))
                    }
                </div>
            }
        </div>
    );
}