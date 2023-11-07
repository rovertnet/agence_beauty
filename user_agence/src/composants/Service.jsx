function Service() {
  return (
    <>
      <div
        className=" md:px-12 p-4 max-w-screen-2xl mx-auto py-10 bg-[#eeeeee]"
        id="service"
      >
        <div className=" md:p-9 px-4 py-9">
          <div className=" flex flex-col md:flex-row justify-center items-center gap-10">
            <div className=" bg-white shadow-md rounded-md px-6 py-5 hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  className=" items-center"
                  src="../../public/icons/ico3.png"
                  alt=""
                />
                <h5 className=" text-center text-2xl font-semibold text-violet-600 py-3">
                  Maquillage
                </h5>
                <p className=" text-center text-base ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos velit numquam rerum officiis quis,
                </p>
              </div>
            </div>
            <div className=" bg-white shadow-md rounded-md px-6 py-5 hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  className=" items-center"
                  src="../../public/icons/ico2.png"
                  alt=""
                />
                <h5 className=" text-center text-2xl font-semibold text-violet-600 py-3">
                  Coiffure Femme
                </h5>
                <p className=" text-center text-base ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos velit numquam rerum officiis quis,
                </p>
              </div>
            </div>
            <div className=" bg-white shadow-md rounded-md px-6 py-5 hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  className=" items-center"
                  src="../../public/icons/ico1.png"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Service