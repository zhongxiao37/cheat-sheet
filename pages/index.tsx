import { PostTitle } from "../components/atoms/PostTitle";
import { Card } from "../components/molecules/Card";
import { PostBody } from "../components/molecules/PostBody";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";

export const Index: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="container mx-auto px-4">
      {posts.map((post, m) => (
        <div key={m}>
          <PostTitle title={post.title} />
          <PostBody content={post.content} />
        </div>
      ))}
    </div>
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
