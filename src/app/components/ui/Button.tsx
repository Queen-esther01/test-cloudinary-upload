import { ButtonType } from "@/app/typings/components"
import Loader from "./Loader"


const Button = ({ children, onClick, outline=false, loading=false, type='button' }: ButtonType) => {
    return (
        <button data-testid='button' className={`${outline ? 'outline-button' : 'fill-button'} button `} onClick={onClick} type={type}>
            { loading ? <Loader/> : children }
        </button>
    )
}

export default Button