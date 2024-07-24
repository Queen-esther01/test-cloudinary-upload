const Footer = () => {
    return (
        <footer className='text-center mt-20 py-5 md:fixed md:bottom-0 md:right-0 md:left-0 bg-darkGray'>
            <p>Built with Nextjs &copy; { new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;