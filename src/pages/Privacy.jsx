import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, LockClosedIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const Privacy = () => {
  const sections = [
    {
      title: "Services Data Protection",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      content: [
        "All project and client data is encrypted and stored securely",
        "Access to service-related information is strictly controlled",
        "Regular security audits and updates",
        "Secure payment processing through trusted providers",
        "Client confidentiality agreements"
      ]
    },
    {
      title: "Internship Program Privacy",
      icon: <LockClosedIcon className="w-8 h-8" />,
      content: [
        "Protection of intern personal information",
        "Secure handling of application materials",
        "Confidential evaluation and feedback process",
        "Limited access to intern records",
        "Data retention policies for internship records"
      ]
    },
    {
      title: "Hackathon Data Security",
      icon: <DocumentTextIcon className="w-8 h-8" />,
      content: [
        "Secure storage of participant information",
        "Protection of project submissions and intellectual property",
        "Confidential judging process",
        "Secure virtual event platforms",
        "Clear data usage guidelines for participants"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-primary py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-600 rounded-lg text-white">
                  {section.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Data Collection and Usage
          </h2>
          <div className="space-y-6 text-gray-300">
            <p>
              We collect and process your personal information only for specific, explicit, and legitimate purposes directly related to our services, internship programs, and hackathon events.
            </p>
            <p>
              Your data is protected using industry-standard security measures and is only accessed by authorized personnel who need it to provide our services.
            </p>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected and to comply with applicable laws and regulations.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-bold text-white">Your Rights</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Right to access your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Right to request data correction or deletion</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Right to withdraw consent at any time</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Right to file a complaint with supervisory authorities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            For any privacy-related questions or concerns, please contact our Data Protection Officer.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 px-6 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 