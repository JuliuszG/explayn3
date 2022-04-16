import React, { useState, useEffect, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Item from './item';
import SocialMedia from './sideBarSocialMedia';
import Newsletter from './sideNewsletter';
import { useLocation } from '@reach/router';
import {
  SideBarWrapperContainer,
  SideBarWrapper,
  SideBarSticky,
  SideBarTrending,
  SideBarTrendingFilters,
  SideBarTrendingFilter,
} from '../styled';
import { useIntl } from 'gatsby-plugin-intl';

const filterListEn = [
  'BRANDING',
  'ANIMATIONS/3D',
  'VIDEO',
  'MARKETING STRATEGY',
  'SOCIAL MEDIA',
  'SOFTWARE',
  'OTHER',
];

const filterListPl = [
  'BRANDING',
  'ANIMATIONS/3D',
  'VIDEO',
  'MARKETING STRATEGY',
  'SOCIAL MEDIA',
  'SOFTWARE',
  'INNE',
];

const SideBar = ({ title, slug, id }) => {
  const location = useLocation();
  const [filters, setFilters] = useState([]);
  const [trending, setTrending] = useState([]);
  const { pathname } = location;
  const data = useStaticQuery(
    graphql`
    {
      allWpArticle {
        nodes {
          id
          article {
            en {
              categories
              slug
              blogTitle
            }
            pl {
              categories
              slug
              blogTitle
            }
          }
        }
      }
    }
    `
  );

  useEffect(() => {
    if (filters.length === 0) {
      const filteredPosts = data.allWpArticle.nodes.filter(
        (item, key) => item.id !== id && key <= 3
      );
      setTrending(filteredPosts);
    } else {
      const categoryFilter = data.allWpArticle.nodes.filter(post => {
        const locale = useIntl().locale;
        const { postLang } = locale === 'pl' ? post.article.pl : post.article.en;
        const { categories } = JSON.parse(postLang.categories);
        let isIn = false;
        categories.forEach(cat => {
          if (filters.includes(cat.toUpperCase())) {
            isIn = true;
          }
        });
        return isIn;
      });
      const filteredPosts = categoryFilter.filter(
        (item, key) => item.id !== id && key <= 3
      );
      setTrending(filteredPosts);
    }
  }, [filters]);

  const handleAddingCategories = category => {
    if (filters.indexOf(category) === -1) {
      setFilters(prevState => [...prevState, category]);
    } else {
      setFilters(prevState => prevState.filter(el => el !== category));
    }
  };
  const stickyPosition = 215;

  const filterList = useIntl().locale === 'pl' ? filterListPl : filterListEn;

  return (
    <SideBarWrapperContainer>
      <SideBarWrapper>
        <SideBarSticky stickyPosition={stickyPosition}>
          <SocialMedia title={title} slug={slug} />
          <Newsletter />
          <SideBarTrending>
          {trending.length > 4 && 
            <React.Fragment>
            <h3>TRENDING ARTICLES</h3>
            <AnimateSharedLayout>
              <motion.div layout>
                <AnimatePresence layout>
                  {trending.map((post, index) => (
                    <Item key={index} post={post} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </AnimateSharedLayout>
            </React.Fragment>}

            <h3>{useIntl().formatMessage({ id: 'sidebar.h3' })}</h3>
            <SideBarTrendingFilters>
              {filterList.map((filter, index) => (
                <SideBarTrendingFilter
                  isActive={filters.includes(filter)}
                  key={index}
                  onClick={() => handleAddingCategories(filter)}
                >
                  {filter}
                </SideBarTrendingFilter>
              ))}
            </SideBarTrendingFilters>
          </SideBarTrending>
        </SideBarSticky>
      </SideBarWrapper>
    </SideBarWrapperContainer>
  );
};

export default SideBar;