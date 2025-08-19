import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
	{
		name: 'Sarah Johnson',
		position: 'CTO, TechCorp',
		company: 'Global Solutions Inc.',
		content:
			'The digital transformation achieved through their solutions has revolutionized our operations. Exceptional service and innovative approach.',
		image: '/images/client1.jpg',
	},
	{
		name: 'Michael Chen',
		position: 'Head of Operations',
		company: 'Telecom Dynamics',
		content:
			'Their BSS/OSS solutions have significantly improved our efficiency. The ROI has been remarkable.',
		image: '/images/client2.jpg',
	},
	{
		name: 'Emily Roberts',
		position: 'Digital Director',
		company: 'NetCore Systems',
		content:
			'Outstanding support and cutting-edge solutions. They\'ve been instrumental in our digital success story.',
		image: '/images/client3.jpg',
	},
	{
		name: 'David Wilson',
		position: 'CEO',
		company: 'Infinite Networks',
		content:
			'Their expertise in telecom solutions is unmatched. A game-changer for our business operations.',
		image: '/images/client4.jpg',
	},
	{
		name: 'Lisa Martinez',
		position: 'IT Director',
		company: 'Cloud Systems Ltd',
		content:
			'Seamless integration and excellent customer service. They\'ve exceeded our expectations.',
		image: '/images/client5.jpg',
	},
	{
		name: 'James Thompson',
		position: 'Operations Manager',
		company: 'Digital Ventures',
		content:
			'The scalability and reliability of their solutions have been crucial to our growth.',
		image: '/images/client6.jpg',
	},
	{
		name: 'Anna Kim',
		position: 'Technology Lead',
		company: 'Future Communications',
		content:
			'Innovative solutions with remarkable attention to detail. A trusted technology partner.',
		image: '/images/client7.jpg',
	},
	{
		name: 'Robert Miller',
		position: 'Systems Director',
		company: 'Enterprise Tech',
		content:
			'Their solutions have transformed our customer experience and operational efficiency.',
		image: '/images/client8.jpg',
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
		<section className="relative bg-[#22282A] py-32">
			{/* Add decorative rounded borders */}
			<div className="absolute inset-0">
				<div
					className="absolute top-0 left-0 right-0 h-32 bg-[#E4EDF1]"
					style={{
						borderTopLeftRadius: '64px',
						borderTopRightRadius: '64px',
					}}
				/>
				<div
					className="absolute bottom-0 left-0 right-0 h-32 bg-[#E4EDF1]"
					style={{
						borderBottomLeftRadius: '64px',
						borderBottomRightRadius: '64px',
					}}
				/>
			</div>

			<div className="container mx-auto px-4 relative bg-[#E4EDF1]">
				{/* Title section with category label */}
				<div className="text-center mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						
						<h2 className="text-6xl md:text-7xl font-serif text-[#171717] mb-6">
							Clients' Testimonials
							
						</h2>
					</motion.div>
				</div>

				<div className="relative">
					<div className="flex gap-8 justify-center">
						{currentTestimonials.map((testimonial, index) => (
							<motion.div
								key={currentPage * testimonialsPerPage + index}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className="bg-[#F5FCFF] rounded-[32px] p-12 w-[400px] shadow-2xl"
							>
								<div className="flex flex-col h-full">
									<div className="mb-8">
										<p className="text-[#171717] text-xl leading-relaxed italic">
											"{testimonial.content}"
										</p>
									</div>
									<div className="mt-auto">
										<h3 className="text-[#66E8FA] text-2xl font-bold mb-2">
											{testimonial.name}
										</h3>
										<p className="text-[#999999]">
											{testimonial.position}
										</p>
										<p className="text-[#171717]">
											{testimonial.company}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Navigation Buttons */}
					<div className="flex justify-center mt-12 gap-4">
						<button
							onClick={handlePrev}
							className="w-12 h-12 rounded-full border-2 border-[#171717] flex items-center justify-center text-[#999999] hover:bg-[#D5E1E7] hover:text-[#22282A] transition-colors"
						>
							←
						</button>
						<button
							onClick={handleNext}
							className="w-12 h-12 rounded-full border-2 border-[#171717] flex items-center justify-center text-[#999999] hover:bg-[#D5E1E7] hover:text-[#22282A] transition-colors"
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