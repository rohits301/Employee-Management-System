import React from 'react'

const FooterComponent = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div>
        <footer className='footer'>
            <span>All rights reserved {currentYear} by rohits301</span>
        </footer>

    </div>
  )
}

export default FooterComponent