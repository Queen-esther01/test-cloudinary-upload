import { ModalType } from "@/app/typings/components";
import ModalWrapper from "../../components/shared/ModalWrapper";
import UploadImageBox from "@/app/components/shared/UploadImageBox";

const UploadImageModal = ({ open, onClose }: ModalType) => {


    if(!open) return null
    return (
        <ModalWrapper onClose={onClose}>
            <UploadImageBox callback={onClose}/>
        </ModalWrapper>
    );
}

export default UploadImageModal;