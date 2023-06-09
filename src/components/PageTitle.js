import React from 'react'

const PageTitle = (props) => {
  return (
    <>
    <div id="page-title" className="wrap serif">
        <h1>{props.title}</h1>
        <p>{props.slug}</p>
    </div>
    </>
  )
}

export default PageTitle
