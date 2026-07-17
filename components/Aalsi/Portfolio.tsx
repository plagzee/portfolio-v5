import React from 'react';
import { motion } from 'framer-motion';

const PortfolioItem: React.FC = () => {
  return (
    <motion.div className="portfolio-item" whileHover={{ scale: 1.05, zIndex: 1 }}>
      <div className="card">
        <img src="/path/to/placeholder/image.jpg" alt="Project" />
        <div className="content">
          <h3>Project Title</h3>
          <p>Category</p>
          <p>Short description...</p>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio">
      {[...Array(6)].map((_, index) => (
        <PortfolioItem key={index} />
      ))}
    </section>
  );
};

export default Portfolio;