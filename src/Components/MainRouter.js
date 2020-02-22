import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
class MainRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <div className='row justify-content-center'>
                    Title for Eddy's App
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default MainRouter;