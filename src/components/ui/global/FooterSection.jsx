import { useState, useEffect } from "react";

const FooterSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const contactItems = [
    {
      icon: "📞",
      label: "Phone",
      value: "7202053100",
      href: "tel:7202053100",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "surajdudhatra02@gmail.com",
      href: "mailto:surajdudhatra02@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/suraj-dudhatra",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/surajdudhatra02",
    },
    {
      icon: "🧩",
      label: "LeetCode",
      value: "LeetCode Profile",
      href: "https://leetcode.com/u/surajdudhatra/",
    },
    {
      icon: "🏆",
      label: "HackerRank",
      value: "HackerRank Profile",
      href: "https://www.hackerrank.com/profile/surajdudhatra",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="container px-4 md:px-6 lg:px-8 mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Let's connect and build something amazing together
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                className="block group"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 transition-all duration-300 hover:bg-gray-800/70 hover:border-gray-600 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-gray-400 text-sm break-all group-hover:text-gray-300 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
