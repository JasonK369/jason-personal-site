import * as React from 'react'
import Layout from '../components/layout'
import About from '../components/sections/about'
import Experience from '../components/sections/experience'
import Skills from '../components/sections/skills'

export default function IndexPage() {
  return (
      <Layout pageTitle="Home Page">
        <div>
          <About/>
          <Experience/>
          <Skills/>
        </div>
      </Layout>
  )
}