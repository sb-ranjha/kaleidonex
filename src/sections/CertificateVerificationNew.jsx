import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeCanvas } from 'qrcode.react';
import Cmlogo from "../assets/water.jpg";
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
  FaDownload,
  FaShareAlt,
  FaCheck,
  FaTrophy,
  FaSearch
} from 'react-icons/fa';
import { 
  MdVerified, 
  MdGrade,
  MdDateRange,
  MdError
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="pt-[100px] pb-16 container mx-auto px-4">
        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header Section with Gradient */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Certificate Verification</h1>
                <p className="text-indigo-100">Verify the authenticity of your certificate</p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-4 md:mt-0"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <FaIdCard className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Search Form */}
            <form onSubmit={handleVerification} className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  id="certificateId"
                  value={certificateInput}
                  onChange={(e) => setCertificateInput(e.target.value)}
                  placeholder="Enter your certificate ID"
                  className="w-full px-5 py-4 pr-36 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm text-gray-700 placeholder-gray-400 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`absolute right-2 top-2 px-6 py-2 rounded-lg text-white font-medium shadow-sm transition-all duration-300 ${
                    isLoading
                      ? 'bg-indigo-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Verifying</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <FaSearch className="w-4 h-4" />
                      <span>Verify</span>
                    </div>
                  )}
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500 text-center">
                Enter your certificate ID to verify its authenticity and view details
              </p>
            </form>

            {/* Verification Result */}
            <AnimatePresence mode="wait">
              {verificationResult && (
                <motion.div
                  key={verificationResult.isValid ? 'valid' : 'invalid'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {verificationResult.isValid ? (
                    <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                      {/* Valid Certificate Header */}
                      <div className="bg-green-50 p-4 border-b border-gray-100">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <FaCheck className="w-5 h-5 text-green-600" />
                          </div>
                          <h2 className="ml-3 text-lg font-semibold text-gray-900">
                            Valid Certificate
                          </h2>
                          <div className="ml-auto flex items-center gap-2">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer"
                              onClick={() => setShowQR(true)}
                            >
                              <FaQrcode className="w-4 h-4 text-indigo-600" />
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Certificate Content */}
                      <div className="p-6">
                        {/* Student Info Section */}
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                                <FaUserGraduate className="w-6 h-6 text-indigo-600" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Student Name</p>
                                <h3 className="text-xl font-bold text-gray-900">{verificationResult.details.name}</h3>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                              <div className="flex items-center gap-2 mb-3">
                                <FaIdCard className="w-4 h-4 text-indigo-600" />
                                <p className="text-sm text-gray-500">Certificate ID</p>
                              </div>
                              <p className="text-gray-900 font-mono bg-gray-50 p-2 rounded border border-gray-100 text-sm">
                                {verificationResult.details.id}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                <FaLaptopCode className="w-6 h-6 text-purple-600" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Course Completed</p>
                                <h3 className="text-xl font-bold text-gray-900">{verificationResult.details.course}</h3>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <FaTrophy className="w-4 h-4 text-amber-500" />
                                  <p className="text-sm text-gray-500">Grade Achieved</p>
                                </div>
                                <span className="text-lg font-bold text-amber-600">{verificationResult.details.grade}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Timeline and Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                            <h4 className="text-sm font-medium text-gray-500 mb-3">Course Timeline</h4>
                            <div className="flex items-center gap-4">
                              <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <FaCalendarAlt className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="h-full w-0.5 bg-blue-100 my-1"></div>
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <MdDateRange className="w-5 h-5 text-blue-600" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="mb-4">
                                  <p className="text-sm text-gray-500">Start Date</p>
                                  <p className="font-medium text-gray-900">{verificationResult.details.startDate}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">End Date</p>
                                  <p className="font-medium text-gray-900">{verificationResult.details.endDate}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                            <h4 className="text-sm font-medium text-gray-500 mb-3">Issuing Institution</h4>
                            <div className="flex items-center gap-3">
                              <img
                                src={Cmlogo}
                                alt="KaleidoNex Technologies"
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div>
                                <p className="font-medium text-gray-900">{verificationResult.details.institution}</p>
                                <div className="flex items-center gap-1 mt-1">
                                  <MdVerified className="w-4 h-4 text-green-600" />
                                  <p className="text-xs text-gray-500">Verified Institution</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* LOR Section */}
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                          <div className="flex items-center gap-2 mb-3">
                            <FaFileAlt className="w-4 h-4 text-indigo-600" />
                            <h4 className="text-sm font-medium text-gray-500">Letter of Recommendation</h4>
                          </div>
                          <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded border border-gray-100">
                            {verificationResult.details.lor}
                          </p>
                        </div>

                        {/* Verification Badge */}
                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <motion.div
                              animate={{
                                rotate: [0, 360],
                              }}
                              transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            >
                              <FaStamp className="text-indigo-600 w-5 h-5" />
                            </motion.div>
                            <div>
                              <p className="text-xs font-medium text-gray-500">Verified on</p>
                              <p className="text-sm text-gray-700">
                                {new Date().toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowQR(true)}
                            className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors flex items-center gap-2"
                          >
                            <FaQrcode className="w-4 h-4" />
                            <span>Share Certificate</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                          <MdError className="w-8 h-8 text-red-600" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                          Invalid Certificate
                        </h2>
                        <p className="text-gray-600 max-w-md">
                          {verificationResult.message}
                        </p>
                        <button
                          onClick={() => setCertificateInput('')}
                          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                          Try Again
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && verificationResult?.isValid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>

              <div ref={qrRef} className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Share Certificate
                </h3>
                
                <div className="bg-white p-4 rounded-xl inline-block mb-6 border border-gray-100 shadow-sm">
                  <QRCodeCanvas
                    value={getVerificationUrl()}
                    size={200}
                    level="H"
                    includeMargin={true}
                    bgColor="#FFFFFF"
                    fgColor="#4F46E5"
                  />
                </div>

                <p className="text-sm text-gray-600 mb-6">
                  Scan this QR code to verify the certificate or share the verification link with others
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadQR}
                    className="px-4 py-3 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaDownload className="w-4 h-4" />
                    <span>Download</span>
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
                    className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaShareAlt className="w-4 h-4" />
                    <span>Share Link</span>
                  </motion.button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Certificate ID</p>
                  <p className="text-sm font-mono bg-gray-50 p-2 rounded border border-gray-100 mt-1">
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

export default CertificateVerification;
