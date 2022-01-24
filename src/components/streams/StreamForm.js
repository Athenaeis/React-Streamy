import React from 'react';
import { Field, formValues, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    //form errors
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }
    }
    //inputs to the forms
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                {this.renderError(meta)}
            </div>
        )
    }
    //submitting to action creater with form values
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    //render function
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className='ui button primary'>Submit</button>
            </form>
        );
    }
}
//validate function check user input and returns an error object, if its empty it doesn't get displayed
const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter a title";
    }
    if (!formValues.description) {
        errors.description = "You must enter a description"
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate //hooking up validate function
})(StreamForm);

