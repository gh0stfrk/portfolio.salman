import PostPreview  from "@/components/PostsPreview.js"
import getPostMetadata from "@/utils/getPostMetadata.js"

import Navbar from "@/components/NavBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-12 text-center">
        <h1 className="text-3xl text-black font-bold font-mono ">Salman Sayyed</h1>
        <p className="text-black mt-2">Cloud Engineer</p>
      </div>
    </div>
  );
};


const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <Navbar/>
      <Hero/>
      
      {/* <div className="grid grid-cols-1 gap-4">{postPreviews}</div> */}
    </div>
  );
};

export default HomePage;