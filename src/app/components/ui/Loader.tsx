const Loader = () => {
    return (
        <div data-testid='button-loader' className={`h-6 w-full flex items-center justify-center text-gray `}>
            <div className={`w-6 h-6 border-2 border-white border-t-2 border-t-darkGray rounded-full animate-spin`}></div>
        </div>
    )
}

export default Loader