import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

function Home() {
  return (
    <>
      <div
        className=" md:px-12 p-4 max-w-screen-2xl mx-auto pt-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
        id="accueil"
      >
        <div className=" md:p-9 px-4 py-9">
          <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            {/* image */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <img
                className=" lg:h-full w-full"
                src="../../public/Portraithome.png"
                alt="a propos"
              />
            </motion.div>
            {/* La présentation */}
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" md:w-full"
            >
              <h2 className=" md:text-4xl text-3xl font-bold text-white mb-6 leading-relaxed">
                Révélez la beauté qui est en vous en vous offrant nos services !
              </h2>
              <p className=" text-[#f3f4f5] text-2xl mb-5 md:text-justify text-justify">
                Bienvenue sur le site de notre agence de maquillage et coiffure
                pour femmes, où la beauté et l'élégance se rencontrent pour
                révéler votre véritable éclat.
              </p>
              <div className=" space-x-5 space-y-4 ">
                <button className=" py-3 px-6 rounded-3xl bg-pink-500 text-white hover:bg-purple-500 transition-all duration-300">
                  contactez-nous
                </button>
                <button className="py-3 px-6 rounded-3xl bg-[#ecc6de] text-white hover:bg-white hover:text-[#ecc6de] hover:border-2 hover:border-[#ecc6de] transition-all duration-300">
                  A propos
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home