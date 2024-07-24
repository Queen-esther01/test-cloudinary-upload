"use client"

import { useEffect, useState } from "react";
import { ImageDetailsType } from "../typings/components";
import ImageDetail from "./components/ImageDetail";

export default function AllImages() {

    const [images, setImages] = useState([])
    
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
        if(typeof window !== 'undefined'){
            setImages(JSON.parse(localStorage.getItem('CloudinaryImages')!))
        }else{
            setImages([])
        }
    }, [])
    

    return (
        <div className="">
             {
                !images && <div className="my-32 w-full text-center text-white">No Images Uploaded Yet!</div>
            }
            {
                images &&
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-5 mt-12 md:px-10 w-full max-w-5xl mx-auto">
                    {
                        images.map((image:ImageDetailsType) => (
                            <ImageDetail key={image.url} image={image}/>
                        ))
                    }
                </div>
            }
        </div>
    );
}