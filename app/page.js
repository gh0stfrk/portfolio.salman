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
        px-2 sm:px-6 py-5
        mb-6
        bg-white
        font-semibold
        shadow-sm
        transition
        cursor-pointer
        relative
        group-hover:shadow-md
        flex flex-col
        min-h-[110px]
        border-0
        rounded-[1.25rem]
       
        before:transition-all before:duration-300 before:ease-in-out
        after:transition-all after:duration-300 after:ease-in-out
        overflow-hidden
      "
      data-corner
    >
      <div className="text-lg font-bold truncate">{title}</div>
      <div className="text-sm font-normal text-gray-700 truncate">{subtitle}</div>
      <div className="flex justify-between items-end mt-4 text-sm font-normal text-gray-500">
        <span className="self-end">{author}</span>
        <span className="self-end">{formatDate(date)}</span>
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