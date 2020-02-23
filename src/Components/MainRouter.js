import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios';

import Header from './Header'
import Courses from './Courses'
import CourseDetail from './CourseDetail'
import EditCourse from './EditCourse'

const URL_SERVER = 'http://localhost:8001'
class MainRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.updateData = this.updateData.bind(this)
    }
    loadData () {
        axios.get(URL_SERVER + '/data').then(res => {
            this.setState({courses: [...res.data]})
        })
    }
    componentDidMount() {
        this.loadData();
    }

    updateData(updatedCourse) {
        console.log('es', updatedCourse)
        axios.put(URL_SERVER + `/course/${updatedCourse.id}`, {updatedCourse})
            .then( res => {
                if(res.status == 200) {
                    let data = [...this.state.courses]
                    let index = data.findIndex(course => updatedCourse.id == course.id);
                    data[index] = updatedCourse;
                    this.setState({courses: data});
                    alert('Post updated Succesfully')
                }
                else {
                    alert('Post can not be updated')
                }
            })
    }
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <Header/>
                        <Switch>
                            <Route exact path='/' render={() => (<Courses courses={this.state.courses}/>)}/>
                            <Route exact path='/courses' render={() => (<Courses courses={this.state.courses}/>)}/>
                            <Route exact path="/courses/:courseId" render={ (props) => {
                                        let idCourse = props.location.pathname.replace('/courses/', '');
                                        const courses = this.state.courses;
                                        if(!courses) return null;
                                        const targetCourse = courses.filter(course => (
                                             course.id == idCourse
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
//'courseEdit/' + course['id']
                                    <Route exact path="/courseEdit/:courseId" render={ (props) => {
                                        let idCourse = props.location.pathname.replace('/courseEdit/', '');
                                        const courses = this.state.courses;
                                        if(!courses) return null;
                                        const targetCourse = courses.filter(course => (
                                             course.id == idCourse
                                        ))
                                        if(targetCourse.length == 0) {
                                            return (
                                                <h3 className='text-center'>This course does not exist</h3>
                                            )
                                        }
                                        return(
                                             <EditCourse
                                                  course={targetCourse[0]}
                                                  updateData={this.updateData}
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