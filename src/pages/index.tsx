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
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          />
        </div>
      </Layout>
    </div>
  )
}