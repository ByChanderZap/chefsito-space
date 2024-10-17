import Image from "next/image";

interface RecipeImageProps {
  src: string;
  alt: string;
}

export const RecipeImage: React.FC<RecipeImageProps> = ({ src, alt }) => (
  <div className="md:w-1/2 relative h-64 md:h-96">
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  </div>
);
