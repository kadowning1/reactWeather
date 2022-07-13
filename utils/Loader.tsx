import Image from 'next/image'

interface LoaderProps {
  src: string,
  width: number,
  quality?: number
}

const myLoader = ({ src, width, quality }: LoaderProps) => {
  return src
}

export const MyImage = ({ src, width, quality }: LoaderProps) => {
  return (
    <Image
      loader={myLoader}
      src={src}
      alt="Picture of the author"
      width={width}
      quality={quality}
      height={100}
    />
  )
}