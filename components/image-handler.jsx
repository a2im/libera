'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = (props) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <div className="relative w-64 h-64 overflow-hidden rounded-xl mx-auto">
        <Image
            {...rest}
            src={imgSrc}
            alt="Libera Awards Category Card image"
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
        </div>
    );
};

export default ImageWithFallback;