import Link from "next/link";
import { Layout } from "../components/atoms/Layout";
import { PostTitle } from "../components/atoms/PostTitle";
import { PostBody } from "../components/molecules/PostBody";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";

export const Index: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout title="Ruby Cheat Sheet">
      <div className="container mx-auto">
        {posts.map((post, m) => (
          <>
            <Link key={m} href={`/${post.slug}`}>
              <PostTitle title={post.title} />
            </Link>
            <PostBody description={post.description} content={post.content} />
          </>
        ))}
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
