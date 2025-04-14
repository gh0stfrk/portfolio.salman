import Link from "next/link";

const PostPreview = (props) => {
  return (
    <div className="bg-gray-200 p-6 md:p-6 rounded-xl flex flex-col gap-2">
      {/* Blog Title */}
      <h2 className="text-lg md:text-xl font-semibold">
        <Link href={`/posts/${props.slug}`} className="hover:underline">
          {props.title}
        </Link>
      </h2>

      {/* Blog Excerpt */}
      <p className="text-sm text-gray-600 leading-snug">{props.subtitle}</p>
      {/* Date */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm font-normal">{new Date(props.date).toLocaleDateString("en-US", { day: "2-digit", month: "long", year: "numeric" })}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {props.tags.split(',').map((tag) => (
          <span
            key={tag}
            className="bg-white text-sm px-3 py-1 rounded-full shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostPreview;