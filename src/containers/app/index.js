// React library
import React from 'react';

// My library
import NavBar from '../nav_bar'

const App = ({ children }) => (
  <div>
    <NavBar />

    <main>
      {children}
    </main>
  </div>
)

export default App
