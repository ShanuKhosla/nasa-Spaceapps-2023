const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-black flex flex-col items-center justify-center gap-1 ease-in-out">
      <h1 className="text-5xl text-[#f6f4f4] font-extrabold font-firaSans text-center tracking-wider">Welcome To</h1>
      <br />
      <img src="/spaceapps_Logo.png" className="w-[40%] md:w-[18%] lg:w-[15%] mb-4" alt="Logo" />
      <h1 className="text-5xl lg:text-6xl font-extrabold font-firaSans text-white text-center mb-4">
        Are you ready to take on the <span className="text-[#eafe07]">challenge</span>?
      </h1>
      <img width={100} src="/preloader.svg" />
    </div>
  );
}

export default Preloader;
