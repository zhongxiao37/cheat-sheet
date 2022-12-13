import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Post, { Languages } from "../types/post";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const description = parseDescription(content);
  const parsedContent = parseContent(content);

  const items: Post = {
    description: description,
    content: parsedContent,
    title: data.title,
    slug: realSlug,
    date: data.date,
  };

  return items;
}

const parseDescription = (content: string) => {
  const regex = /([^(###)]+)/;
  const match = content.match(regex);
  let description = "";
  if (match) description = match[0];

  return description;
};

const parseContent = (content: string) => {
  const regex = /(?:###\s(\w+))/gm;
  const languages = Array.from(content.matchAll(regex)).map((m) => m[1]);
  const codes = content.split(/###\s\w+/gm).slice(0 - languages.length);

  return codes.map((c, i) => {
    const language = languages[i].toLocaleLowerCase() as Languages;
    const code = c;
    return { language, code };
  });
};

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));
  // sort posts by date in descending order
  posts.sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
  return posts;
}
