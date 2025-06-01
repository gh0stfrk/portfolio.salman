import Navbar from "@/components/NavBar";
import getPostMetadata from "@/utils/getPostMetadata";
import Link from "next/link";
import Footer from '@/components/Footer';
import PostPreview from "@/components/PostsPreview";


const HomePage = () => {
  const posts = getPostMetadata();
  return (
    <div className="min-h-screen w-full flex flex-col ">
      <Navbar />
      {/* Hero Section */}

      <section className="w-full flex flex-col items-center py-12 mb-8">
        <img src="/agentVenom.png" alt="Salman" className="w-24 h-24 rounded-full mb-4 shadow" />

        <h1 className="text-3xl font-bold mb-2 font-custom">Hi, I'm Salman</h1>
        <p className="text-lg text-gray-600 mb-4">Cloud Engineer</p>
        <p className="text-center max-w-2xl text-gray-500 mb-6">
          I build scalable cloud solutions and modern web applications. Passionate about technology and sharing knowledge.
        </p>
        <p className="flex gap-4">
          <Link href="/about" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Connect</Link>
          <a href="#projects" className="px-6 py-2 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition">Projects</a>
        </p>
      </section>

      {/* Blog Posts Section */}
      <div className="w-full max-w-4xl mx-auto px-2 sm:px-6" id="projects">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">Blogs</h2>
        <div className="flex flex-col gap-6">
          {posts.map(post => (
            <PostPreview
              key={post.slug}
              title={post.title}
              subtitle={post.subtitle}
              author={post.author}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;