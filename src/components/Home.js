import React, { PropTypes } from 'react'
import Header from './Header'

const Home = ({ children }) => {
  return (
    <div className='container'>
      <Header />
      {children}
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.array.isRequired
}

export default Home
