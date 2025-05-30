"use client";

import { caseStudies } from "../data";

const CaseStudies = () => {
  return (
    <div className="py-20 bg-black-200" id="case-studies">
      <h1 className="heading">
        <span className="text-purple">Strategic Interventions</span>
      </h1>
      <p className="text-center max-w-3xl mx-auto mb-10 text-lg">
        Quick, decisive actions that changed outcomes for our clients. The BD Mafia gets results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-black-100 p-6 rounded-xl hover:shadow-lg hover:shadow-purple/20 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{study.icon}</div>
            <h3 className="text-xl font-bold mb-2">{study.title}</h3>
            <p className="text-gray-400">{study.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;