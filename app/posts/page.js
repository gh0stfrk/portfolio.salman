import Link from "next/link";
import Navbar from "@/components/NavBar";
import getPostMetadata from "@/utils/getPostMetadata";
import PostPreview from "@/components/PostsPreview";

const PostsPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <Navbar text="home" />
      <div className="m-12 text-center">
        <h1 className="text-4xl font-bold">All Posts</h1>
        <div className="grid grid-cols-1 gap-4 mt-4">{postPreviews}</div>
      </div>
    </div>
  );
};

export default PostsPage;