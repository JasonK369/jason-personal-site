import * as React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navbar'

type IProps = {
	pageTitle: string,
	children?: JSX.Element
};

const Container = styled.div`
	margin: auto;
	font-family: Noto Sans;
  width: 100%;
`

// React.ReactNode = a react component
const layout = ({ pageTitle, children }: IProps) => {
	return (
		<Container>
			<title>{pageTitle}</title>
			<NavBar />
			<main>
				{children}
			</main>
		</Container>
	)
}


export default layout;