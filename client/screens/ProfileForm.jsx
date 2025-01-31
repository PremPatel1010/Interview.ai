import { Brain, FileText, Upload, User } from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    yearsOfExperience: "",
    jobRole: "",
    resume: null ,
  });

  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && (file.type === "application/pdf" || file.type === "application/msword" || 
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert("Please upload a PDF or Word document");
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && (file.type === "application/pdf" || file.type === "application/msword" || 
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert("Please upload a PDF or Word document");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically:
    // 1. Upload the resume to your server
    // 2. Process it with your AI
    // 3. Generate interview questions
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Brain className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Create Your Profile
          </h1>
          <p className="text-lg text-gray-600">
            Let our AI analyze your resume and create personalized interview questions
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience
                  </label>
                  <select
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    required
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Job Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Job Information
              </h2>

              <div>
                <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700 mb-1">
                  Desired Job Role
                </label>
                <select
                  id="jobRole"
                  name="jobRole"
                  required
                  value={formData.jobRole}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select role</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                  <option value="fullstack">Full Stack Developer</option>
                  <option value="devops">DevOps Engineer</option>
                  <option value="mobile">Mobile Developer</option>
                  <option value="data">Data Scientist</option>
                </select>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume
                </label>
                <div 
                  className={`border-2 border-dashed rounded-lg p-8 text-center ${
                    dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center">
                    <Upload className="w-12 h-12 text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">
                      {formData.resume ? formData.resume.name : 'Drag and drop your resume here, or'}
                    </p>
                    <label htmlFor="resume" className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
                      Browse files
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      Supported formats: PDF, DOC, DOCX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Brain className="w-5 h-5" />
                <span>Generate Interview Questions</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;