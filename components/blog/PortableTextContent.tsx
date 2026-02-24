import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "sanity";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";

type Props = {
  value: TypedObject[];
};

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  types: {
    image: ({ value }) => {
      const imageUrl = value?.asset ? urlForImage(value).width(1200).url() : "";

      if (!imageUrl) return null;

      return (
        <Image
          src={imageUrl}
          alt={value?.alt ?? "Illustration"}
          width={1200}
          height={630}
          style={{ width: "100%", height: "auto", borderRadius: "var(--radius-md)" }}
        />
      );
    },
  },
};

export default function PortableTextContent({ value }: Props) {
  return <PortableText value={value} components={components} />;
}
