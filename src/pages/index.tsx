import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function IndexPage() {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <div>
          <p>Welcome to Jason Kwong's Personal Site</p>
          <p>This website include Jason's short description and experience before</p>
          <StaticImage
            alt="Jason Kwong"
            src="../images/jason.jpg"
          />
        </div>
      </Layout>
    </div>
  )
}