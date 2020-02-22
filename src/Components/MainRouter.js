import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios';

import Header from './Header'
import Courses from './Courses'
import CourseDetail from './CourseDetail'

const URL_SERVER = 'http://localhost:8001'
class MainRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    loadData () {
        axios.get(URL_SERVER + '/data').then(res => {
            this.setState({courses: [...res.data]})
        })
    }
    componentDidMount() {
        this.loadData();
    }
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <Header/>
                        <Switch>
                            <Route exact path='/' render={() => (<Courses courses={this.state.courses}/>)}/>
                            <Route exact path="/courses/:courseId" render={ (props) => {
                                        let idPost = props.location.pathname.replace('/courses/', '');
                                        const courses = this.state.courses;
                                        if(!courses) return null;
                                        const targetCourse = courses.filter(course => (
                                             course.id == idPost
                                        ))
                                        if(targetCourse.length == 0) {
                                            return (
                                                <h3 className='text-center'>This course does not exist</h3>
                                            )
                                        }
                                        return(
                                             <CourseDetail
                                                  course={targetCourse[0]}
                                             />
                                        )
                                   } }
                                   />

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default MainRouter;