import { Brain, Code2, MessageSquare, Mic, PlayCircle, Notebook as Robot, Shield, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 mt-10">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Robot className="w-24 h-24 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Master Your Interviews with
            <span className="text-blue-600 block mt-2">AI-Powered Practice</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Practice interviews anytime, anywhere with our advanced AI interviewer. 
            Get real-time feedback and improve your interview skills with personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/profile-form">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <PlayCircle className="w-5 h-5" />
              <span>Start Practice</span>
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Prepare Smarter, Interview Better
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <div className="bg-blue-100 rounded-xl p-3 w-fit mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Questions</h3>
              <p className="text-gray-600">
                Dynamic questions adapted to your experience level and industry, powered by advanced AI algorithms.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <div className="bg-blue-100 rounded-xl p-3 w-fit mb-6">
                <Mic className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Feedback</h3>
              <p className="text-gray-600">
                Get instant feedback on your responses, including clarity, relevance, and areas for improvement.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
              <div className="bg-blue-100 rounded-xl p-3 w-fit mb-6">
                <Code2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Interviews</h3>
              <p className="text-gray-600">
                Practice coding challenges and system design questions with interactive feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Platform?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-xl p-3">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Industry-Specific Questions
                  </h3>
                  <p className="text-gray-600">
                    Tailored questions for different roles and industries, from software development to data science.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-xl p-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Mock Interviews
                  </h3>
                  <p className="text-gray-600">
                    Realistic interview simulations with varying difficulty levels and interview styles.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-xl p-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Privacy Focused
                  </h3>
                  <p className="text-gray-600">
                    Your practice sessions are private and secure, with data encryption and user privacy controls.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-xl p-3">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-gray-600">
                    Track your progress and receive personalized recommendations for improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start practicing now and build the confidence you need to succeed.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
            <PlayCircle className="w-5 h-5" />
            <span>Begin Your Practice Session</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;