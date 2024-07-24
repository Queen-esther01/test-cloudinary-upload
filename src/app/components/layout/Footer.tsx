const Footer = () => {
    return (
        <footer className='text-center mb-2 mt-20 py-5 fixed bottom-0 right-0 left-0 bg-darkGray'>
            <p>Built with Nextjs &copy; { new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;