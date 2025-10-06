import assets from "../assets/assets";

const Footer = () => {
    return (
        <footer
            className="mt-16 bg-gradient-to-r from-yellow-50 via-amber-100 to-emerald-100 text-emerald-900 px-6 pt-12 md:px-16 lg:px-36 w-full shadow-inner border-t border-yellow-200"
        >
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-amber-200 pb-10">
                {/* Logo + About */}
                <div className="md:max-w-96">
                    <div className="flex items-center gap-3 mb-4">
                        {/* Simple open book SVG for footer */}
                        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                            <g>
                                <path
                                    d="M24 10C27.5 7 38 7 44 12V38C38 33 27.5 33 24 36C20.5 33 10 33 4 38V12C10 7 20.5 7 24 10Z"
                                    fill="url(#footerBookGradient)"
                                    stroke="#fbbf24"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M24 10V36"
                                    stroke="#34d399"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="footerBookGradient" x1="4" y1="7" x2="44" y2="38" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#ffe066" />
                                        <stop offset="0.5" stopColor="#fbbf24" />
                                        <stop offset="1" stopColor="#34d399" />
                                    </linearGradient>
                                </defs>
                            </g>
                        </svg>
                        <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-amber-700 via-yellow-600 to-emerald-700 bg-clip-text text-transparent font-serif italic drop-shadow-lg">
                            Jairozon
                        </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed">
                        Jairozon is an online bookstore dedicated to providing quality educational
                        and inspirational books for readers worldwide. Founded by <strong>Jairo Moreno</strong>,
                        Jairozon blends passion for knowledge with accessibility, making books available
                        to students, teachers, and readers everywhere.
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg className="w-6 h-6 hover:scale-110 transition" fill="#1877f3" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.324-1.326z" /></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <svg className="w-6 h-6 hover:scale-110 transition" fill="#1da1f2" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z" /></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg className="w-6 h-6 hover:scale-110 transition" fill="#e4405f" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07z" /><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="flex-1 flex items-start md:justify-end gap-16 md:gap-32">
                    <div>
                        <h2 className="font-bold mb-5 text-amber-700 tracking-wide">Quick Links</h2>
                        <ul className="text-sm space-y-2">
                            <li>
                                <a href="/" className="hover:text-amber-600 transition-colors underline-offset-4 hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-amber-600 transition-colors underline-offset-4 hover:underline">About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-amber-600 transition-colors underline-offset-4 hover:underline">Contact Us</a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="hover:text-amber-600 transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold mb-5 text-amber-700 tracking-wide">Contact</h2>
                        <div className="text-sm space-y-2">
                            <p>📞 <a href="tel:+1234567890" className="hover:text-emerald-600 transition-colors">+1 (689)340-1965</a></p>
                            <p>📧 <a href="mailto:support@jairozon.com" className="hover:text-emerald-600 transition-colors">jairosoft@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <p className="pt-6 text-center text-sm pb-6 text-emerald-800">
                © {new Date().getFullYear()} <span className="font-bold text-amber-700">Jairozon</span> | Owned by <strong>Jairo Moreno</strong> |
                Developed with <span className="animate-pulse text-pink-500">❤️</span> by <a href="https://abhinova.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">Abhinova.com</a>
            </p>
        </footer>
    );
};

export default Footer;
