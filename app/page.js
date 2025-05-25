import Navbar from "@/components/NavBar";
import getPostMetadata from "@/utils/getPostMetadata";
import Link from "next/link";
import Footer from '@/components/Footer';

// Helper to format date as "10th January"
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };
  return `${day}${getOrdinal(day)} ${month}`;
}

// Redesigned PostPreview
const PostPreview = ({ title, subtitle, author, date, slug }) => (
  <Link href={`/posts/${slug}`} className="block group">
    <div className="w-full mx-auto bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl border border-black/10 shadow-md hover:shadow-xl transition hover:-translate-y-1 px-8 py-6 mb-3 flex flex-col gap-3 relative cursor-pointer group">
      <div className="flex items-center gap-3">
        <div>
          <h2 className="text-2xl font-bold text-black group-hover:text-blue-700 transition-colors truncate">{title}</h2>
          <span className="text-xs text-gray-400">{formatDate(date)}</span>
        </div>
      </div>
      <div className="text-base text-gray-700">{subtitle}</div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600 font-medium">{author}</span>
        <span className="text-xs bg-black/5 px-3 py-1 rounded-full font-mono tracking-wide">{slug.replace(/-/g, ' ')}</span>
      </div>
    </div>
  </Link>
);

const HomePage = () => {
  const posts = getPostMetadata();
  return (
    <div className="min-h-screen w-full flex flex-col ">
      <Navbar />
      {/* Hero Section */}

      <section className="w-full flex flex-col items-center py-12 mb-8">
        <img src="/avatar.jpg" alt="Salman" className="w-24 h-24 rounded-full mb-4 shadow" />

        <h1 className="text-3xl font-bold mb-2 font-custom">Hi, I'm Salman 👋</h1>
        <p className="text-lg text-gray-600 mb-4">Cloud Engineer & Full Stack Developer</p>
        <p className="text-center max-w-2xl text-gray-500 mb-6">
          I build scalable cloud solutions and modern web applications. Passionate about technology and sharing knowledge.
        </p>
        <p className="flex gap-4">
          <Link href="/about" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Learn More</Link>
          <a href="#projects" className="px-6 py-2 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition">View Projects</a>
        </p>
      </section>

      {/* Blog Posts Section */}
      <div className="w-full max-w-4xl mx-auto px-2 sm:px-6" id="projects">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">Blog Posts</h2>
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