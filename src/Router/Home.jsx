import React from 'react'
import NavBar from '../components/Header'
import AboutPage from '../components/AboutPage'
import BlogPage from '../components/BlogPage'
import { AddBlog } from '../components/AddBlog'
import HomePage from '../components/HomePage'
import Services from '../components/Services'
import TeamMember from '../components/TeamMember'
//----------------MAIN PAGE----------------------------
const Home = () => {
  return (
    <>
    
    <NavBar/>
    <HomePage/>
    <AboutPage/>
    <BlogPage/>
    <Services/>
    <TeamMember/>
    </>
  )
}

export default Home