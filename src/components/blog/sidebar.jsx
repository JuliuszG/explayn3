import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import Item from "./item"
import SocialMedia from "./sideBarSocialMedia"
import Newsletter from "./sideNewsletter"
import {
  SideBarWrapper,
  SideBarTrending,
  SideBarTrendingFilters,
  SideBarTrendingFilter,
} from "../styled"

const filterList = [
  "BRANDING",
  "ANIMATIONS/3D",
  "VIDEO",
  "MARKETING STRATEGY",
  "SOCIAL MEDIA",
  "SOFTWARE",
  "OTHER",
]

const SideBar = ({ title, slug, id }) => {
  const [filters, setFilters] = useState([])
  const [trending, setTrending] = useState([])

  const data = useStaticQuery(
    graphql`
      {
        allDatoCmsBlog {
          nodes {
            slug
            blogTitle
            id
            categories
          }
        }
      }
    `
  )

  useEffect(() => {
    if (filters.length === 0) {
      const filteredPosts = data.allDatoCmsBlog.nodes.filter(
        (item, key) => item.id !== id && key <= 3
      )
      setTrending(filteredPosts)
    } else {
      const categoryFilter = data.allDatoCmsBlog.nodes.filter(post => {
        const { categories } = JSON.parse(post.categories)
        let isIn = false
        categories.forEach(cat => {
          if (filters.includes(cat.toUpperCase())) {
            isIn = true
          }
        })
        return isIn
      })
      const filteredPosts = categoryFilter.filter(
        (item, key) => item.id !== id && key <= 3
      )
      setTrending(filteredPosts)
    }
  }, [filters])

  const handleAddingCategories = category => {
    if (filters.indexOf(category) === -1) {
      setFilters(prevState => [...prevState, category])
    } else {
      setFilters(prevState => prevState.filter(el => el !== category))
    }
  }

  return (
    <SideBarWrapper>
      <SocialMedia title={title} slug={slug} />
      <Newsletter />
      <SideBarTrending>
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
        <h3>POPULAR TAGS</h3>
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
    </SideBarWrapper>
  )
}

export default SideBar
