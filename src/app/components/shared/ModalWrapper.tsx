import { ModalType } from "@/app/typings/components";

const ModalWrapper = ({ children, onClose }: ModalType) => {
    return (
        <div data-testid='modal-wrapper' className={`fixed z-30 h-screen top-0 left-0 flex items-center justify-center w-full `}>
            <div data-testid='modal-overlay' onClick={onClose} className='h-screen w-full absolute z-20 opacity-70 bg-darkGray'></div>
            <div className={`h-3/4 lg:max-h-fit p-6 rounded-md w-96 xl:max-w-2xl bg-[#334155] md:w-3/5 lg:max-w-2xl z-50 overflow-y-auto`}>
                { children }
            </div>
        </div>
    )
}

export default ModalWrapper;