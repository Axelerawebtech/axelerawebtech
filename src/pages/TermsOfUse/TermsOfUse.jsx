import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-[#22282A] pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif text-[#D5E1E7] mb-8">Terms & Conditions</h1>
        
        <div className="space-y-6 text-[#999999]">
          {/* Dates section */}
          <div className="flex flex-wrap gap-4 text-sm mb-8">
            <p>Effective Date: August 26, 2025</p>
            <p>Last Updated: August 26, 2025</p>
          </div>

          {/* Introduction */}
          <p className="text-lg">
            Welcome to Axelera WebTech Pvt Ltd. By accessing or using our website, products, or services, you agree to these Terms & Conditions. Please read them carefully. If you do not agree, you should not use our website or services.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">1. Company Information</h2>
            <p>This website is owned and operated by:</p>
            <div className="space-y-2">
              <p>Axelera WebTech Pvt Ltd</p>
              <p className="flex items-center gap-2">
                <span className="text-[#66E8FA]">📍</span>
                <span>Kilinochchi, Sri Lanka</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#66E8FA]">📧</span>
                <a href="mailto:contact@axelerawebtech.com" className="text-[#66E8FA] hover:underline">
                  info@axelerawebtech.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">2. Use of Our Website</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>You must use our website only for lawful purposes.</li>
              <li>You agree not to engage in activities that may harm, disrupt, or interfere with our website or services.</li>
              <li>Unauthorized attempts to access restricted areas, servers, or data are strictly prohibited.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">3. Intellectual Property</h2>
            <div className="space-y-3">
              <p>All content on this website, including text, graphics, logos, images, and software, is the property of Axelera WebTech Pvt Ltd or its licensors and is protected by copyright and intellectual property laws.</p>
              <p>You may not copy, reproduce, distribute, or modify any content without prior written consent.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">4. Services & Pricing</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>We offer web development and related digital services as described on our website.</li>
              <li>Prices, packages, and availability may change without notice.</li>
              <li>Any service agreements or contracts will outline specific terms between Axelera WebTech Pvt Ltd and the client.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">5. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of these external sites. Use of third-party websites is at your own risk.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">6. Limitation of Liability</h2>
            <div className="space-y-3">
              <p>We strive to ensure accuracy in the information provided on our website, but we make no guarantees regarding completeness or reliability.</p>
              <p>Axelera WebTech Pvt Ltd shall not be liable for any direct, indirect, or consequential damages arising from the use of our website or services.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">7. Warranties Disclaimer</h2>
            <p>All services and content are provided "as is" and "as available," without warranties of any kind, whether express or implied.</p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">8. Governing Law</h2>
            <p>These Terms & Conditions are governed by and construed in accordance with the laws of Sri Lanka. Any disputes shall be subject to the exclusive jurisdiction of the courts in Sri Lanka.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">9. Changes to Terms</h2>
            <p>We reserve the right to update or modify these Terms & Conditions at any time. Updates will be posted on this page with a revised "Last Updated" date.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">10. Contact Us</h2>
            <p>If you have any questions regarding these Terms & Conditions, please contact us:</p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-[#66E8FA]">📧</span>
                <a href="mailto:contact@axelerawebtech.com" className="text-[#66E8FA] hover:underline">
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

export default TermsOfUse;