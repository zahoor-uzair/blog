import React from "react";

const Footer = () => {
  const links = [
    {
      title: "Product",
      items: ["Overview", "Features", "Solutions"],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News"],
    },
    {
      title: "Resources",
      items: ["Blog", "Newsletter", "Events", "Help center"],
    },
    {
      title: "Use cases",
      items: ["Startups", "Enterprise", "Government", "Saas"],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {links.map((link) => (
            <div key={link.title}>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {link.title}
              </h3>
              <div className="flex flex-col items-start mt-4 space-y-4">
                {link.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <a href="#">
            <img className="w-auto h-16" src="/sherlock-logo.png" alt="" />
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
            © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
