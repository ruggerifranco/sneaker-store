import React from 'react'
import NavigationMenu from '../components/NavigationMenu'

const layout = ({children}) => {
  return (
    <div>
        <NavigationMenu />
        {children}
    </div>
  )
}

export default layout