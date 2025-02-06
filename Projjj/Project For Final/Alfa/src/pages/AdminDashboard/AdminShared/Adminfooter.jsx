import React from "react";

const Adminfooter = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <strong>
              Copyright &copy; 2014-2021{" "}
              <a
                href="https://adminlte.io"
                className="text-blue-400 hover:underline"
              >
                AdminLTE.io
              </a>
              . All rights reserved.
            </strong>
          </div>
          <div className="text-sm">
            <b>Version</b> 3.2.0
          </div>
        </div>
      </footer>
    </>
  );
};

export default Adminfooter;
