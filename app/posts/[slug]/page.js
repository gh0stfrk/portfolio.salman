import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import path from "path";
import { notFound } from "next/navigation";

import Navbar from "@/components/NavBar";
import Breadcrumbs from "@/components/BreadCrumbs";
import getPostMetadata from "@/utils/getPostMetadata.js";
import Footer from "@/components/Footer";

const getPostContent = (slug) => {
    if (!/^[a-zA-Z0-9-_]+$/.test(slug)) {
        notFound();
    }
    const folder = path.join(process.cwd(), "posts");
    const file = path.join(folder, `${slug}.md`);

    if (!file.startsWith(folder)) {
        notFound();
    }
    try {
        const content = fs.readFileSync(file, "utf8");
        const matterResult = matter(content);
        return matterResult;
    } catch (error) {
        notFound();
    }
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
    return (
        <div className="min-h-screen">
            <Navbar text="home" />
            
            {/* Container with max-width and responsive padding */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs with consistent padding */}
                {/* <div className="py-4 text-center">
                    <Breadcrumbs />
                </div> */}

                {/* Main content area */}
                <div className="flex flex-col items-center">
                    
                    {/* Article with responsive width and padding */}
                    <article className="prose prose-sm sm:prose lg:prose-lg 
                                      mx-auto w-full px-4 sm:px-6 
                                      py-6 bg-white rounded-lg shadow-sm
                                      prose-headings:text-gray-900
                                      prose-p:text-gray-600
                                      prose-a:text-blue-600">
                        <Markdown>{post.content}</Markdown>
                    </article>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PostPage;