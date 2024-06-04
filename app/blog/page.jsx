import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter metadata from each post
  const posts = markdownPosts.map((file) => {
    const path = `${folder}${file}`;
    const content = fs.readFileSync(path, "utf8");
    const matterResult = matter(content);
    return {
      slug: file.replace(".md", ""),
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
    };
  });
  return posts;
};

const Blog = () => {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post) => (
    <div key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.subtitle}</p>
        <p>{post.date}</p>
      </Link>
    </div>
  ));
  return <div>{postPreviews}</div>;
};

export default Blog;
