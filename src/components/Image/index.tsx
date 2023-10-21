import React, { useState } from "react"

export interface LazyLoadImageProps {
    src: string
    alt?: string
    width: number
    height: number
}


export const LazyLoadImage: React.FC<LazyLoadImageProps> = ({
    src,
    alt,
    width,
    height
}) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <>
            <img
                src={src}
                onLoad={() => setLoaded(true)}
                alt={alt}
                style={{
                    objectFit: 'cover',
                    display: loaded ? 'block' : 'none',
                    width: `${width}px`,
                    height: `${height}px`
                }}
            />
        </>
    )
}