import React from 'react';
import { Link } from 'react-router-dom';
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#22282A] pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif text-[#D5E1E7] mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-[#999999]">
          {/* Dates section */}
          <div className="flex flex-wrap gap-4 text-sm mb-8">
            <p>Effective Date: August 26, 2025</p>
            <p>Last Updated: August 26, 2025</p>
          </div>

          {/* Introduction */}
          <p className="text-lg">
            At Axelera WebTech Pvt Ltd, your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our website, products, or services. By using our website, you agree to the terms of this policy.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><span className="font-medium text-[#D5E1E7]">Personal Information</span> – such as your name, email address, phone number, or company details when you fill out contact forms, request quotes, or subscribe to updates.</li>
              <li><span className="font-medium text-[#D5E1E7]">Technical Information</span> – including IP address, browser type, device information, and pages visited.</li>
              <li><span className="font-medium text-[#D5E1E7]">Cookies & Tracking Data</span> – to enhance user experience, improve site performance, and personalize content. See our <Link to="/cookie-policy" className="text-[#66E8FA] hover:underline">Cookie Policy</Link> for more details.</li>
            </ul>
          </section>

          {/* Add sections 2-10 following the same pattern... */}
          
          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how your data is handled, please contact us:</p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-[#66E8FA]">📧</span>
                <a href="mailto:privacy@axelerawebtech.com" className="text-[#66E8FA] hover:underline">
                  info@axelerawebtech.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#66E8FA]">📍</span>
                <span>Axelera WebTech Pvt Ltd, Kilinochchi, Sri Lanka</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;