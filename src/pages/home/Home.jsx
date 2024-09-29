import React from 'react'
import Topbar from '../../componats/Topbar/Topbar'

import './home.css'
import Feed from '../../componats/feed/Feed'
import Sidebar from '../../componats/sidebar/Sidebar'
import Rightbar from '../../componats/rightbar/Rightbar'

function Home() {
  return (
   <>
    <Topbar />
    <div className="homecontener">
    <Sidebar/>
    <Feed />
    <Rightbar/>
    </div>
   </>
  )
}

export default Home
