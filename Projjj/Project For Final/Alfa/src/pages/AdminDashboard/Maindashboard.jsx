import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Maindashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isUserManagementOpen, setUserManagementOpen] = useState(false);
  const [isMessagesOpen, setMessagesOpen] = useState(false); 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleUserManagement = () => {
    setUserManagementOpen(!isUserManagementOpen);
  };

  const toggleMessages = () => {
    setMessagesOpen(!isMessagesOpen); // Toggle messages dropdown
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "w-64" : "w-20"
          } bg-[#780C28] text-white p-4 transition-width duration-300`}
        >
          <div className="flex items-center mb-6">
            <button
              className="text-white"
              onClick={toggleSidebar}
            >
              <i className={`fas ${isSidebarOpen ? "fa-chevron-left" : "fa-chevron-right"}`}></i>
            </button>
            {isSidebarOpen && (
              <div className="ml-4 text-xl font-semibold">Hotel Admin</div>
            )}
          </div>

          <div>
            {/* Sidebar Menu */}
            <nav>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/dashboard"
                    className="flex items-center space-x-2 text-white hover:text-gray-300"
                  >
                    <i className="fas fa-tachometer-alt"></i>
                    {isSidebarOpen && <span>Dashboard</span>}
                  </a>
                </li>

                <li>
                  <button
                    className="flex items-center space-x-2 text-white hover:text-gray-300 w-full text-left"
                    onClick={toggleUserManagement}
                  >
                    <i className="fa-solid fa-people-roof"></i>
                    {isSidebarOpen && <span>User Management</span>}
                    {isSidebarOpen && (
                      <i className={`fas ml-auto ${isUserManagementOpen ? "fa-angle-down" : "fa-angle-left"}`}></i>
                    )}
                  </button>
                  {isUserManagementOpen && isSidebarOpen && (
                    <ul className="ml-4 space-y-2">
                      <li>
                        <a
                          href="/add-user"
                          className="text-white hover:text-gray-300"
                        >
                          Add User
                        </a>
                      </li>
                      <li>
                        <a
                          href="/manage-user"
                          className="text-white hover:text-gray-300"
                        >
                          Manage User
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <a
                    href="/logout"
                    className="flex items-center space-x-2 text-white hover:text-gray-300"
                  >
                    <i className="fa-solid fa-right-from-bracket"></i>
                    {isSidebarOpen && <span>Log Out</span>}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
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
                  onClick={toggleMessages} // Toggling the messages dropdown
                >
                  <i className="far fa-comments"></i>
                  <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-2 py-1">
                    3
                  </span>
                </button>
                {/* Messages Dropdown */}
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
          {/* Main Dashboard Content (Outlet for nested routes) */}
          <Outlet />
        </div>
      </div>

      {/* Footer */}
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

export default Maindashboard;
