import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function CustomIcon({color}) {
    let myColor;
    let myRightLine;
    let myLeftLine;
    if(color=='light'){
        myColor = 'text-light fs-2 icon d-flex justify-content-center align-items-center';
        myRightLine = 'line ms-3 bg-light';
        myLeftLine = 'line me-3 bg-light';
    }
    else{
        myColor = 'text-dark fs-2 icon d-flex justify-content-center align-items-center';
        myRightLine = 'line ms-3 bg-dark';
        myLeftLine = 'line me-3 bg-dark';
    }
  return (
    <>
        <div className={myColor}>
            <div className={myLeftLine}></div>
            <span><FontAwesomeIcon icon={faStar} /></span>
            <div className={myRightLine}></div>
        </div>
    </>
  )
}
