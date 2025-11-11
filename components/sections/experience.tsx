import React from "react";

const Experience = () => {
  return (
    <>
      <div className="screen-line-after border-x border-edge">
        <div className="px-4 py-4">
          <h2 className="text-lg font-poppins font-semibold mb-3 flex items-center gap-2">
            work experience
          </h2>

          <div className="space-y-3">
            <div className="border-t border-edge">
              <div className="py-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins font-medium">
                    upwork — project builds
                  </span>
                  <span className="text-xs opacity-75 font-poppins">
                    completed
                  </span>
                </div>
                <p className="text-sm font-poppins opacity-90 mt-1">
                  designed and shipped end‑to‑end features for client apps, from
                  auth to deployment.
                </p>
              </div>
            </div>

            <div className="border-t border-edge">
              <div className="py-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins font-medium">
                    upwork — issue fixes
                  </span>
                  <span className="text-xs opacity-75 font-poppins">
                    completed
                  </span>
                </div>
                <p className="text-sm font-poppins opacity-90 mt-1">
                  debugged production issues and resolved bugs across the web apps
                </p>
              </div>
            </div>

            <div className="border-t border-edge">
              <div className="py-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins font-medium">
                    upwork — ongoing project
                  </span>
                  <span className="text-xs opacity-75 font-poppins">
                    current
                  </span>
                </div>
                <p className="text-sm font-poppins opacity-90 mt-1">
                  building end‑to‑end web apps for client
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;


