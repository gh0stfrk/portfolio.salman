import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Tag from "@/components/Tag.js";

import getPostMetadata from "@/utils/getPostMetadata.js"


const getPostContent = (slug) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    const tags = post.data.tags.split(',')
    return (
        <div className="flex flex-col items-center">
        
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
                <p className="text-slate-400 mt-2">{post.data.date}</p>
                <p className="text-slate-400 mt-2">{post.data.author}</p>
                tags: {tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                ))}
                <p className="text-slate-400 mt-2">{post.data.subtitle}</p>
            </div>

            <article className="prose">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;