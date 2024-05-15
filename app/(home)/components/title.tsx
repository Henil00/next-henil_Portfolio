import React from 'react'

const Title = ({text,className}:{text:string,className?:string}) => {
  return (
    <div className={className}>
    <h1 className="text-3xl font-bold group-hover:text-purple-500">
      {text}
    </h1>
    <div className="w-40 h-2 bg-purple-500 rounded-full"></div>
    <div className="w-40 h-2 bg-orange-500 rounded-full translate-x-2"></div>
  </div>
  )
}

export default Title