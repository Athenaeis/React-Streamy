import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    //submitting to action creater createStream with form values
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }
    //render function
    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}


export default connect(null, { createStream })(StreamCreate); //hooking up action creators