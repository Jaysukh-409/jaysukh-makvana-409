import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

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

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
};

const Blog = () => {
  const postMetaData = getPostMetadata();

  const postPreviews = postMetaData.map((post) => (
    <li
      key={post.slug}
      className="bg-[#232329] w-full max-w-4xl mx-auto rounded-xl px-6 sm:px-10 py-6 flex flex-col justify-center items-start gap-2"
    >
      <Link href={`/blog/${post.slug}`} className="w-full">
        <h3 className="text-2xl sm:text-3xl text-accent mb-2">{post.title}</h3>
        <p className="text-base sm:text-xl text-white mb-1">{post.subtitle}</p>
        <span className="text-sm sm:text-base text-white/60">{post.date}</span>
      </Link>
    </li>
  ));

  return (
    <div className="w-full px-4 sm:px-10 py-12 flex flex-col gap-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center">
        <span className="text-accent">Jaysukh</span>'s Blog
      </h2>
      <ul className="flex flex-col gap-6">{postPreviews}</ul>
    </div>
  );
};

export default Blog;
