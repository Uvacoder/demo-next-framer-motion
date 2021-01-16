import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import Image from 'next/image';
import Link from 'next/link';

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
            staggerChildren: 0.1,
        },
    },
};

export default function Home() {
    return (
        <>
            <Seo pageTitle='NextJS Tailwind Starter' />
            <motion.div
                initial='initial'
                animate='animate'
                exit={{ opacity: 0 }}
                className='h-screen bg-gray-50'
            >
                <main className='container flex flex-col items-center justify-center h-full mx-auto space-y-4'>
                    <h1>Pick Yours</h1>
                    <motion.div variants={stagger} className='flex justify-center space-x-8'>
                        {[1, 2].map((i) => (
                            <Link key={`${i}`} href='/product'>
                                <a>
                                    <motion.figure
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        variants={fadeInUp}
                                        className='max-w-sm p-8 bg-white rounded-lg shadow-md'
                                    >
                                        <motion.div
                                            initial={{ x: 60, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <Image
                                                src='/images/product.png'
                                                width={300}
                                                height={300}
                                            />
                                        </motion.div>
                                        <figcaption className='flex justify-between'>
                                            <p className='text-lg font-bold'>Protein Shake Whey</p>
                                            <p className='text-sm font-light'>$25</p>
                                        </figcaption>
                                    </motion.figure>
                                </a>
                            </Link>
                        ))}
                    </motion.div>
                </main>
            </motion.div>
        </>
    );
}
