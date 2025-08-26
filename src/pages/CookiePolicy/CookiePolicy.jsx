import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#22282A] pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif text-[#D5E1E7] mb-8">Cookie Policy</h1>
        
        <div className="space-y-6 text-[#999999]">
          {/* Dates section */}
          <div className="flex flex-wrap gap-4 text-sm mb-8">
            <p>Effective Date: March 19, 2025</p>
            <p>Last Updated: March 20, 2025</p>
          </div>

          {/* Introduction */}
          <p className="text-lg">
            At Axelera WebTech Pvt Ltd, we value your privacy and are committed to providing transparency about how we use cookies and similar technologies. This Cookie Policy explains what cookies are, the types we use, why we use them, and the choices available to you.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help us recognize your device, remember your preferences, and improve your browsing experience. Some cookies are essential for the website to function properly, while others help us improve performance and deliver personalized content.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">2. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><span className="font-medium text-[#D5E1E7]">Essential Cookies</span> – Required for the operation of our website, such as enabling secure logins, navigation, and core site functionality.</li>
              <li><span className="font-medium text-[#D5E1E7]">Performance Cookies</span> – Collect information about how visitors interact with our site (e.g., pages visited, time spent), which helps us optimize performance and usability.</li>
              <li><span className="font-medium text-[#D5E1E7]">Functionality Cookies</span> – Remember your settings and preferences (such as language or region) to provide a more personalized experience.</li>
              <li><span className="font-medium text-[#D5E1E7]">Analytics & Advertising Cookies</span> – Used to understand user behavior, measure campaign effectiveness, and (where applicable) display relevant ads.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">3. Third-Party Cookies</h2>
            <p>
              Some cookies may be placed by trusted third-party providers, such as analytics and advertising partners. These third parties may collect information about your online activities across different websites and devices.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">4. How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensure our website functions correctly and securely.</li>
              <li>Analyze traffic and improve our services.</li>
              <li>Personalize your browsing experience.</li>
              <li>Deliver relevant content and (if applicable) advertising.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">5. Compliance with International Privacy Standards</h2>
            <p>
              While Sri Lanka does not currently have dedicated cookie legislation, we follow global best practices to protect user privacy, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium text-[#D5E1E7]">GDPR (EU/EEA Visitors):</span> Users in the European Union/EEA have rights to access, manage, or delete personal data and opt out of non-essential cookies.</li>
              <li><span className="font-medium text-[#D5E1E7]">Transparency & Choice:</span> We provide clear information on how cookies are used and offer options to manage them.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">6. Your Choices</h2>
            <p>
              You can control or disable cookies through your browser settings at any time. Please note that disabling essential cookies may affect the functionality of our website.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">7. Do Not Track Signals</h2>
            <p>
              Currently, our website may not respond to "Do Not Track" browser signals. To learn more, please visit <a href="https://www.allaboutdnt.com" target="_blank" rel="noopener noreferrer" className="text-[#66E8FA] hover:underline">www.allaboutdnt.com</a>.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">8. Updates to This Policy</h2>
            <p>
              We may revise this Cookie Policy occasionally to reflect changes in technology, law, or business practices. Any updates will be posted on this page with an updated "Last Updated" date.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl text-[#66E8FA] font-medium">9. Contact Us</h2>
            <p>If you have any questions about our Cookie Policy, please reach out to us:</p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-[#66E8FA]">📧</span>
                <a href="mailto:privacy@axelerawebtech.com" className="text-[#66E8FA] hover:underline">
                  info@axelerawebtech.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#66E8FA]">📍</span>
                <span>Axelera WebTech Pvt Ltd,Kilinochchi, Sri Lanka</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;