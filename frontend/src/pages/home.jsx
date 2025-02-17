import React, { useState, useEffect } from 'react';

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const circle1 = document.getElementById("circle1");
      const circle2 = document.getElementById("circle2");
      const circle3 = document.getElementById("circle3");

      if (circle1 && circle2 && circle3) {
        circle1.style.transform = `scale(${1 + scrollY * 0.001})`;
        circle2.style.transform = `scale(${1 + scrollY * 0.0005})`;
        circle3.style.transform = `scale(${1 + scrollY * 0.0008})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Circles (Fixed & Behind Everything) */}
      <div className="fixed inset-0 -z-10 flex justify-center items-center">
        <div
          id="circle1"
          className="absolute w-[800px] h-[800px] bg-cyan-300 rounded-full opacity-30 -top-96 -left-96 transform transition-transform duration-0"
        ></div>
        <div
          id="circle2"
          className="absolute w-[1000px] h-[1000px] bg-indigo-300 rounded-full opacity-30 -top-96 -right-96 transform transition-transform duration-0"
        ></div>
        <div
          id="circle3"
          className="absolute w-[1200px] h-[1200px] bg-violet-300 rounded-full opacity-30 -bottom-96 -left-1/2 transform transition-transform duration-0"
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="h-screen flex items-center justify-center text-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-4">IDKBRO</h1>
            <p className="text-xl text-gray-600 mb-8">
            Integrating LLMs and Neural Networks in Education.
            </p>
            <div className="mt-6">
              {username ? (
                <p className="text-lg font-medium text-blue-600">Welcome, {username}!</p>
              ) : (
                <a
                  href="/login"
                  className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-500 transition"
                >
                  Log In
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div
                onClick={() => (window.location.href = '/')}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-blue-600 text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Assistant</h3>
                <p className="text-gray-600">
                  Interact with a smart AI assistant to get answers and perform tasks.
                </p>
              </div>

              {/* Feature 2 */}
              <div
                onClick={() => (window.location.href = '/')}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-slate-600 text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analytics</h3>
                <p className="text-gray-600">
                  Analyze and visualize your data with powerful tools.
                </p>
              </div>

              {/* Feature 3 */}
              <div
                onClick={() => (window.location.href = '/')}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-violet-600 text-5xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automation</h3>
                <p className="text-gray-600">
                  Automate repetitive tasks and save time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Section (Example) */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 text-center">
              Our platform combines cutting-edge AI technology with user-friendly tools to help you
              achieve your goals faster and more efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
