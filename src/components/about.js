import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function About() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.5 });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.5 });
  const titleAnimation = useAnimation();
  const textAnimation = useAnimation();

  useEffect(() => {
    if (titleInView) {
      titleAnimation.start({ opacity: 1, y: 0 });
    } else {
      titleAnimation.start({ opacity: 0, y: 50 });
    }
  }, [titleInView]);

  useEffect(() => {
    if (textInView) {
      textAnimation.start({ opacity: 1, y: 0 });
    } else {
      textAnimation.start({ opacity: 0, y: 50 });
    }
  }, [textInView]);

  return (

    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen" id="qui-sommes-nous">

      <Head>
        <title>À propos de nous - Memo Nettoyage</title>
        <meta name="description" content="Découvrez qui nous sommes et ce que nous faisons chez Memo Nettoyage." />
      </Head>

 

      <div className="max-w-screen-xl mx-auto mt-20 px-4">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleAnimation}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          À propos de nous
        </motion.h1>
        <div ref={textRef}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={textAnimation}
            transition={{ duration: 0.5, delay: 1 }} // Délai de 1 seconde après l'apparition du titre
            className="mb-8 text-lg text-gray-700 dark:text-gray-400"
          >
            Memo Nettoyage est une entreprise spécialisée dans le nettoyage de toitures et de façades. Avec une équipe expérimentée et des équipements de pointe, nous offrons des services de nettoyage de haute qualité pour nos clients.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={textAnimation}
            transition={{ duration: 0.5, delay: 2 }} // Délai de 2 secondes après l'apparition du titre
            className="mb-8 text-lg text-gray-700 dark:text-gray-400"
          >
            Notre mission est de fournir des solutions de nettoyage efficaces et durables, tout en respectant l'environnement et en garantissant la satisfaction de nos clients.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={textAnimation}
            transition={{ duration: 0.5, delay: 3 }} // Délai de 3 secondes après l'apparition du titre
            className="mb-8 text-lg text-gray-700 dark:text-gray-400"
          >
            Chez Memo Nettoyage, nous sommes fiers de notre travail et nous nous engageons à fournir un service exceptionnel à chaque client. Contactez-nous dès aujourd'hui pour en savoir plus sur nos services et obtenir un devis personnalisé.
          </motion.p>
        </div>
      </div>
    </div>
  );
}