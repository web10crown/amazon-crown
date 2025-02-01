import React from 'react';
import styles from "@/styles/components/BrandScroller.module.css";


const BrandScroller = () => {
    const slides = [
        { id: 1, src: '/logo/1.png' },
        { id: 2, src: '/logo/2.png' },
        { id: 3, src: '/logo/3.png' },
        { id: 4, src: '/logo/4.png' },
        { id: 5, src: '/logo/5.png' },
        { id: 6, src: '/logo/6.png' },
        { id: 7, src: '/logo/7.png' },
    ];

    // Duplicate the slides to create an infinite loop effect
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className={styles.slider}>
            <div className={styles.slideTrack}>
                {duplicatedSlides.map((slide, index) => (
                    <div key={`${slide.id}-${index}`} className={styles.slide}>
                        <img src={slide.src} height="100" width="250" alt={`Slide ${slide.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandScroller;