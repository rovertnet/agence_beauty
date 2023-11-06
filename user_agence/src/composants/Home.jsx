
function Home() {
  return (
    <>
      <div className=" md:px-12 p-4 max-w-screen-2xl mx-auto pt-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..." id="accueil">
        <div className=" md:p-9 px-4 py-9">
          <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            {/* image */}
            <div>
              <img
                className=" lg:h-full w-full"
                src="../../public/Portraithome.png"
                alt="a propos"
              />
            </div>
            {/* La présentation */}
            <div className=" md:w-full">
              <h2 className=" md:text-4xl text-3xl font-bold text-white mb-6 leading-relaxed">
                Je suis le premier de ce bannier, en répresentant Artha beauté.
              </h2>
              <p className=" text-[#f3f4f5] text-2xl mb-5 md:text-justify text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos sint facere ad, veniam earum quas quasi! Commodi
                officiis, aperiam libero, asperiores cum quasi optio dolorum
                quidem, tenetur est laboriosam aliquam.
              </p>
              <div className=" space-x-5 space-y-4 ">
                <button className=" py-3 px-6 rounded-3xl bg-pink-500 text-white hover:bg-purple-500 transition-all duration-300">
                  contactez-nous
                </button>
                <button className="py-3 px-6 rounded-3xl bg-[#ecc6de] text-white hover:bg-white hover:text-[#ecc6de] hover:border-2 hover:border-[#ecc6de] transition-all duration-300">
                  A propos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home