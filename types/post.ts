export type Languages = "javascript" | "python" | "ruby" | "go" | "rust";

export type ICard = { language: Languages; code: string };

type Post = {
  slug: string;
  title: string;
  date: string;
  content: ICard[];
};

export default Post;
