import PostPreview  from "@/components/PostsPreview.js"
import getPostMetadata from "@/utils/getPostMetadata.js"

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[postPreviews]}</div>
  );
};

export default HomePage;