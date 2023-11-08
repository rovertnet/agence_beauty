import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Gallery() {
  const images = [
    "../../public/images/1.png",
    "../../public/images/2.png",
    "../../public/images/3.png",
    "../../public/images/4.png",
    "../../public/images/5.png",
    "../../public/images/6.png",
    "../../public/images/7.png",
    "../../public/images/8.png",
  ];
  return (
    <>
      <div className=" container mx-auto px-5 py-2 md:px-14" id="realisation">
        <h2 className="md:text-4xl text-center text-3xl mb-10 font-extrabold leading-normal my-6">
          Nos réalisations <br />
          <span className="font-normal text-base mb-0">en images toutes</span>
        </h2>
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="-m-1 flex flex-wrap md:-m-2"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
            >
              <img
                className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
                src={image}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Gallery;
