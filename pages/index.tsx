import Link from "next/link";
import { useEffect } from "react";
import Prism from "prismjs";
import { Layout } from "../components/atoms/Layout";
import { PostTitle } from "../components/atoms/PostTitle";
import { PostBody } from "../components/molecules/PostBody";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-ruby");
require("prismjs/components/prism-python");
require("prismjs/components/prism-go");
require("prismjs/components/prism-rust");

export const Index: React.FC<{ posts: Post[] }> = ({ posts }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Layout title="Ruby Cheat Sheet">
      <div className="flex flex-wrap">
        {posts.map((post, m) => (
          <>
            <PostTitle key={m} link={post.slug} title={post.title} />
            <PostBody description={post.description} content={post.content} />
          </>
        ))}
      </div>
    </Layout>
  );
};

export default Index;

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
