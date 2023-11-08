import React from 'react'

const Rainbow = () => {
  return (
    <div className="custom-shape-divider-top-1699453873">
        <svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 Q50 0 100 100 Z" fill="red" />
            <path d="M0 100 Q50 0 100 100 Z" fill="orange" transform="translate(0, 20)" />
            <path d="M0 100 Q50 0 100 100 Z" fill="yellow" transform="translate(0, 40)" />
            <path d="M0 100 Q50 0 100 100 Z" fill="green" transform="translate(0, 60)" />
            <path d="M0 100 Q50 0 100 100 Z" fill="blue" transform="translate(0, 80)" />
            <path d="M0 100 Q50 0 100 100 Z" fill="purple" transform="translate(0, 100)" />
            {/* Insert React components or HTML content inside the SVG */}
        </svg>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
        </svg>
        <svg id='troposphere'>
            <path d="M-1,241 C200,100 407,100 598,241" fill="red" stroke-width="5"/>
        </svg>
        <svg>
        <path stroke="#333333" stroke-width="55" fill="none" opacity="1" stroke-linecap="round" stroke-linejoin="round" d="M0,150 M299,148 M300,129 C 227,60 72,60 0,128" />
        </svg>
        <svg>
        <path stroke="#333333" stroke-width="55" fill="none" opacity="1" stroke-linecap="round" stroke-linejoin="round" d="M0,150 M299,148 M300,129 C 227,60 72,60 0,128" />
        </svg>
    </div>
  )
}

export default Rainbow