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

const PostPreview = ({ title, subtitle, author, date, slug }) => (
  <Link href={`/posts/${slug}`} className="block group">
    <div
      className="
        w-full
        mx-auto
        bg-white
        rounded-2xl
        border border-black/10
        shadow hover:shadow-lg
        transition
        px-6 py-5
        mb-8
        flex flex-col
        gap-2
        relative
        cursor-pointer
        group
      "
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black truncate">{title}</h2>
        <span className="text-xs text-gray-400">{formatDate(date)}</span>
      </div>
      <div className="text-base text-gray-700 truncate">{subtitle}</div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm text-gray-500 font-medium">{author}</span>
        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{slug.replace(/-/g, ' ')}</span>
      </div>
    </div>
  </Link>
);

const HomePage = () => {
  const posts = getPostMetadata();
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar/>
      <div className="w-full min-h-[calc(100vh-64px)] bg-white flex flex-col py-8">
        <div className="w-full px-2 sm:px-6">
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