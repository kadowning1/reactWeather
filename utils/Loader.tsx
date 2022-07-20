import Image from 'next/image'

interface LoaderProps {
  src: string,
  width: number,
  quality?: number,
  optimized?: boolean,
  alt?: string
}

const myLoader = ({ src }: LoaderProps) => {
  return src
}

export const MyImage = ({ src, width, quality, optimized, alt }: LoaderProps) => {
  return (
    <Image
      loader={myLoader}
      src={src}
      alt={alt}
      width={width}
      quality={quality}
      height={100}
      unoptimized={optimized}
    />
  )
}