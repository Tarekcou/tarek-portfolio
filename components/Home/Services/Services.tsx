import { servicesData } from "@/Data/data";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Services = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto py-12 w-11/12 md:w-10/12 text-white">
        <div className="mx-auto text-center container">
          <div className="flex items-center my-5 w-full">
            <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-2xl md:text-4xl -rotate-3 transform">
              Services
            </h2>
          </div>
          <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Tilt>
                  <Card className="items-center bg-purple-900 shadow-lg border-none rounded-xl h-[180px] md:h-[200px] text-white">
                    <CardContent className="flex flex-col justify-center items-start p-3 h-full">
                      <div className="text-4xl">
                        <img
                          className="bg-slate-50 w-8 md:w-10 text-white"
                          src={service.icon}
                          alt="service icon"
                        />
                      </div>
                      <h3 className="my-1 font-semibold text-base text-start">
                        {service.title}
                      </h3>
                      <p className="w-full text-gray-200 text-xs text-start borer">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
