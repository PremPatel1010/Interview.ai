import { Code2, Cpu, Database, Globe, Layout, Shield, Sparkles, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Secure Authentication",
      description: "Robust user authentication system with email & password, complete with social login options."
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      title: "Responsive Design",
      description: "Beautiful, modern interface that works flawlessly across all devices and screen sizes."
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: "Clean Code",
      description: "Written with TypeScript and modern React best practices for maintainability and scalability."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Performance Optimized",
      description: "Built with Vite for lightning-fast development and optimal production performance."
    }
  ];

  const techStack = [
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      name: "React",
      description: "Frontend library for building user interfaces"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
      name: "TailwindCSS",
      description: "Utility-first CSS framework"
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      name: "TypeScript",
      description: "Typed JavaScript for better development"
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      name: "Vite",
      description: "Next generation frontend tooling"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Modern Authentication</span>
                  <span className="block text-blue-600">Development Project</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A showcase project demonstrating modern web development practices, including secure authentication, responsive design, and clean architecture.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need in a modern web app
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Tech Stack</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Built with modern technologies
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-50 mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Development Goals Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Development Goals</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Showcasing Best Practices
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              This project was developed to demonstrate proficiency in modern web development, focusing on:
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="bg-blue-50 p-6 rounded-lg">
                <dt className="text-lg leading-6 font-medium text-gray-900">Clean Architecture</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Implementing proper separation of concerns and maintainable code structure.
                </dd>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <dt className="text-lg leading-6 font-medium text-gray-900">Modern UI/UX</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Creating intuitive and aesthetically pleasing user interfaces.
                </dd>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <dt className="text-lg leading-6 font-medium text-gray-900">Security Best Practices</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Implementing secure authentication and authorization patterns.
                </dd>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <dt className="text-lg leading-6 font-medium text-gray-900">Performance Optimization</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Ensuring fast load times and smooth user experience.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;