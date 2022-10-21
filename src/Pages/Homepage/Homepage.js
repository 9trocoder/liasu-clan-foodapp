import React from 'react'
import BottomNav from '../../components/BottomNav'
import HomeNav from '../../components/HomeNav'
import { foodNotActive, homeActive, orderNotActive, profileNotActive } from '../../utility/tools'

function Homepage() {
  return (
    <>
    <HomeNav/>
    
        <BottomNav homeIcon={homeActive} foodIcon={foodNotActive} orderIcon={orderNotActive} profileIcon={profileNotActive} />
    </>
  )
}

export default Homepage