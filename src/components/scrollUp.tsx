import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../index.css';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            {isVisible ? (
                <button
                    onClick={scrollToTop}
                    className="p-6 bg-gray-100 shadow-lg rounded-full transform transition duration-300 hover:scale-105 hover:bg-green-100 text-green-500 scroll-up-enter"
                >
                    <FaArrowUp />
                </button>
            ) : (
                <button
                    className="scroll-up-exit"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default ScrollUp;