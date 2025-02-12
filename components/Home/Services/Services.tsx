import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const services = [
  {
    title: "Web Applications",
    description: "Tailored web apps built with the latest technologies.",
    icon: "🌐",
  },
  {
    title: "E-commerce Websites",
    description:
      "Secure online stores with user-friendly shopping and payments.",
    icon: "🛒",
  },
  {
    title: "API Integration",
    description:
      "Seamless integration for smooth data sharing and functionality.",
    icon: "🔗",
  },
  {
    title: "User Interfaces",
    description:
      "Engaging, responsive front-end designs for better user experiences.",
    icon: "🖥️",
  },
  {
    title: "Database Solutions",
    description:
      "Efficient and scalable database management for your data needs.",
    icon: "💾",
  },
  {
    title: "Real-Time Features",
    description: "Add live chat, notifications, and real-time data updates.",
    icon: "⏱️",
  },
  {
    title: "Speed Optimization",
    description: "Boost performance with faster load times and optimization.",
    icon: "⚡",
  },
  {
    title: "Website Management",
    description: "Easy content management systems with flexible controls.",
    icon: "📋",
  },
];

const Services = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto py-12 w-11/12 md:w-10/12 text-white">
        <div className="mx-auto text-center container">
          <div className="flex items-center my-5 w-full">
            <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-3xl md:text-4xl -rotate-3 transform">
              Services
            </h2>
          </div>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Tilt>
                  <Card className="items-center bg-purple-800 shadow-lg border-none rounded-xl h-[150px] md:h-[220px] text-white">
                    <CardContent className="flex flex-col justify-center items-start h-full">
                      <div className="text-5xl">{service.icon}</div>
                      <h3 className="my-1 font-semibold text-xl text-start">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 text-sm text-start">
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
