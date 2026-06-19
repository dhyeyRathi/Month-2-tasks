import React, { useEffect, useState } from "react";
import clothes from "../assets/data/clothes.json";
import hero from "../assets/images/hero-bg.png";
import { motion } from "framer-motion";
import Card from "../components/Card";

const Home = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <></>;
  else {
    return (
      <div className="">
        <div
          aria-label="Hero-section"
          className={`h-screen w-full flex flex-col   justify-evenly items-center relative text-secondary`}
        >
          <img
            src={hero}
            alt="Hero-image"
            className="absolute  z-[-2] w-screen object-cover  shrink-0 overflow-hidden sm:w-full h-screen sm:h-full opacity-0 animate-fade-in-delayed animate-fade-slide-up animate-count-infinite "
          />
          <div className="absolute  z-[-2] w-full h-full bg-black/30 opacity-0 animate-fade-in-delayed animate-fade-slide-up"></div>

          <div
            aria-label="text-containers"
            className="text-center flex flex-col items-center "
          >
            <h1 className="font-bold  text-4xl sm:text-8xl text-secondary text-center animate-fade-slide-up">
              Timeless{" "}
              <span className="text-primary">
                Denim.
                <br className="sm:hidden" />{" "}
              </span>{" "}
              Modern <span className="text-primary">Style.</span>
            </h1>
            <h2 className="text-l sm:text-3xl animate-fade-slide-up mb-15 sm:mb-30">
              Crafted for those who wear confidence.
            </h2>

            <div
              aria-label="buttons"
              className="flex flex-col md:flex-row gap-4 "
            >
              <button
                className="bg-primary border-4 border-primary text-secondary  rounded-lg font-semibold px-8 py-4 text-xl 
          hover:bg-primary/0 hover:shadow-[0_0_20px] shadow-primary/60"
              >
                Shop for Men
              </button>

              <button
                className="bg-primary border-4 border-primary text-secondary  rounded-lg font-semibold px-8 py-4 text-xl 
          hover:bg-primary/0 hover:shadow-[0_0_20px] shadow-primary/60"
              >
                Shop for Women
              </button>

              <button
                className="bg-primary border-4 border-primary text-secondary  rounded-lg font-semibold px-8 py-4 text-xl 
          hover:bg-primary/0 hover:shadow-[0_0_20px] shadow-primary/60"
              >
                Shop for Kids
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          aria-label="products"
          className="h-auto w-full bg-bg-color flex justify-start py-4 lg:py-10 px-4 md:px-20 flex-col items-center"
        >
          <div className="text-center w-3/4 flex flex-col gap-4 py-10 pb-20">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl text-primary font-semibold">
              {" "}
              Hurry up and GRAB your fits now!
            </h1>
            <p className="text-s sm:text-md lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque provident velit quisquam possimus odio ipsa vel quidem
              maxime repellat sint? Expedita ipsa autem temporibus perferendis
              obcaecati rerum ullam ipsum reiciendis?
            </p>
          </div>

          <div
            aria-label="card-container"
            className=" w-full px-5 py-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {clothes.map((item, index) => (
              <motion.div
              key={item.id}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:100, y:0}}
              viewport={{once:true}}
              transition={{delay: index * 0.09}}>
              <Card
              className={''}
                key={item.id}
                title={item.name}
                price={item.price}
                image={item.image}
                stock={item.stock}
                colors={item.colors}
                desc={item.description}
                sizes={item.sizes}
                category={item.category}
              />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }
};

export default Home;
