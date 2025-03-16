import React from "react";

const Education = () => {
  return (
    <div className="shadow-lg">
      <section className="mx-auto">
        <h2 className="mb-6 font-semibold text-purple-400 text-xl md:text-2xl text-center">
          Educational Qualifications
        </h2>

        <div className="space-y-4">
          {/* M.Sc. Qualification */}
          <div className="space-y-1 bg-blue-950 shadow-xl p-3 px-6 border-primary border-l-4 rounded-xl text-white/80 card">
            <h3 className="font-bold text-xs md:text-base">
              M.Sc. Information & Communication Technology (ICT)
            </h3>
            <p className="mt-2 text-xs md:text-xs">
              <strong>University:</strong> Comilla University, Cumilla ,
              Bangladesh
            </p>
            <p className="text-xs md:text-xs">
              <strong>Year:</strong> 2019
            </p>
          </div>

          {/* B.Sc. Qualification */}
          <div className="space-y-1 bg-blue-950 shadow-xl p-3 px-6 border-primary border-l-4 rounded-xl text-white/80 card">
            <h3 className="font-bold text-xs md:text-base">
              B.Sc. Information & Communication Technology (ICT)
            </h3>
            <p className="mt-2 text-xs md:text-xs">
              <strong>University:</strong> Comilla University ,Cumilla,
              Bangladesh
            </p>
            <p className="text-xs md:text-xs">
              <strong>Year:</strong> 2018
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
