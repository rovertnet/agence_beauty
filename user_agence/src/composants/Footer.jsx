import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Footer() {
  return (
    <>
      <div className=" bg-[#410078] md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className=" py-12 flex flex-col md:flex-row gap-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" md:w-1/2 space-y-5"
          >
            <a
              href="/"
              className=" text-2xl font-semibold flex items-center space-x-3 text-violet-400 py-4"
            >
              <img
                className=" h-12 inline-block items-center"
                src="../../public/AB.png"
                alt="logo"
              />
            </a>
            <p className=" md:w-1/2 text-slate-200">
              Bienvenue sur le site de notre agence de maquillage et coiffure
              pour femmes!
            </p>
            <div className=" py-4">
              <input
                type="text"
                name="mail"
                id="mail"
                className=" bg-[#faebff] py-1 px-4 rounded-md focus:outline-none"
                placeholder="votre e-mail"
              />
              <input
                type="submit"
                value="Envoyer"
                className=" px-4 py-1 -ml-4 rounded-md bg-fuchsia-500 text-base cursor-pointer text-white hover:bg-slate-300 hover:text-[#410078] transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start"
          >
            <div className=" space-y-4 mt-5">
              <h5 className=" text-white text-xl">Plate-forme</h5>
              <ul className=" space-y-2">
                <a
                  href="/"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Accueil
                </a>
                <a
                  href="/service"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Services
                </a>
                <a
                  href="/realisations"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Réqlisations
                </a>
                <a
                  href="/tarif"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Tarifs
                </a>
                <a
                  href="/contact"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Contact
                </a>
              </ul>
            </div>

            <div className=" space-y-4 mt-5">
              <h5 className=" text-white text-xl">Plate-forme</h5>
              <ul className=" space-y-2">
                <a
                  href="/"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Accueil
                </a>
                <a
                  href="/service"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Services
                </a>
                <a
                  href="/realisations"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Réqlisations
                </a>
                <a
                  href="/tarif"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Tarifs
                </a>
                <a
                  href="/contact"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Contact
                </a>
              </ul>
            </div>

            <div className=" space-y-4 mt-5">
              <h5 className=" text-white text-xl">Plate-forme</h5>
              <ul className=" space-y-2">
                <a
                  href="/"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Accueil
                </a>
                <a
                  href="/service"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Services
                </a>
                <a
                  href="/realisations"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Réqlisations
                </a>
                <a
                  href="/tarif"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Tarifs
                </a>
                <a
                  href="/contact"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Contact
                </a>
              </ul>
            </div>
          </motion.div>
        </div>
        {/* hr */}
        <hr />
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" flex flex-col sm:flex-row gap-8 sm:items-center justify-between py-8"
        >
          <p className=" text-base text-slate-300">
            @ Artha Beauté 2023, tous droits réservés
          </p>
          <div className="flex items-center space-x-5">
            <img
              className=" w-10 h-10 cursor-pointer hover:-translate-y-4 transition-all duration-300"
              src="../../public/X.png"
              alt="réseaux"
            />
            <img
              className=" w-10 h-10 cursor-pointer hover:-translate-y-4 transition-all duration-300"
              src="../../public/instagram.png"
              alt="réseaux"
            />
            <img
              className=" w-10 h-10 cursor-pointer hover:-translate-y-4 transition-all duration-300"
              src="../../public/facebook.png"
              alt="réseaux"
            />
            <img
              className=" w-22 h-12 cursor-pointer hover:-translate-y-4 transition-all duration-300"
              src="../../public/tiktok.png"
              alt="réseaux"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Footer;
