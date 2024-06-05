import React from 'react' 
import { useAuth } from '@/contexts/custom-context'
const mainLayout = ({ children }) => {
    const { auth } = useAuth()  
  return (
    <div>main-layout</div>
  )
}

export default main-layout