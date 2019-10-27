import React from 'react'
import './Block.scss'

const Block: any = (props: {
  className: string
  style: any
  children: any
  width: number
  height: number
}) => {
  let classes = []
  classes.push(props.className)
  classes.push('block-wrapper')
  const styles = { ...props.style, width: props.width, height: props.height }
  return (
    <div className={classes.join(' ')} style={styles}>
      {props.children}
    </div>
  )
}

export default Block
