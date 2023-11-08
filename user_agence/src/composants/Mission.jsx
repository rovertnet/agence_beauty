import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Mission() {
  return (
    <>
      <div className=" md:px-14 p-4 max-w-s mx-auto space-y-12">
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-8">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" md:w-1/2"
          >
            <img src="../../public/marthe.png" alt="ùission" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" md:w-2/5"
          >
            <h2 className=" md:text-4xl text-center text-3xl font-extrabold mb-2 leading-normal text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              La mission de Artha Beauté
            </h2>
            <p className=" text-slate-500 text-xl mb-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              reiciendis beatae obcaecati autem blanditiis, atque alias adipisci
              facere molestiae dicta ex nulla ratione, tempore dolor dolore
              suscipit earum in velit!
            </p>
            <p className=" text-slate-500 text-xl mb-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              reiciendis beatae obcaecati autem blanditiis, atque alias adipisci
              facere molestiae dicta ex nulla ratione, tempore dolor dolore
              suscipit earum in velit!
            </p>
            <button className="py-3 text-xl shadow-md px-6 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-purple-500 transition-all duration-300">
              Prendre rendez-vous
            </button>
          </motion.div>
        </div>
        {/*  */}
        <div className=" flex flex-col md:flex-row-reverse justify-center items-center gap-8">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" md:w-1/2"
          >
            <img src="../../public/cote.png" alt="ùission" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" md:w-2/5"
          >
            <h2 className=" md:text-4xl text-center text-3xl font-extrabold mb-2 leading-normal text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Nos valeurs
            </h2>
            <p className=" text-slate-500 text-xl mb-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              reiciendis beatae obcaecati autem blanditiis, atque alias adipisci
              facere molestiae dicta ex nulla ratione, tempore dolor dolore
              suscipit earum in velit!
            </p>
            <p className=" text-slate-500 text-lg mb-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              reiciendis beatae obcaecati autem blanditiis, atque alias adipisci
              facere molestiae dicta ex nulla ratione, tempore dolor dolore
              suscipit earum in velit!
            </p>
            <button className="py-3 text-xl shadow-md px-6 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-purple-500 transition-all duration-300">
              Contactez-nous
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Mission;
