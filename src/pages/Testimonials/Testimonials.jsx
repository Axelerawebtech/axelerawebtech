import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
	{
		name: 'Sundhar Reddy',
		url: 'https://www.phoenixtoursandtravels.com/',
		company: 'Phoenix Tours and Travels',
		content:
			'Working with Axelera Webtech was a fantastic experience. They designed a clean and modern website for our travel business that makes it so easy for customers to browse and book trips. The team was very responsive to our ideas and delivered everything on time. We’ve already noticed an increase in inquiries since the new site went live.',
	},
	{
		name: 'Michael Chen',
		url: 'https://ipstechinc.com/',
		company: 'IPS Tech Inc',
		content:
			'Axelera Webtech understood our staffing business needs very well and built a professional, corporate-style website that truly reflects our brand. The site is fast, secure, and easy to manage. Their attention to detail and technical expertise gave us the confidence to showcase our services to global clients.',
		
	},
	{
		name: 'Emily Roberts',
		url: 'https://neithalfishtrading.com/',
		company: 'Neithal Fish Trading',
		content:
			'Our business needed a simple yet powerful website to showcase our seafood products, and Axelera Webtech delivered exactly that. The site looks fresh, loads quickly, and is mobile-friendly, which is important for our customers. We appreciate their patience in making revisions until everything was perfect.',
	
	},
	{
		name: 'David Wilson',
		url: 'https://zest-and-bite.netlify.app/',
		company: 'Zest & Bite',
		content:
			'Our brand is all about freshness and energy, and Axelera Webtech captured that perfectly in our website. The design is colorful, engaging, and easy to navigate. Customers often compliment us on how professional and modern the site looks. It truly represents our brand identity',
		
	},
	
];

const Testimonials = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const testimonialsPerPage = 3;
	const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

	const handleNext = () => {
		setCurrentPage((prev) => (prev + 1) % totalPages);
	};

	const handlePrev = () => {
		setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
	};

	const currentTestimonials = testimonials.slice(
		currentPage * testimonialsPerPage,
		(currentPage + 1) * testimonialsPerPage
	);

	return (
		<section className="relative bg-[#22282A] py-16 md:py-32">
			{/* Decorative borders */}
			<div className="absolute inset-0">
				<div
					className="absolute top-0 left-0 right-0 h-16 md:h-32 bg-[#E4EDF1]"
					style={{
						borderTopLeftRadius: '32px',
						borderTopRightRadius: '32px',
					}}
				/>
				<div
					className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-[#E4EDF1]"
					style={{
						borderBottomLeftRadius: '32px',
						borderBottomRightRadius: '32px',
					}}
				/>
			</div>

			{/* Changed container class to be full width */}
			<div className="w-full px-4 relative bg-[#E4EDF1]">
				<div className="text-center mb-10 md:mb-20">
					<h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#171717] mb-6">
						Clients' Testimonials
					</h2>
				</div>

				<div className="relative">
					{/* Added max-width container for cards */}
					<div className="max-w-[1920px] mx-auto">
						<div className="flex flex-col lg:flex-row gap-8 justify-center">
							{currentTestimonials.map((testimonial, index) => (
								<motion.div
									key={currentPage * testimonialsPerPage + index}
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -50 }}
									transition={{ duration: 0.5, delay: index * 0.2 }}
									className="bg-[#F5FCFF] rounded-[16px] lg:rounded-[32px] p-6 lg:p-12 w-full lg:w-[400px] shadow-xl lg:shadow-2xl"
								>
									<div className="flex flex-col h-full">
										<div className="mb-8">
											<p className="text-[#171717] text-lg lg:text-xl leading-relaxed italic">
												"{testimonial.content}"
											</p>
										</div>
										<div className="mt-auto">
											<h3 className="text-[#66E8FA] text-2xl font-bold mb-2">
												{testimonial.name}
											</h3>
											{testimonial.position && (
												<p className="text-[#999999]">
													{testimonial.position}
												</p>
											)}
											<div className="flex items-center gap-2">
												<p className="text-[#171717]">
													{testimonial.company}
												</p>
												{testimonial.url && (
													<a
														href={testimonial.url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-[#66E8FA] hover:text-[#4BA9B5] transition-colors flex items-center"
													>
														<svg 
															xmlns="http://www.w3.org/2000/svg" 
															viewBox="0 0 24 24" 
															fill="currentColor" 
															className="w-5 h-5"
														>
															<path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"/>
														</svg>
													</a>
												)}
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					<div className="flex justify-center mt-8 lg:mt-12 gap-4">
						<button
							onClick={handlePrev}
							className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#171717]"
						>
							←
						</button>
						<button
							onClick={handleNext}
							className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#171717]"
						>
							→
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;