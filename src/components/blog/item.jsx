import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { CategorySection } from '../styled';

const animations = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    stiffness: 500,
    damping: 50,
  },
};

const Item = ({ post }) => {
  const { categories } = JSON.parse(post.categories);

  return (
    <motion.div {...animations} layout className="trending-post">
      <CategorySection>
        {categories.map((category, index) => (
          <Link
            to={`/blog?category=${category.toLowerCase().replace('/', '')}`}
            key={index}
            className="category"
          >
            {category}
          </Link>
        ))}
      </CategorySection>
      <Link to={`/blog/${post.slug}`}>
        <h2>{post.blogTitle}</h2>
      </Link>
    </motion.div>
  );
};

export default Item;
