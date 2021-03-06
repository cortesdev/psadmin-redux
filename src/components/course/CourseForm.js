import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Course</h1> 
            <TextInput 
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title} />
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}/>
            <TextInput 
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category} />

            <TextInput 
                name="lenght"
                label="Lenght"
                value={course.lenght}
                onChange={onChange}
                error={errors.lenght} />

            <input 
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                onClick={onSave}
                className="btn btn-primary" />
        </form>
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;