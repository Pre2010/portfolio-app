import React from "react"

import Layout from "../components/layout"
import {
  Div404Container,
  Description404Container,
  Title404,
  Description404
} from '../styles/pages/404.style';

const NotFoundPage = () => (
  <Layout>
    <Div404Container>
      <Description404Container>
        <Title404>404</Title404>
        <Title404>Page Not Found</Title404>
        <Description404>
          This page doesn't exist.
        </Description404>
      </Description404Container>
    </Div404Container>
  </Layout>
)

export default NotFoundPage
