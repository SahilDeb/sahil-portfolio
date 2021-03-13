import React from 'react'

export default function ProgressBar(props) {
  
  return (
    <div className="pt-1 mx-5">
      <div className="flex relative overflow-hidden h-auto mb-2 text-xs bg-contrast rounded">
        <div className="text-sm w-24 py-1 font-gothic font-semibold inline-block text-secondary bg-link">
          {props.name}
        </div>
        <div style={{ width: `${props.width - 15}%` }} className="shadow-none whitespace-nowrap justify-center bg-primary"></div>
        <span className="px-2 pt-1.5 text-xs font-semibold">
          {props.width}%
        </span>
      </div>
    </div>
  )
}
