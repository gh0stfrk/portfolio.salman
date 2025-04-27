import Tag from "@/components/Tags.js";
import { FaUser, FaCalendar } from 'react-icons/fa';

const PostHeader = ({ post }) => {
    const tags = post.data.tags.split(',');
    const date = new Date(post.data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                {/* Header Image - Optional */}
                <div className="w-full h-48 md:h-64 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                {/* Content */}
                <div className="relative px-6 py-8 md:px-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {Array.isArray(tags) && tags.map((tag, index) => (
                            <Tag
                                key={typeof tag === 'string' ? tag : tag.id || index}
                                tag={tag.trim()}
                            />
                        ))}
                    </div>

                    {/* Title & Subtitle */}
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        {post.data.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-6">
                        {post.data.subtitle}
                    </p>

                    {/* Metadata */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <FaUser className="text-gray-400" />
                            <span>{post.data.author}</span>
                        </div>
                        <div className="hidden sm:block text-gray-300">•</div>
                        <div className="flex items-center gap-2">
                            <FaCalendar className="text-gray-400" />
                            <time dateTime={post.data.date}>{date}</time>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reading Time Indicator - Optional */}
            {/* <div className="absolute top-4 right-6 bg-black bg-opacity-75 text-white text-sm px-3 py-1 rounded-full">
                5 min read
            </div> */}
        </div>
    );
}

export default PostHeader;