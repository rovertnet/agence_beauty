import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Service() {
  return (
    <>
      <div
        className=" md:px-12 p-4 max-w-screen-2xl mx-auto py-10 bg-[#eeeeee]"
        id="service"
      >
        <div className=" md:p-9 px-4 py-9">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" flex flex-col md:flex-row justify-center items-center gap-10"
          >
            <div className=" bg-white shadow-md rounded-md px-6 py-5 hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  className=" items-center"
                  src="../../public/images/maquillage.png"
                  alt=""
                />
                <h5 className=" text-center text-2xl font-semibold text-violet-600 py-3">
                  Maquillage Pro
                </h5>
                <p className=" text-center text-base ">
                  Notre équipe de maquilleurs professionnels sait comment mettre
                  en valeur votre beauté naturelle.
                </p>
              </div>
            </div>
            <div className=" bg-white shadow-md rounded-md px-6 py-5 hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  className=" items-center"
                  src="../../public/images/coiffure.png"
                  alt=""
                />
                <h5 className=" text-center text-2xl font-semibold text-violet-600 py-3">
                  Coiffure Perso
                </h5>
                <p className=" text-center text-md ">
                  Nous nous spécialisons dans la création de coiffures qui
                  reflètent votre style personnel et mettent en valeur votre
                  beauté unique.
                </p>
              </div>
            </div>
            <div className=" bg-white shadow-md rounded-md px-6 py-5 hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  className=" items-center"
                  src="../../public/images/perruque.png"
                  alt=""
                />
                <h5 className=" text-center text-2xl font-semibold text-violet-600 py-3">
                  Pose perruque
                </h5>
                <p className=" text-center text-base ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos velit numquam rerum officiis quis,
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Service;
