import PostPreview from "@/components/PostsPreview.js"
import getPostMetadata from "@/utils/getPostMetadata.js"

import LocationOnIcon from '@mui/icons-material/LocationOn';

import { IconButton } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Navbar from "@/components/NavBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center p-2">
      <div className="my-12 text-center flex justify-center flex-col">
        <h1 className="text-4xl text-black font-bold font-mono">Salman Sayyed</h1>
        <p className="text-black mt-2 text-sm">Cloud Engineer</p>
        <p className="text-xs flex items-center justify-center my-2">
          <LocationOnIcon fontSize="small" /> Mumbai, India
        </p>
        <p className="text-black mt-2">I build cloud-oriented solutions using AWS and JavaScript.</p>
        <p className="flex gap-2 justify-center my-2">
          <IconButton
            component="a"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <XIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/syydsalman"
            target="_blank"
            rel="noopener noreferrer"
            color="black"
          >
          <LinkedInIcon />
          </IconButton>

        </p>
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
      <Navbar text="posts" />
      <Hero />

      {/* <div className="grid grid-cols-1 gap-4">{postPreviews}</div> */}
    </div>
  );
};

export default HomePage;