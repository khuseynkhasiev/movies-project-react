function Footer() {
    return (
        <footer className="page-footer blue lighten-1">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} khuseynkhasiev
                    <a className="grey-text text-lighten-4 right" href="#!">Repositories</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;