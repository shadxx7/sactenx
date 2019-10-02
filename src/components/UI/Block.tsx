import React from 'react'
import './Block.scss'

const Block: any = (props: {
  className: string
  style: any
  children: any
}) => {
  let classes = []
  classes.push(props.className)
  classes.push('block-wrapper')
  return (
    <div className={classes.join(' ')} style={props.style}>
      {props.children}
    </div>
  )
}

export default Block
