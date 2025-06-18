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
      className="bg-[#232329] h-[176px] py-6 px-10 mx-20 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
    >
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-2xl lg:text-left pb-4 text-accent">{post.title}</h3>
        <p className="text-xl pb-2">{post.subtitle}</p>
        <span className="text-white/60">{post.date}</span>
      </Link>
    </li>
  ));
  return (
    <div className="w-full flex flex-col text-left gap-[30px]">
      <h2 className="text-4xl font-bold text-center">
        <span className="text-accent">Jaysukh</span>'s Blog
      </h2>
      <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[20px]">
        {postPreviews}
      </ul>
    </div>
  );
};

export default Blog;
