const Footer = () => {
    return (
      <>
        <footer className="bg-gradient-to-r from-neutral to-accent text-white py-10">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            {/* Copyright Section */}
            <p className="text-lg text-center mb-6">
              &copy; 2025{" "}
              <strong className="text-primary text-xl">Shahriar Naiem Rafi</strong>.
              All rights reserved.
            </p>
  
            {/* Social Links Section */}
            <div className="flex justify-center space-x-8 mb-6">
              <a
                href="https://github.com/shahriarnaiem-rafi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary focus:text-primary transition-colors text-3xl"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shahriar-naiem-ba26a7322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary focus:text-primary transition-colors text-3xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:shahriarnaiemrafi33@gmail.com"
                className="text-white hover:text-primary focus:text-primary transition-colors text-3xl"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
  
            {/* Optional Call to Action */}
            <div className="text-center text-xl">
              <p className="italic">
                Interested in collaborating?{" "}
                <span className="font-semibold">Feel free to reach out!</span>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;
  