import { useUploadMutation } from "@/app/hooks/useUploadMutation"
import ImageLoader from "@/app/utils/loader"
import Image from "next/image"
import { useState, useRef, ChangeEvent, ForwardedRef } from "react"
import Button from "../ui/Button"
import FileInput from "../form/FileInput"

const UploadImageBox = ({ callback }:{ callback?: () => void }) => {

    const [imageFile, setImageFile] = useState<File | null>(null)
    const [imageSrc, setImageSrc] = useState('')

	const inputRef:ForwardedRef<HTMLInputElement> = useRef(null)

    const uploadFile = () => {
        if(inputRef.current !== null){
            inputRef.current.click()
        }
    }
    
    const onFileSelect = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e?.target?.files.length){
            let file = e.target.files[0]
            setImageFile(e.target.files[0])
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e:any) =>{
                let data = e.target.result
                setImageSrc(data)
            }
        }
    }

	const resetState = () => {
		setImageSrc('')
		setImageFile(null)
        callback && callback()
	}

	const uploadImageMutation = useUploadMutation(resetState)

	const uploadToCloudinary = async () => {
		const formData = new FormData();
		formData.append('file', imageFile as Blob);
    	formData.append('upload_preset', 'assessment_app_preset');
		uploadImageMutation.mutate(formData)
	}

    const removeFile = () => {
        setImageFile(null)
        setImageSrc('')
    }

    return (
        <>
            { imageSrc && imageFile && <span onClick={removeFile} className="md:mt-20 text-red  cursor-pointer  mb-2">Remove File</span>}
            <div onClick={uploadFile} className='relative cursor-pointer  max-w-lg mx-auto w-full border border-white border-dashed h-[350px] rounded-md flex flex-col justify-center items-center '>
                { !imageSrc && <p className='mb-5'>Click to select images</p>}
                <FileInput ref={inputRef} onFileSelect={onFileSelect}/>
				{
					imageSrc && imageFile &&
					<div className='mx-auto w-[200px] h-[200px]'>
                        <div className=' border-4 border-white rounded-full w-full h-full mx-auto overflow-hidden'>
                            <Image loader={ImageLoader} width={200} height={200} src={imageSrc} alt='Profile' className='w-full h-full object-cover object-center'/>
                        </div>
						<p className="text-center my-5">{ imageFile?.name }</p>
                    </div>
				}
			</div>
			{
				imageSrc &&
				<div className='flex justify-center gap-5 my-10'>
					<Button outline={true} onClick={uploadFile} >
						Change Image
					</Button> 
					<Button loading={uploadImageMutation.isPending} onClick={uploadToCloudinary} >
						Upload To Cloudinary
					</Button> 
				</div>
			}
        </>
    );
}

export default UploadImageBox;