import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeCanvas } from 'qrcode.react';
import Cmlogo from "../assets/water.jpg"
// Import icons
import { 
  FaUserGraduate, 
  FaIdCard, 
  FaCalendarAlt, 
  FaUniversity,
  FaStamp,
  FaQrcode,
  FaTimes,
  FaLaptopCode,
  FaFileAlt,
} from 'react-icons/fa';
import { 
  MdVerified, 
  MdGrade,
  MdDateRange 
} from 'react-icons/md';

const CertificateVerification = () => {
  const { certificateId } = useParams(); // Get certificateId from URL
  const [showQR, setShowQR] = useState(false);
  const qrRef = useRef();
  
  const [certificateInput, setCertificateInput] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to verify certificate
  const verifyCertificate = async (id) => {
    setIsLoading(true);
    try {
      const docRef = doc(db, "certificate", id);
      const docValue = await getDoc(docRef);

      if (docValue.exists()) {
        const data = docValue.data();
        setVerificationResult({
          isValid: true,
          details: {
            name: data.name,
            course: data.course,
            id: id,
            startDate: data.startDate,
            endDate: data.endDate,
            grade: data.grade,
            lor: data.lor || "No letter of recommendation available.",
            institution: "KaleidoNex Technologies"
          }
        });
      } else {
        setVerificationResult({
          isValid: false,
          message: "Invalid certificate. Please check the certificate ID and try again."
        });
      }
    } catch (error) {
      setVerificationResult({
        isValid: false,
        message: "An error occurred during verification. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission for manual verification
  const handleVerification = async (e) => {
    e.preventDefault();
    await verifyCertificate(certificateInput);
  };

  // Auto-verify if certificateId is present in URL
  useEffect(() => {
    if (certificateId) {
      verifyCertificate(certificateId);
      setCertificateInput(certificateId);
    }
  }, [certificateId]);

  // Add QR code functions
  const getVerificationUrl = () => {
    return `https://kaleidonex.org/verify/${verificationResult?.details?.id}`;
  };

  const downloadQR = () => {
    if (!qrRef.current) return;
    const canvas = qrRef.current.querySelector('canvas');
    const image = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = image;
    link.download = `certificate-${verificationResult.details.id}-qr.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Main container - Increased height for desktop only */}
      <div className="pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[180px] xl:pt-[200px]
        pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24
        container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Main Box - Increased width for desktop only */}
        <div className="w-[94%] sm:w-[92%] md:w-[88%] lg:w-[85%] xl:w-[80%] mx-auto 
          bg-white rounded-xl sm:rounded-2xl shadow-lg 
          p-4 sm:p-6 md:p-8 lg:p-12 xl:p-14
          min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px]
          transition-all duration-300 hover:shadow-xl">
          
          {/* Header Section */}
          <div className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 
              font-bold text-gray-900 
              mb-2 sm:mb-3 md:mb-4">
              Certificate Verification
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg 
              text-gray-600 px-2">
              Verify the authenticity of your certificate
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-md mx-auto space-y-6 md:space-y-8">
            <form onSubmit={handleVerification} className="space-y-4 md:space-y-6">
              <div className="space-y-2 md:space-y-3">
                <label 
                  htmlFor="certificateId" 
                  className="block text-sm md:text-base font-medium text-gray-700 
                    transition-all duration-300"
                >
                  Certificate ID
                </label>
                <input
                  type="text"
                  id="certificateId"
                  value={certificateInput}
                  onChange={(e) => setCertificateInput(e.target.value)}
                  placeholder="Enter your certificate ID"
                  className="w-full px-4 py-2.5 md:py-3 lg:py-4 rounded-lg border border-gray-300 
                    focus:ring-2 focus:ring-orange-500 focus:border-transparent
                    placeholder-gray-400 text-gray-900 shadow-sm text-sm md:text-base
                    transition-all duration-300 hover:border-orange-300
                    focus:shadow-md"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2.5 md:py-3 lg:py-4 px-4 md:px-6 rounded-lg 
                  text-white font-medium text-sm md:text-base
                  shadow-sm transition-all duration-300 
                  transform hover:translate-y-[-2px] hover:shadow-md
                  active:translate-y-[1px]
                  ${
                    isLoading
                      ? 'bg-orange-400 cursor-not-allowed'
                      : 'bg-orange-500 hover:bg-orange-600'
                  }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Verifying...</span>
                  </div>
                ) : (
                  'Verify Certificate'
                )}
              </button>
            </form>

            {/* Helper Text */}
            <div className="text-center text-xs sm:text-sm md:text-base text-gray-600 
              px-4 sm:px-6 md:px-8 lg:px-10">
              <p>Enter your certificate ID to verify its authenticity and view details.</p>
            </div>
          </div>

          {/* Verification Result */}
          {verificationResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-xl shadow-md overflow-hidden
                ${verificationResult.isValid ? 'bg-green-50' : 'bg-red-50'}`}
            >
              {verificationResult.isValid ? (
                <div className="p-4 sm:p-6">
                  {/* Header with Logo */}
                  <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8">
                    <div className="flex items-center mb-4 sm:mb-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="ml-3 text-lg sm:text-xl font-semibold text-gray-900">
                        Valid Certificate
                      </h2>
                    </div>
                    
                    {/* Company Logo */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm"
                    >
                      <img
                        src={Cmlogo} // Replace with your logo path
                        alt="KaleidoNex Technologies"
                        className="h-8 sm:h-10 w-auto"
                      />
                      <div className="text-left">
                        <p className="text-xs text-gray-500">Issued By</p>
                        <p className="text-sm sm:text-base font-medium text-gray-900">KaleidoNex Technologies</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Certificate Details with Icons */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {/* Left Column */}
                      <div className="space-y-3">
                        <DetailItem 
                          label="Name" 
                          value={verificationResult.details.name}
                          icon={<FaUserGraduate className="text-orange-600 w-5 h-5" />}
                        />
                        <DetailItem 
                          label="Certificate ID" 
                          value={verificationResult.details.id}
                          icon={<FaIdCard className="text-orange-600 w-5 h-5" />}
                        />
                        <DetailItem 
                          label="Course" 
                          value={verificationResult.details.course}
                          icon={<FaLaptopCode className="text-orange-600 w-5 h-5" />}
                        />
                        <DetailItem 
                          label="Grade" 
                          value={verificationResult.details.grade}
                          icon={<MdGrade className="text-orange-600 w-5 h-5" />}
                        />
                      </div>
                      
                      {/* Right Column */}
                      <div className="space-y-3">
                        <DetailItem 
                          label="Start Date" 
                          value={verificationResult.details.startDate}
                          icon={<FaCalendarAlt className="text-orange-600 w-5 h-5" />}
                        />
                        <DetailItem 
                          label="End Date" 
                          value={verificationResult.details.endDate}
                          icon={<MdDateRange className="text-orange-600 w-5 h-5" />}
                        />
                         <DetailItem 
                          label="LOR" 
                          value={verificationResult.details.lor}
                          icon={<FaFileAlt className="text-orange-600 w-5 h-5" />}
                        />
                        <DetailItem 
                          label="Institution" 
                          value={verificationResult.details.institution}
                          icon={<FaUniversity className="text-orange-600 w-5 h-5" />}
                        />
                        
                        {/* Verification Badge */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="bg-white/50 p-3 rounded-lg"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <MdVerified className="text-green-600 w-6 h-6" />
                              <div>
                                <p className="text-xs font-medium text-gray-500">Verified Certificate</p>
                                <p className="text-xs text-gray-600">
                                  {new Date().toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <motion.div
                                animate={{
                                  rotate: [0, 360],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              >
                                <FaStamp className="text-orange-600 w-5 h-5" />
                              </motion.div>
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowQR(true)}
                                className="cursor-pointer"
                              >
                                <FaQrcode className="text-gray-600 w-5 h-5 hover:text-orange-600 transition-colors" />
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 sm:p-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                        Invalid Certificate
                      </h2>
                      <p className="mt-1 text-sm sm:text-base text-gray-600">
                        {verificationResult.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Add QR Modal - place this just before the final closing div */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="bg-white rounded-xl p-6 max-w-sm w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>

              <div ref={qrRef} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Scan to Verify Certificate
                </h3>
                
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <QRCodeCanvas
                    value={getVerificationUrl()}
                    size={200}
                    level="H"
                    includeMargin={true}
                  />
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Scan this QR code to verify the certificate or share it with others
                </p>

                <div className="flex gap-3 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadQR}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium
                      hover:bg-orange-600 transition-colors"
                  >
                    Download QR
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      navigator.share({
                        title: 'Certificate Verification',
                        text: 'Verify this certificate',
                        url: getVerificationUrl()
                      }).catch(err => console.log('Error sharing:', err));
                    }}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium
                      hover:bg-gray-200 transition-colors"
                  >
                    Share Link
                  </motion.button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Certificate ID</p>
                  <p className="text-sm font-medium text-gray-700">
                    {verificationResult.details.id}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper component for certificate details
const DetailItem = ({ label, value, icon }) => (
  <div className="bg-white/50 p-3 rounded-lg">
    <div className="flex items-center gap-2">
      {icon}
      <p className="text-sm sm:text-base text-gray-900">{value}</p>
    </div>
  </div>
);

export default CertificateVerification;
