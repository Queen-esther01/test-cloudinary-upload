import { ImageLoaderProps } from "next/image";

const ImageLoader = ({ src, width, quality }:ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default ImageLoader;
