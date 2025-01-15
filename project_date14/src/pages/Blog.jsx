
const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white text-center py-8">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-xl mt-2">Sharing insights, tutorials, and stories</p>
      </header>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Post Title One</h2>
            <p className="text-gray-600 mb-4">
              This is a short summary of the first blog post. Learn more about web development, JavaScript, and other programming topics.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Post Title Two</h2>
            <p className="text-gray-600 mb-4">
              This post discusses the latest trends in UI/UX design. Understand the principles of creating user-friendly interfaces.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Post Title Three</h2>
            <p className="text-gray-600 mb-4">
              This article covers the importance of performance optimization in modern web applications and tools you can use.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-l-lg hover:bg-blue-700">
            Previous
          </button>
          <button className="bg-blue-600 text-white py-2 px-6 hover:bg-blue-700">
            1
          </button>
          <button className="bg-blue-600 text-white py-2 px-6 hover:bg-blue-700">
            2
          </button>
          <button className="bg-blue-600 text-white py-2 px-6 hover:bg-blue-700">
            3
          </button>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-r-lg hover:bg-blue-700">
            Next
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default Blog;
