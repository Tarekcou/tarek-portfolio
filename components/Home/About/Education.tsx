import React from "react";

const Education = () => {
  return (
    <div className="shadow-lg">
      <section className="mx-auto py-8 max-w-4xl">
        <h2 className="mb-6 font-semibold text-purple-400 text-2xl md:text-3xl text-center">
          Educational Qualifications
        </h2>

        <div className="space-y-4">
          {/* M.Sc. Qualification */}
          <div className="bg-blue-950 shadow-xl p-3 px-6 border-primary border-l-4 rounded-xl text-white/80 card">
            <h3 className="font-bold text-base md:text-xl">
              M.Sc. Information & Communication Technology (ICT)
            </h3>
            <p className="mt-2 text-xs md:text-base">
              <strong>University:</strong> Comilla University
            </p>
            <p className="text-xs md:text-base">
              <strong>Year:</strong> 2019
            </p>
          </div>

          {/* B.Sc. Qualification */}
          <div className="bg-blue-950 shadow-xl p-3 px-6 border-primary border-l-4 rounded-xl text-white/80 card">
            <h3 className="font-bold text-base md:text-xl">
              B.Sc. Information & Communication Technology (ICT)
            </h3>
            <p className="mt-2 text-xs md:text-base">
              <strong>University:</strong> Comilla University
            </p>
            <p className="text-xs md:text-base">
              <strong>Year:</strong> 2018
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
