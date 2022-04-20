import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
<footer className="text-muted py-5">
  <div className="container">
    <p className="float-end mb-1">
      <a href="" style={{color:'#FF4F47'}}><FontAwesomeIcon icon={faArrowUp} size="lg"/></a>

    </p>
    <p className="mb-1">Created With <span style={{color:"#FF4F47"}}>♥</span> By Amen Allah Ben Ayada</p>
  </div>
</footer>
  )
}

export default Footer