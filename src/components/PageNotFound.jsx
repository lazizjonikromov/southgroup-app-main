import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <>

            <Router>
                <Switch>
                    <div className="vh-10 d-flex align-items-center justify-content-center">
                        <img src="/img/404.jpg" alt="" className='w-50 mt-5'/>
                    </div>
                </Switch>
            </Router>

        </>
    )
}

export default PageNotFound