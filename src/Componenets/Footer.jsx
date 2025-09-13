
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h2>MyWebsite</h2>
                    <p>Delivering excellence in web solutions. Connect with us through our social channels or contact us directly.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@mywebsite.com</p>
                    <p>Phone: +91 1234567890</p>
                    <div className="footer-socials">
                        <a href="#" className="social-icon">FB</a>
                        <a href="#" className="social-icon">TW</a>
                        <a href="#" className="social-icon">LN</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 MyWebsite. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;