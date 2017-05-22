// React library
import React from 'react';
import { Link } from 'react-router-dom'

const App = ({ children }) => (
  <div>
    <div>
      <Link to="/">Home</Link>
      ...
      <Link to="/about-us">About</Link>
    </div>

    <main>
      {children}
    </main>
  </div>
)

export default App
