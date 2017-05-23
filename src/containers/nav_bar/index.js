// React library
import React from 'react'
import { Link } from 'react-router-dom'

// Semantic library
import { Menu } from 'semantic-ui-react'

const NavBar = () => (
  <Menu>
    <Menu.Item as={Link} to='/'>
      Home
    </Menu.Item>
      <Menu.Item as={Link} to='/about'>
        About
      </Menu.Item>
  </Menu>
)

export default NavBar
