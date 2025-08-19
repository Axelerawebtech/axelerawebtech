import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-[#22282A] py-20 px-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column - Contact Info */}
        <div>
          <h1 className="text-8xl font-serif text-[#D5E1E7] mb-8">Let's Chat</h1>
          <p className="text-gray-400 text-xl mb-12">Smart solutions begin with a simple hello.</p>
          
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#D5E1E7]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <a href="info@axelerawebtech.com" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
                info@axelerawebtech.com
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#D5E1E7]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <a href="tel:(905) 604-0314" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
                +94 740 989 297
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#D5E1E7]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <address className="text-[#D5E1E7] not-italic">
                Ambalkulam,Kilinochchi<br />
                Sri Lanka
              </address>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form className="space-y-8">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-[#D5E1E7] py-2 text-[#D5E1E7] placeholder-[#D5E1E7] focus:outline-none focus:border-[#66E8FA]"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-[#D5E1E7] py-2 text-[#D5E1E7] placeholder-[#D5E1E7] focus:outline-none focus:border-[#66E8FA]"
              />
            </div>
            
            <div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full bg-transparent border-b border-[#D5E1E7] py-2 text-[#D5E1E7] placeholder-[#D5E1E7] focus:outline-none focus:border-[#66E8FA] resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-4">
              <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
            </div>
            
            <button
              type="submit"
              data-cursor="-pointer"
              className="px-8 py-3 bg-transparent border border-[#D5E1E7] text-[#D5E1E7] hover:bg-[#66E8FA] hover:text-[#22282A] hover:border-[#66E8FA] transition-all rounded-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;