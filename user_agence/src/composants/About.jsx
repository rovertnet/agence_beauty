

function About() {
  return (
    <>
      <div className=" my-10 md:mx-14 px-4 max-w-screen-2xl mx-auto">
        <div className=" flex flex-col lg:flex-row justify-between items-start">
          <div className=" lg:w-1/4 px-3">
            <h3 className=" text-2xl text-black font-bold lg:w-1/2 mb-3">
              A propos de Artha Beauté
            </h3>
            <p className=" text-base text-gray-700 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              laudantium illum, illo esse aliquam explicabo placeat, fugiat
              molestiae mollitia, enim est rem nam nesciunt eius. Sequi saepe
              porro id maiores?
            </p>
          </div>
          {/*  */}
          <div className="w-full lg:w-3/4 my-6">
            <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
              <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[35px] h-full shadow-xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <div>
                  <img
                    className=" lg:h-full"
                    src="../../public/home.png"
                    alt="about"
                  />
                  <h5 className=" text-2xl text-white px-5 text-center mt-3">
                    Nos outils de travail
                  </h5>
                  <p className="px-5 text-center mt-3 text-base text-slate-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className=" bg-white rounded-[35px] h-full shadow-2xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-12">
                <div>
                  <img
                    className=" lg:h-full"
                    src="../../public/ART.png"
                    alt="about"
                  />
                  <h5 className=" text-2xl text-slate-900 px-5 text-center mt-3">
                    CEO MArthe Matundu Y.
                  </h5>
                  <p className="px-5 text-center mt-3 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className=" bg-[#ecc6de] rounded-[35px] h-full shadow-xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <div>
                  <img
                    className=" lg:h-full"
                    src="../../public/robertr.png"
                    alt="about"
                  />
                  <h5 className=" text-2xl text-white px-5 text-center mt-3">
                    CTO Robert Matundu K.
                  </h5>
                  <p className="px-5 text-center mt-3 text-base text-slate-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About