import React from "react";

const About = () => {
  return (
    <section id="about" className="p-8 bg-base-200 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
        <div className="text-lg text-base-content">
          <p>
            Hi, I’m{" "}
            <strong className="text-primary">Shahriar Naiem Rafi</strong>, a
            passionate and creative <em>Web Developer</em>. With a strong
            foundation in{" "}
            <span className="text-accent">
              front-end and back-end development, including HTML, CSS,
              JavaScript, React, MySQL, PHP, and Laravel
            </span>
            , I’ve spent the last <span className="text-accent">6 months</span>{" "}
            completing an intensive web development course, honing my skills and
            working on various hands-on projects. Whether it’s{" "}
            <span className="text-accent">
              building responsive websites with Bootstrap, creating user-friendly
              interfaces with React, or developing dynamic web applications with
              Laravel and PHP
            </span>
            , I approach each project with a blend of precision, innovation, and
            a dedication to creating work that not only meets but exceeds
            expectations.
          </p>
          <br />
          <p>
            I’m always looking for new challenges and collaborations that allow
            me to grow and push my boundaries. My goal is to create impactful
            solutions that resonate with audiences and deliver real value. When
            I’m not working, you’ll find me{" "}
            <span className="text-accent">
              exploring new tech trends, working with MySQL databases, or hiking
              outdoors
            </span>
            .
          </p>

          <br />
          <p className="mt-4">
            Let’s connect and see how we can work together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
