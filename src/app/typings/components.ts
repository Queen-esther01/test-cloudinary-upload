
export type ButtonType = { 
    outline?: boolean
    children: string | JSX.Element
    onClick?: () => void 
    loading?: boolean
    type?: 'button' | 'submit'
    className?: string
}

export type ImageDetailsType = {
    original_filename: string
    url: string
}

export type ModalType = {
    children?: JSX.Element | JSX.Element[],
    onClose: () => void,
    className?: string,
    open?: boolean
}

export type FileInputType = {
    onFileSelect: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export type ImageDetailsComponent = {
    image: ImageDetailsType 
    handleDeleteImage: (data:ImageDetailsType) => void
}