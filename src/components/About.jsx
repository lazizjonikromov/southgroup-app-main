import React, { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import History from './History'
import Number from './Number'
import Partners from './Partners'

const About = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1400)
  }, [])
  return (
    <>
      {loading ?
        <div className="loader">
          <img src="/img/logo.png" alt="" />
          <ScaleLoader
            className="loader"
            loading={loading}
            size="70"
            color="#d6171f"
          />
        </div> : ''}
      <div className="about">
        <div className="container">
          <div className="row">
            <h2><span>O</span> компании</h2>
          </div>
        </div>
      </div>
      <History />
      <Number />
      <Partners />
    </>
  )
}

export default About