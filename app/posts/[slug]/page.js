import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import path from "path";
import { notFound } from "next/navigation";

import Navbar from "@/components/NavBar";
import getPostMetadata from "@/utils/getPostMetadata.js";
import Footer from "@/components/Footer";

// --- SEO: Dynamic Metadata ---
export async function generateMetadata({ params }) {
    const posts = getPostMetadata();
    const post = await posts.find((p) => p.slug === params.slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.subtitle,
        openGraph: {
            title: post.title,
            description: post.subtitle,
            url: `https://salmansyyd.com/posts/${post.slug}`,
            type: "article",
            images: [
                {
                    url: post.coverImage || "/default-og.png",
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.subtitle,
            images: [post.coverImage || "/default-og.png"],
        },
        alternates: {
            canonical: `https://salmansyyd.com/posts/${post.slug}`,
        },
    };
}

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

const PostPage = async ({ params }) => {
    const { slug } = await params;
    const post = getPostContent(slug);

    // Get metadata for structured data
    const posts = getPostMetadata();
    const meta = posts.find((p) => p.slug === slug);
    console.log("Post Metadata:", meta);

    return (
        <div className="min-h-screen">
            {/* JSON-LD Structured Data for SEO */}
            {meta && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            headline: meta.title,
                            description: meta.subtitle,
                            image: meta.coverImage ? [`https://salmansyyd.com${meta.coverImage}`] : [],
                            author: { "@type": "Person", name: meta.author },
                            datePublished: meta.date,
                            url: `https://salmansyyd.com/posts/${meta.slug}`,
                        }),
                    }}
                />
            )}
            <Navbar text="home" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <article className="prose prose-sm sm:prose lg:prose-lg 
                                      mx-auto w-full px-4 sm:px-6 
                                      py-6 rounded-lg
                                      prose-headings:text-gray-900
                                      prose-a:text-blue-600">
                        {meta && (
                            <>
                                <h1>{meta.title}</h1>
                                {meta.subtitle && (
                                    <p className="text-gray-500 text-lg">{meta.subtitle}</p>
                                )}
                                <div className="text-sm text-gray-400 mb-2">
                                    By {meta.author} • {meta.date}
                                </div>
                                {meta.coverImage && (
                                    <img
                                        src={meta.coverImage}
                                        alt={meta.title}
                                        className="rounded-lg mb-4"
                                        width={800}
                                        height={400}
                                    />
                                )}
                            </>
                        )}
                        <Markdown className="border-none">{post.content}</Markdown>
                    </article>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PostPage;