import fs from "fs";
import matter from "gray-matter";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

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

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const CodeBlock = ({ inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter language={match[1]} style={materialDark} {...props}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className="text-red-500" {...props}>
      {children}
    </code>
  );
};

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <h1 className="text-4xl text-accent text-center">{post.data.title}</h1>
      <div className="bg-[#232329] h-full py-6 px-10 mx-20 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
        <ReactMarkdown
          children={post.content}
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="text-2xl text-center text-accent font-bold"
                {...props}
              />
            ),
            code: CodeBlock,
            strong: ({ node, ...props }) => (
              <strong className="font-bold text-purple-500" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="my-4 text-[18px]" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a
                className="text-blue-500 hover:underline"
                target="_blank"
                {...props}
              />
            ),
          }}
        />
      </div>
    </div>
  );
};

export default PostPage;
