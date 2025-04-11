import { FaShieldAlt, FaUserLock, FaFileAlt, FaGlobeAmericas } from 'react-icons/fa';

export const privacyFeatures = [
  {
    icon: <FaShieldAlt className="h-8 w-8 text-orange-500" />,
    title: "Data Protection",
    description: "Advanced security measures to protect your information"
  },
  {
    icon: <FaUserLock className="h-8 w-8 text-orange-500" />,
    title: "Privacy Rights",
    description: "Control over your personal data and how it's used"
  },
  {
    icon: <FaFileAlt className="h-8 w-8 text-orange-500" />,
    title: "Transparency",
    description: "Clear information about data collection and usage"
  },
  {
    icon: <FaGlobeAmericas className="h-8 w-8 text-orange-500" />,
    title: "Global Compliance",
    description: "Adherence to international privacy standards"
  }
];

export const privacySections = [
  {
    title: "Introduction",
    content: (
      <>
        <p className="mb-4">
          This privacy notice for Prodigy InfoTech ('Company', 'we', 'us', or 'our') describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services').
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Visit our website at <a href="https://kaleidonex.org/" className="text-orange-500 hover:text-orange-600">kaleidonex.org</a></li>
          <li className="mb-2">Engage with us in other related ways, including sales, marketing, or events</li>
        </ul>
      </>
    )
  },
  {
    title: "Information Collection",
    content: (
      <>
        <p className="mb-4">We collect personal information that you voluntarily provide to us when you:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Express interest in our services</li>
          <li className="mb-2">Interact with our website</li>
          <li className="mb-2">Contact us for support</li>
        </ul>
      </>
    )
  },
  {
    title: "Our Location",
    content: (
      <>
        <p className="mb-4">
          You can find our office at the following location. Feel free to visit us during business hours:
        </p>
        
        {/* Map Container */}
        <div className="w-full mb-6">
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.8380092847644!2d85.73731081501737!3d25.634306883697433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM4JzAzLjUiTiA4NcKwNDQnMjMuMSJF!5e0!3m2!1sen!2sin!4v1710481234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Prodigy InfoTech Location"
            ></iframe>
          </div>
        </div>

        {/* Location Details */}
        <div className="bg-orange-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Contact Information</h3>
          <div className="space-y-2">
            <p className="flex items-center text-gray-700">
              <span className="font-medium mr-2">Coordinates:</span>
              25°38'03.5"N 85°44'23.1"E
            </p>
            <p className="flex items-center text-gray-700">
              <span className="font-medium mr-2">Address:</span>
              Bihar Sharif, Bihar, India
            </p>
            <p className="flex items-center text-gray-700">
              <span className="font-medium mr-2">Email:</span>
              <a href="mailto:contact@prodigyinfotech.dev" className="text-orange-500 hover:text-orange-600">
                contact@prodigyinfotech.dev
              </a>
            </p>
            <p className="flex items-center text-gray-700">
              <span className="font-medium mr-2">Business Hours:</span>
              Monday - Friday: 9:00 AM - 6:00 PM IST
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 text-gray-800">Visit Information</h4>
          <p className="text-gray-600">
            If you're planning to visit our office, we recommend scheduling an appointment in advance. 
            This helps us ensure that we can provide you with the best possible assistance during your visit.
          </p>
        </div>
      </>
    )
  },
  // Add more sections as needed...
];

