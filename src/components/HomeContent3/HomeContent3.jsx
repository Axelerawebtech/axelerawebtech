import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const cards = [
    {
        title: 'Next-Gen Web Experiences',
        description:
            'Deliver fast, responsive, and visually striking websites that keep your audience engaged.',
        subText:"From dynamic business sites to full-scale e-commerce, we craft digital experiences built for performance and scalability.",
        color: '#66E8FA',
    },
    {
        title: 'Custom Platforms & Integrations',
        description: 'Streamline your operations with platforms tailored to your business and seamlessly connected with the tools you already use.',
        subText:"We transform complex workflows into simple, automated systems that save time and boost efficiency.",
        color: '#D5E1E7',
    },
    {
        title: 'Intelligent Dashboards & Insights',
        description:
            'Turn raw data into actionable strategies with dashboards designed for clarity and control.',
            subText:"Real-time analytics and interactive reporting empower smarter, faster business decisions.",
        color: '#556575',
    },
];

const HomeContent3 = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#22282A] py-20"
            style={{ height: '400vh' }}
        >
            <div className="sticky top-0 h-screen flex items-center">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-6xl md:text-7xl font-serif text-[#D5E1E7] mb-6">
                            Innovative Digital Solutions that Drive Growth
                        </h2>
                        <p className="text-xl md:text-2xl text-[#999999] max-w-4xl mx-auto leading-relaxed font-light">
                            We build smart, scalable, and user-focused digital solutions that help brands innovate,
                            accelerate growth, and stay ahead in the digital era
                        </p>
                    </motion.div>

                    {/* Cards Stack Container */}
                    <div
                        className="relative max-w-4xl mx-auto"
                        style={{ height: '480px' }}
                    >
                        {cards.map((card, i) => {
                            const index = cards.length - 1 - i;

                            const translateY = useTransform(
                                scrollYProgress,
                                [(cards.length - 1 - index) * 0.2, (cards.length - 1 - index) * 0.2 + 0.1],
                                ['100vh', `${index * 40}px`]
                            );

                            const opacity = useTransform(
                                scrollYProgress,
                                [(cards.length - 1 - index) * 0.2, (cards.length - 1 - index) * 0.2 + 0.05],
                                [0, 1]
                            );

                            return (
                                <motion.div
                                    key={card.title}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        opacity,
                                        y: translateY,
                                        zIndex: i,   // 👈 FIX: use i, not index
                                        width: '100%',
                                        height: '400px',
                                    }}
                                    className="bg-[#92A6B0] rounded-[32px] p-12 shadow-2xl "
                                >
                                    <div className="flex items-start gap-8 h-full">
                                        <div
                                            className="w-24 h-24 rounded-full flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: card.color }}
                                        >
                                            <span className="text-[#22282A] text-4xl font-bold">
                                                {i + 1}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[42px] font-serif text-[#22282A] mb-6 leading-tight">
                                                {card.title}
                                            </h3>
                                            <p className="text-[#D5E1E7] text-2xl leading-relaxed max-w-2xl">
                                                {card.description}
                                            </p>
                                            <p className="text-[#F5FCFF] text-xl italic leading-relaxed max-w-2xl pt-2">
                                                {card.subText}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContent3;