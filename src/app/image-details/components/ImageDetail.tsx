import { ImageDetailsType } from "@/app/typings/components";
import ImageLoader from "@/app/utils/loader";
import Image from "next/image";

const ImageDetail = ({ image }: { image: ImageDetailsType}) => {
    return (
        <div className='mx-auto'>
            <div className='w-[300px] h-[300px] border-2 border-white rounded-lg mx-auto overflow-hidden'>
                <Image loader={ImageLoader} quality={100} width={300} height={300} src={image.url} alt={image.original_filename} className='h-full object-cover object-center'/>
            </div>
            <p className="text-center mt-5 mb-12">{ image.original_filename }</p>
        </div>
    );
}

export default ImageDetail;