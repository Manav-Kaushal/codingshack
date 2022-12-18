import Image from "next/image";
import React from "react";
import urlFor from "@lib/urlFor";
import Link from "next/link";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full m-10 mx-auto h-96">
          <Image
            src={urlFor(value).url()}
            alt={"Blog post image"}
            className="object-contain"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="py-5 ml-10 space-y-5 list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ul className="list-decimal mt-lg">{children}</ul>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-10 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="py-10 text-4xl font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="py-10 text-3xl font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="py-10 text-2xl font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="py-3 pl-5 my-5 italic border-l-4 border-l-brand">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-brand hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
