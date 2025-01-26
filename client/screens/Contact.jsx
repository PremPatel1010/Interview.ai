import { Code2, Github, Linkedin, Mail, MapPin, MessageSquare, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-20 pb-12 mt-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Let's Build Something <span className="text-blue-600">Amazing</span> Together
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I'm passionate about collaborating with fellow developers to create innovative solutions 
          and tackle challenging projects.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Contact Information Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Section */}
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
              <Mail className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <a href="mailto:premrpatel2007@gmail.com" 
                   className="text-blue-600 hover:text-blue-700 transition-colors">
                  premrpatel2007@gmail.com
                </a>
              </div>
            </div>

            {/* Location Section */}
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
              <MapPin className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Ahmedabad, India</p>
                <p className="text-gray-500 text-sm">Open to Remote Collaboration</p>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
              <div className="w-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Connect</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/PremPatel1010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 flex-1 justify-center"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                    <span className="text-gray-600">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/prem-patel-0047ba31b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 flex-1 justify-center"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700" />
                    <span className="text-gray-600">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Collaborate With Me?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <MessageSquare className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Open Discussion</h3>
              <p className="text-gray-600 leading-relaxed">
                Always eager to brainstorm ideas and explore new possibilities in software development.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <Code2 className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Code Together</h3>
              <p className="text-gray-600 leading-relaxed">
                Passionate about clean code, best practices, and learning from fellow developers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <Users className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Build Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Let's grow together and create a strong network of skilled developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;