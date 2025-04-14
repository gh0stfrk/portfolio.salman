import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Tag from "@/components/Tags.js";
import Navbar from "@/components/NavBar";
import Breadcrumbs from "@/components/BreadCrumbs";
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

const PostPage = async ({params}) => {
    const {slug} = await params;
    const post = getPostContent(slug);
    const tags = post.data.tags.split(',')
    return (
        <div>
            <Navbar text="home" />
            <div className="pl-6">
                <Breadcrumbs />
            </div>
            <div className="flex flex-col">
                <div className="my-12 text-center">
                    <h1 className="text-4xl">{post.data.title}</h1>
                    <p className="text-slate-400 mt-2">{post.data.date}</p>
                    <p className="text-slate-400 mt-2">{post.data.author}</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {Array.isArray(tags) && tags.map((tag, index) => (
                            <Tag
                                key={typeof tag === 'string' ? tag : tag.id || index}
                                tag={tag}
                            />
                        ))}
                    </div>
                    <p className="text-slate-400 mt-2">{post.data.subtitle}</p>
                </div>
                <article className="prose p-3">
                    <Markdown>{post.content}</Markdown>
                </article>
            </div>
        </div>
    );
};

export default PostPage;