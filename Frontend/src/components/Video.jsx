const Video = () => {
    return (
      <div className="h-[70vh] pl-6 pr-6 mt-10 w-full flex flex-col items-center justify-center relative overflow-hidden">
        <video
          className="h-full w-full object-cover rounded-3xl"
          src="https://videos.pexels.com/video-files/7578547/7578547-uhd_2560_1440_30fps.mp4" 
          autoPlay 
          loop 
          muted
        />
        <h1 className="absolute top-5 text-white text-2xl font-semibold">Transform Your Space, Elevate Your Style! </h1>
      </div>
    );
  };
  
  export default Video;
  