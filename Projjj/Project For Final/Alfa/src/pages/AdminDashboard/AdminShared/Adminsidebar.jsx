import React from "react";

const Adminsidebar = ({toggleSidebar,isSidebarOpen}) => {
  return (
    <>
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-[#780C28] text-white p-4 transition-width duration-300`}
      >
        <div className="flex items-center mb-6">
          <button className="text-white" onClick={toggleSidebar}>
            <i
              className={`fas ${
                isSidebarOpen ? "fa-chevron-left" : "fa-chevron-right"
              }`}
            ></i>
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
                    <i
                      className={`fas ml-auto ${
                        isUserManagementOpen ? "fa-angle-down" : "fa-angle-left"
                      }`}
                    ></i>
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
    </>
  );
};

export default Adminsidebar;
