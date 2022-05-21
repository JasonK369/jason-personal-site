import * as React from 'react'
import styled from 'styled-components'

const AboutMe = styled.div`
    padding: 0px 10px;
    min-height: 60vh;
    flex-direction: column;
    display: flex;
    align-items: flex-center;
    width: 60vw;
    margin: 0 auto;

    h3 {
        color: #f0f5fa;
    }

    h2 {
        margin-top: 10px;
        margin-bottom: 10px;
        font-family: Righteous;
        color: #f0f5fa;
        text-align: center;
        font-size: 10vw;
    }
`

const DetailDescription = styled.div`
    padding: 10px;
    color: #b3bfb8;
`

const about = () => {
    return(
        <AboutMe id="aboutMe">
            <h3>Hi guys, this is</h3>
            <h2>Jason Kwong</h2>
            <h3>A software engineer who works with both <strong>frontend</strong> and backend based in Hong Kong 🇭🇰</h3>
            <DetailDescription>
              <p>Detail-oriented backend developer with an extensive experience with payment system and backend system. Skilled in handling system design, code review, and managing document and records.</p>
              <p>My hobbit is building mechanical keyboard and building application related to our daily life(such as bus ETA)</p>
            </DetailDescription>

        </AboutMe>
    )
}

export default about;