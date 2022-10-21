import React from 'react'
import BottomNav from '../../components/BottomNav'
import { foodNotActive, homeActive, orderNotActive, profileNotActive } from '../../utility/tools'

function Homepage() {
  return (
    <>
    
        <BottomNav homeIcon={homeActive} foodIcon={foodNotActive} orderIcon={orderNotActive} profileIcon={profileNotActive} />
    </>
  )
}

export default Homepage