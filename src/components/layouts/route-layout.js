import React from 'react'
import { Route } from 'react-router-dom'
import HomeLayout from '../layouts/home-layout'

const RouteLayout = ({ component: Component, ...rest }) => (
  <Route {...rest} render={matchProps => (
      <HomeLayout>
        <Component {...matchProps}  />
      </HomeLayout>
  )} />
)


export default RouteLayout
