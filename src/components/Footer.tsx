import { motion } from 'motion/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground">
              © {currentYear} Joshua Estremos. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-6"
          >
            <span className="text-sm text-muted-foreground">
              Built with Next.js, TypeScript & Tailwind CSS
            </span>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-teal-500/10 hover:bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 hover:text-teal-300 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;