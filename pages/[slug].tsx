import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { useEffect } from "react";
import Prism from "prismjs";
import Post from "../types/post";
import { getPostBySlug, getAllPosts } from "../lib/api";
import { PostTitle } from "../components/atoms/PostTitle";
import { PostBody } from "../components/molecules/PostBody";
import { Layout } from "../components/atoms/Layout";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-ruby");
require("prismjs/components/prism-python");
require("prismjs/components/prism-go");
require("prismjs/components/prism-rust");

interface IPost {
  post: Post;
}

export const Post: React.FC<IPost> = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        <PostTitle title="Loading…" link="/"></PostTitle>
      ) : (
        <Layout title={post.title}>
          <PostTitle title={post.title} link={post.slug} />
          <PostBody description={post.description} content={post.content} />
        </Layout>
      )}
    </>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
