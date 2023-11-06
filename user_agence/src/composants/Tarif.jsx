import { useState } from "react";

function Tarif() {
  const [togglePrix, setTogglePrix] = useState(false);
  const packages = [
    {
      name: "Jour",
      adomicil: 20,
      salon: 15,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta",
      logo: "../../public/checked.png",
    },
    {
      name: "Soir",
      adomicil: 25,
      salon: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta",
      logo: "../../public/checked.png",
    },
    {
      name: "Mariage",
      adomicil: 55,
      salon: 50,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta",
      logo: "../../public/checked.png",
    },
  ];
  return (
    <>
      <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="tarif">
        <div className="text-center">
          <h2 className=" md:text-4xl text-3xl font-extrabold text-black mb-2">
            Nos tarifs
          </h2>
          <p className=" text-slate-500 md:w-1/3 mx-auto px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            aliquid dolorum quam, aperiam illo possimus veniam,
          </p>

          {/* Toggle prix */}
          <div className=" mt-8">
            <label
              htmlFor="Toggleprix"
              className=" inline-flex items-center cursor-pointer"
            >
              <span className=" mr-8 font-semibold text-2xl">Mariage</span>
              <div className=" w-14 h-6 bg-gray-300 rounded-full transition duration-300 ease-in-out">
                <div
                  className={` w-6 h-6 rounded-full transition duration-300 ease-in-out space-x-3 ${
                    togglePrix ? " bg-black ml-8" : " bg-gray-400"
                  }`}
                ></div>
              </div>
              <span className=" mr-8 font-semibold text-2xl">Autres</span>
            </label>
            <input
              type="checkbox"
              id="toggle"
              className="hidden"
              checked={togglePrix}
              onChange={() => setTogglePrix(!togglePrix)}
            />
          </div>
        </div>
        {/*  */}
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border py-10 md:px-14 px-4 rounded-3xl shadow-xl border-violet-600"
            >
              <h3 className="text-3xl font-bold text-center text-black">
                {pkg.name}
              </h3>
              <p className=" text-gray-500 text-center my-5">
                {pkg.description}
              </p>
              <p className=" mt-5 text-center text-violet-600 text-4xl font-bold">
                {togglePrix ? `$${pkg.adomicil}` : `$${pkg.salon}`}
                <span className=" text-base text-gray-400 font-medium">
                  /{togglePrix ? "Mariage" : "Autres"}
                </span>
              </p>
              <ul className=" mt-4 space-y-2 px-4">
                <li className=" flex gap-3 items-center">
                  <img src={pkg.logo} alt="" className=" w-4 h-4" />
                  Maquillage
                </li>
                <li className=" flex gap-3 items-center">
                  <img src={pkg.logo} alt="" className=" w-4 h-4" />
                  Pose cils--<span className="text-violet-600">$5</span>
                </li>
                <li className=" flex gap-3 items-center">
                  <img src={pkg.logo} alt="" className=" w-4 h-4" />
                  Bonus
                </li>
                <li className=" flex gap-3 items-center">
                  <img src={pkg.logo} alt="" className=" w-4 h-4" />
                  Bonus
                </li>
                <li className=" flex gap-3 items-center">
                  <img src={pkg.logo} alt="" className=" w-4 h-4" />
                  Bonus
                </li>
              </ul>
              <div className=" w-full mx-auto mt-8 flex items-center justify-center">
                <button className=" bg-violet-600 text-xl text-white px-4 p-3 rounded-3xl hover:border hover:border-violet-600 hover:bg-white hover:text-violet-600 transition-all duration-300">
                  Choisissez
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tarif