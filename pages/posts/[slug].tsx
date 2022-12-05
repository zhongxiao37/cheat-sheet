import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Post from "../../types/post";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import { PostTitle } from "../../components/atoms/PostTitle";
import { PostBody } from "../../components/molecules/PostBody";
import { Layout } from "../../components/atoms/Layout";

interface IPost {
  post: Post;
}

export const Post: React.FC<IPost> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        <PostTitle title="Loading…"></PostTitle>
      ) : (
        <Layout title={post.title}>
          <PostTitle title={post.title} />
          <PostBody content={post.content} />
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

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

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
