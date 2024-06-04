import React, { ReactNode } from 'react'

const ChartsLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='flex w-full px-8'>
      {children}
    </div>
  )
}

export default ChartsLayout