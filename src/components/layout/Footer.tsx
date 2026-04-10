const currentYear = new Date().getFullYear();

const Footer = () => {

    return (
        <footer className="bg-footer border-t border-white/5 py-18 flex flex-col gap-6 items-center select-none">
            <h2 className="text-blue-pri font-semibold text-lg">DevFinder</h2>
            <p className="text-text-primary/60 font-light">
                Developed by <a href="https://chiemezie-uche.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline"> Chiemezie Uchenwoke </a>
        
            </p>

            <p className="text-text-primary/60 font-light">
                © {currentYear} All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer;