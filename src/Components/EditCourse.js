import React, { Component } from 'react'

import SingleTextBook from './SingleTextBook'
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
        console.log('Guardando ', modifiedCourse);
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
                <button type='submit' className='btn btn-primary'>Guardar cambios</button>
            </form>
            // <div className='col-12 col-md-10'>
            //     <h4> Modify Course details </h4>
            //     <p> <strong>Id: </strong> {course.id} </p>
            //     <p> <strong>Name: </strong> {course.name} </p>
            //     <p> <strong>Description: </strong> {course.description} </p>
            //     <h4>List of TextBooks</h4>
            //     <table className='table'>
            //         <thead>
            //             <tr>
            //                 <th scope='col'>Author</th>
            //                 <th scope='col'>Title</th>
            //                 <th></th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             {this.getTextBooks(course.textbooks)}
            //         </tbody>
            //     </table>
            // </div>
        )
    }
}

export default EditCourse