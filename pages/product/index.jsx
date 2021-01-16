import Image from 'next/image';
import Link from 'next/link';
import Seo from '../../components/Seo';
import { IoIosArrowBack } from 'react-icons/io';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

export default function Product() {
    return (
        <>
            <Seo pageTitle='NextJS Tailwind Starter' />
            <motion.section
                initial='initial'
                animate='animate'
                exit={{ opacity: 0 }}
                className='flex flex-col h-screen lg:flex-row'
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='flex items-center justify-center w-full py-8 bg-blue-50'
                >
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Image src='/images/product.png' width={400} height={400} />
                    </motion.div>
                </motion.div>
                <main className='container flex items-center justify-center w-full px-8 py-8'>
                    <motion.div variants={stagger} className='space-y-4'>
                        <Link href='/'>
                            <motion.a
                                variants={fadeInUp}
                                className='flex items-center space-x-2 cursor-pointer hover:text-gray-600'
                            >
                                <IoIosArrowBack /> Back to home
                            </motion.a>
                        </Link>
                        <motion.h3 variants={fadeInUp}>Protein Whey Shake</motion.h3>
                        <motion.p variants={fadeInUp} className='max-w-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                            blanditiis cum dicta facilis est molestiae, accusantium non nostrum
                            repellat animi ut, cupiditate alias nihil quo ullam architecto voluptas.
                            Dolore odit ut magnam at voluptatibus labore, architecto minus
                            distinctio quibusdam quas!
                        </motion.p>
                        <motion.p variants={fadeInUp} className='font-light'>
                            Rating: 5 / 5
                        </motion.p>
                        <motion.div variants={fadeInUp} className='flex items-center space-x-8'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='inline-block px-8 py-2 font-bold text-white bg-black rounded-sm shadow-md hover:bg-gray-700'
                            >
                                Buy
                            </motion.button>
                            <p className='text-lg'>$30</p>
                        </motion.div>
                    </motion.div>
                </main>
            </motion.section>
        </>
    );
}
