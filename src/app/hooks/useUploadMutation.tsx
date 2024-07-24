import { useMutation } from "@tanstack/react-query"
import { uploadImage } from "../api/Upload"
import toast from "react-hot-toast"

export const useUploadMutation = (callback: () => void) => {

    const uploadImageMutation = useMutation({
        mutationFn: (formData:FormData) => uploadImage(formData),
        onError: (error) => {
            toast.error(error as unknown as string);
        },
        onSuccess: (data) => {
            callback()
            const localImages = JSON.parse(localStorage.getItem('CloudinaryImages')!)
            if(!localImages){
                localStorage.setItem('CloudinaryImages', JSON.stringify([data]))
            }
            else{
                const temp = [
                    ...localImages,
                    data
                ]
                localStorage.setItem('CloudinaryImages', JSON.stringify(temp))
            }
            const event = new Event('localStorageUpdate');
            window.dispatchEvent(event);
            toast.success("Image successfully uploaded");
        },
    })

    return uploadImageMutation
}