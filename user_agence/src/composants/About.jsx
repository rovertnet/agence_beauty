import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function About() {
  return (
    <>
      <div className=" my-10 md:mx-14 px-4 max-w-screen-2xl mx-auto" id="about">
        <div className=" flex flex-col lg:flex-row justify-between items-start">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" lg:w-1/4 px-3"
          >
            <h3 className=" text-3xl text-black font-bold lg:w-1/2 mb-3">
              A propos de Artha Beauté
            </h3>
            <p className=" text-xl text-gray-700 text-justify">
              Artha Beauté, a été fondé avec la mission de donner à chaque
              client l'expérience ultime en matière de beauté. Notre équipe est
              passionnée par l'art du maquillage et de la coiffure, et nous nous
              engageons à offrir un service personnalisé et de haute qualité à
              chacun de nos clients.
            </p>
          </motion.div>
          {/*  */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-full lg:w-3/4 my-6"
          >
            <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
              <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[35px] h-full shadow-xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <div>
                  <img
                    className=" lg:h-full"
                    src="../../public/home.png"
                    alt="about"
                  />
                  <h5 className=" text-2xl font-bold text-white px-5 text-center mt-2">
                    Nos outils de travail
                  </h5>
                  <p className="px-5 text-center mt-2 text-xl text-slate-300">
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
                  <h5 className=" text-2xl text-slate-900 font-bold px-5 text-center mt-2">
                    CEO MArthe Matundu Y.
                  </h5>
                  <p className="px-5 text-center mt-2 text-xl">
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
                  <h5 className=" text-2xl text-white font-bold px-5 text-center mt-2">
                    CTO Robert Matundu K.
                  </h5>
                  <p className="px-5 text-center mt-2 text-xl text-violet-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
