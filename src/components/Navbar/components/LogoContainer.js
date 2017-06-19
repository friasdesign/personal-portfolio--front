import React from 'react'

const LogoContainer = ({logo}: {logo: string}) => (
  <div className="logo-container">
    <img src={logo} alt="logo" className="logo" />
  </div>
)

export default LogoContainer
