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

  // Sort posts by date
  posts.sort((a, b) => new Date(a.date) - new Date(b.date));

  return posts;
};

const Blog = () => {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post) => (
    <li
      key={post.slug}
      className="bg-[#232329] p-6 sm:p-8 rounded-xl flex flex-col justify-center items-center sm:items-start gap-2"
    >
      <Link href={`/blog/${post.slug}`} className="w-full">
        <h3 className="text-xl sm:text-2xl font-semibold text-accent text-center sm:text-left pb-2">{post.title}</h3>
        <p className="text-base sm:text-lg text-center sm:text-left pb-1">{post.subtitle}</p>
        <span className="text-sm text-white/60 block text-center sm:text-lef">{post.date}</span>
      </Link>
    </li>
  ));
  return (
    <div className="w-full flex flex-col items-center gap-6 px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center">
        <span className="text-accent">Jaysukh</span>'s Blog
      </h2>
      <ul className="w-full max-w-4xl flex flex-col gap-4">
        {postPreviews}
      </ul>
    </div>
  );
};

export default Blog;
