import React from 'react';

const Adminheader = ({isSidebarOpen}) => {
  return (
   <>
   <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
            <ul className="flex space-x-4">
              <li>
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={toggleSidebar}
                >
                  <i className={`fas ${isSidebarOpen ? "fa-bars" : "fa-bars"}`}></i>
                </button>
              </li>
              <li className="hidden sm:block">
                <a
                  href="assets/index3.html"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Home
                </a>
              </li>
              <li className="hidden sm:block">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="flex space-x-4 items-center">
              <li>
                <button
                  className="text-gray-600 hover:text-gray-800"
                  data-widget="navbar-search"
                  role="button"
                >
                  <i className="fas fa-search"></i>
                </button>
              </li>

              <li className="relative">
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={toggleMessages}
                >
                  <i className="far fa-comments"></i>
                  <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-2 py-1">
                    3
                  </span>
                </button>
                {isMessagesOpen && (
                  <div className="absolute right-0 w-72 mt-2 bg-white shadow-lg rounded-md p-2">
                    <div className="flex items-start p-2">
                      <img
                        src="assets/dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Brad Diesel
                          <span className="text-xs text-red-500 float-right">
                            <i className="fas fa-star"></i>
                          </span>
                        </h3>
                        <p className="text-xs text-gray-600">
                          Call me whenever you can...
                        </p>
                        <p className="text-xs text-gray-500">
                          <i className="far fa-clock mr-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="block text-center text-sm text-blue-500 mt-2"
                    >
                      See All Messages
                    </a>
                  </div>
                )}
              </li>

              <li>
                <button
                  className="text-gray-600 hover:text-gray-800"
                  data-widget="fullscreen"
                  role="button"
                >
                  <i className="fas fa-expand-arrows-alt"></i>
                </button>
              </li>
            </ul>
          </nav>
   </>
  );
};

export default Adminheader;
