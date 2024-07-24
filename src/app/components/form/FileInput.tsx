import { FileInputType } from "@/app/typings/components";
import React, { ForwardedRef } from "react";

const FileInput = React.forwardRef(({ onFileSelect }:FileInputType, ref:ForwardedRef<HTMLInputElement>) => {
    return (
        <input ref={ref} accept='image/*' data-testid='file-upload' onChange={onFileSelect} type='file' className='hidden' />
    );
})

export default FileInput;