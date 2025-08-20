'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedNextImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  style?: React.CSSProperties
}

export const OptimizedNextImage = ({
  src,
  alt,
  fill = false,
  width,
  height,
  className,
  priority = false,
  sizes = "100vw",
  quality = 85,
  style,
}: OptimizedNextImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={cn("transition-opacity duration-300", isLoaded ? "opacity-100" : "opacity-0")}
        priority={priority}
        sizes={sizes}
        quality={quality}
        style={style}
        onLoad={() => setIsLoaded(true)}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltOaxesehnO5gwUjQKKAjsKlBQj6bM4gHcHI3TlqVJZLiI/Gr6v/Z"
      />
    </div>
  )
}