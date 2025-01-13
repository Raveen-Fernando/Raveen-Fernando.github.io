import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-gradient-to-b from-gradient-mid to-gradient-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
                    <div className="text-center">
                        <p className="text-gray-600 mb-2">
                            Made with ❤️ in West Virginia by <a href="https://github.com/kaywijeratne" className="underline hover:text-gray-800 transition-colors">Kay Wijerathne</a>
                        </p>
                        <p className="text-sm text-gray-500">
                            © 2025 Raveen Fernando. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;