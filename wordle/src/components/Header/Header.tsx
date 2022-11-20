import React from 'react'

interface Iprops {
    type: String,
    text: string,
}


function Header(props: Iprops) {
    const {type, text} = props;
  return (
    <p className={`heading-${type}`}>{text}</p>
  )
}

export default Header