import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@lib/sanity.client";
import PreviewSuspense from "components/PreviewSuspense";
import PreviewBlogList from "@components/PreviewBlogList";
import BlogList from "@components/Web/BlogList";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-lg text-center animate-pulse text-brand">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}

export const revalidate = 30;
