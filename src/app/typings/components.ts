
export type ButtonType = { 
    outline?: boolean
    children: string | JSX.Element
    onClick?: () => void 
    loading?: boolean
    type?: 'button' | 'submit'
}

export type ImageDetailsType = {
    original_filename: string
    url: string
}

export interface ModalType {
    children?: JSX.Element | JSX.Element[],
    onClose: () => void,
    className?: string,
    open?: boolean
}

export interface FileInputType {
    onFileSelect: (e:React.ChangeEvent<HTMLInputElement>) => void
}