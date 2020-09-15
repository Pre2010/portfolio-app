import React from "react"

import Layout from "../components/layout"
import {
  div404Container,
  Image404Container,
  Image404,
  Description404Container,
  Title404,
  Description404
} from '../styles/pages/404.style';

const NotFoundPage = () => (
  <Layout>
    <div404Container>
      <Image404Container>
        <Image404 />
      </Image404Container>
      <Description404Container>
        <Title404>Page Not Found</Title404>
        <Description404>
          This page doesn't exist.
        </Description404>
      </Description404Container>
    </div404Container>
  </Layout>
)

export default NotFoundPage
