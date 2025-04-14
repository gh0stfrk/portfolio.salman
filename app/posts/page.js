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

      <div className="m-1">
        <div className="px-4 md:px-8 py-8">
          <div className="flex flex-row justify-">
            <h1 className="text-3xl font-semibold mb-6">Blogs</h1>
            <div>
              <div className="text">
                Write Here
              </div>
            </div>
          </div>
          <div className="flex flex- gap-4 mt-4">
            {postPreviews}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsPage;