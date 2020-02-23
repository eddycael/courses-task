import React, { Component } from 'react'

import SingleTextBook from './SingleTextBook'
import { Link } from 'react-router-dom';
class EditCourse extends Component {
    constructor(props) {
        super(props)
        this.editCourse = this.editCourse.bind(this);
    }
    nameRef = React.createRef();
    descriptionRef = React.createRef();
    getTextBooks(textbooks) {
        if (!textbooks || textbooks.length == 0)
            return null;
        return textbooks.map((textbook, index) =>
            (<SingleTextBook key={'textbook' + index} textbook={textbook}/>)
        )
    }
    editCourse(event) {
        event.preventDefault();
        const modifiedCourse = {
            name: this.nameRef.current.value,
            description: this.descriptionRef.current.value,
            id: this.props.course.id,
            textbooks: [...this.props.course.textbooks]
        }
        this.props.updateData(modifiedCourse)
    }
    render() {
        const {course} = this.props
        return (
            <form onSubmit={this.editCourse} className='col-10'>
                <legend className='text-center'>Edit Course</legend>
                <div className='form-group'>
                    <label>Course Name:</label>
                    <input type='text' ref={this.nameRef} placeholder='Course Name' className='form-control' defaultValue={course.name}></input>
                </div>
                <div className='form-group'>
                    <label>Course Description:</label>
                    <input type='text' ref={this.descriptionRef}placeholder='Course Description' className='form-control' defaultValue={course.description}></input>
                </div>
                <Link to={'/'} className='btn btn-warning'>Cancel</Link>
                <button type='submit' className='btn btn-primary'>Save changes</button>
            </form>
        )
    }
}

export default EditCourse