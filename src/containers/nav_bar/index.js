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
    <Menu.Item as={Link} to='/ask'>
      Ask
    </Menu.Item>
    <Menu.Item as={Link} to='/vote'>
      Vote
    </Menu.Item>
    <Menu.Item as={Link} to='/result'>
      Results
    </Menu.Item>
  </Menu>
)

export default NavBar
