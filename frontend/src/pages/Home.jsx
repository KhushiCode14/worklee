import { motion } from "framer-motion";
import Trusted from "../components/Trusted";
import { Button } from "../components/ui/button";
const Home = () => {
  const sentence = `How work
should work`;
  const typingEffect = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const letterEffect = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center px-10 pb-10 text-sm text-gray-800 bg-white lg:px-24 lg:">
      {/* Main Content Section */}
      <div className="flex flex-col-reverse items-center gap-y-12 md:flex-row md:items-center md:justify-between lg:gap-x-16 max-md:items-start">
        {/* Left Section */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={typingEffect}
            className="text-5xl md:text-6xl lg:text-7xl leading-tight text-black hover:text-[#14A800] font-inter font-medium max-md:text-4xl max-sm:text-start
            "
            style={{ whiteSpace: "pre-wrap" }}
          >
            {sentence.split("").map((char, index) => (
              <motion.span key={index} variants={letterEffect}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <p className="mt-7 text-2xl text-gray-600 font-['Arial'] max-sm:text-start max-sm:mt-2">
            Forget the old rules. You can have the best people. Right now. Right
            here.
          </p>
          <div className="flex justify-center gap-4 mt-6 max-md:items-start lg:justify-start">
            <Button
              type="button"
              links="/"
              variant="default"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center lg:w-1/2 lg:justify-end"
        >
          <img
            src="/home.webp"
            alt="home"
            className="max-md:hidden object-contain lg:h-[500px] lg:w-[500px] h-[400px] w-[400px]"
          />
        </motion.div>
      </div>

      {/* Trusted Section */}
      <div className="w-full">
        <Trusted />
      </div>
    </div>
  );
};

export default Home;
