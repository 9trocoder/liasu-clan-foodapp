import React from 'react'
import BottomNav from '../../components/BottomNav'
import HomeNav from '../../components/HomeNav'
import { foodNotActive, homeActive, orderNotActive, profileNotActive } from '../../utility/tools'
import "./Homepage.css"

function Homepage() {
  return (
    <>
    <HomeNav/>
    <div className="homepage__cnt">
        <p className="greeting">Good Morning 9trocoder,</p>
        <p className="happy">Happy Liasu Clan Day!</p>
    </div>
        <BottomNav homeIcon={homeActive} foodIcon={foodNotActive} orderIcon={orderNotActive} profileIcon={profileNotActive} />
    </>
  )
}

export default Homepage