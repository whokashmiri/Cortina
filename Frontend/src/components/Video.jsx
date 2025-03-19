const Video = () => {
  return (
    <div className="lg:h-[70vh] sm:h-[50vh] lg:pl-6 lg:pr-6 pl-4 pr-4 sm:px-3 mt-7 w-full flex flex-col items-center justify-center relative overflow-hidden">
      <video
        className="h-full w-full object-cover rounded-3xl"
        src="https://videos.pexels.com/video-files/7578547/7578547-uhd_2560_1440_30fps.mp4" 
        autoPlay 
        loop 
        muted
      />
      <h1 className="absolute top-5 text-white text-2xl sm:text-lg font-semibold text-center px-4">
        Transform Your Space, Elevate Your Style!
      </h1>
    </div>
  );
};

export default Video;
