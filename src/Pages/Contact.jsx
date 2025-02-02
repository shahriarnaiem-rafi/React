

const Contact = () => {
  return <>
  
  <footer class="bg-base-200 text-base-content py-6">
  <div class="max-w-6xl mx-auto text-center">
    {/* <!-- Contact Heading --> */}
    <h2 class="text-4xl font-semibold text-primary mb-4">
      Get in Touch
    </h2>

    {/* <!-- Contact Description --> */}
    <p class="text-lg mb-6">
      I’m always open to new opportunities and collaborations. Feel free to contact me, and let's create something great together!
    </p>

    {/* <!-- Social Links Section --> */}
    <div class="flex justify-center space-x-6 mb-6">
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-focus text-3xl transition-colors">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-focus text-3xl transition-colors">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:your-email@example.com" class="text-primary hover:text-primary-focus text-3xl transition-colors">
        <i class="fas fa-envelope"></i>
      </a>
    </div>

    {/* <!-- Optional Call to Action --> */}
    <div class="text-lg text-neutral">
      <p>If you'd like to discuss a project or need more information, don’t hesitate to reach out!</p>
    </div>
  </div>
</footer>

  </>;
};

export default Contact;
