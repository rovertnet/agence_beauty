import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Banner() {
  return (
    <>
      <div className=" md:px-14 px-4 max-w-screen-2xl mx-auto my-12">
        <div className=" md:p-9 px-4 py-9 bg-violet-500 rounded-tl-[100px] rounded-br-[100px]">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" flex flex-col md:flex-row-reverse justify-between items-center gap-10"
          >
            {/* image */}
            <div>
              <img
                className=" lg:h-full w-full rounded-br-full rounded-tr-full"
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Banner;
