import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";
import Post, { Languages } from "../types/post";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const parsedContent = await parseContent(content);

  const items: Post = {
    content: parsedContent,
    title: data.title,
    slug: realSlug,
    date: data.date,
  };

  return items;
}

const parseContent = async (content: string) => {
  const regex = /(?:###\s(\w+))\n+(^[^(###)]+)/gm;
  const codes = Array.from(content.matchAll(regex));

  const promises = await Promise.all(
    codes.map(async (c) => {
      const language = c[1].toLocaleLowerCase() as Languages;
      const code = await markdownToHtml(c[2]);
      return { language, code };
    })
  );

  return promises;
};

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  // sort posts by date in descending order
  posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
