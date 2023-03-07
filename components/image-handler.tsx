'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function ImageWithFallback(props){
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <div className="relative overflow-hidden rounded-xl mx-auto">
        <Image
            {...rest}
            src={imgSrc}
            alt="Libera Awards Category Card image"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
        </div>
    );
};

