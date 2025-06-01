import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

/**
 * PostPreview component to display a preview of a blog post.
 * 
 * @param {Object} props - The properties for the component.
 * @param {string} props.title - The title of the post.
 * @param {string} props.subtitle - A brief description or subtitle of the post.
 * @param {string} props.author - The author of the post.
 * @param {string} props.date - The date the post was published.
 * @param {string} props.slug - The slug for the post URL.
 */
const PostPreview = ({ title, subtitle, author, date, slug }) => (
  <Link href={`/posts/${slug}`} className="block group">
    <div className="w-full sm:w-[90%] mx-auto bg-white dark:bg-gray-900 rounded-2xl border border-black/10 dark:border-white/10 shadow-md hover:shadow-xl transition hover:-translate-y-1 px-4 sm:px-8 py-6 mb-3 flex flex-col gap-3 relative cursor-pointer group">
      <div className="flex items-center gap-3">
        <div>
          <h2 className="font-bold text-black dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors truncate">{title}</h2>
          <span className="text-xs text-gray-400 dark:text-gray-300">{formatDate(date)}</span>
        </div>
      </div>
      <div className="text-base text-gray-700 dark:text-gray-200">{subtitle}</div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{author}</span>
        <span className="text-xs bg-black/5 dark:bg-white/10 px-3 rounded-full font-mono tracking-wide text-black dark:text-white">{slug.replace(/-/g, ' ')}</span>
      </div>
    </div>
  </Link>
);

export default PostPreview;