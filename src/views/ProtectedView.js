import React from 'react';
import ReactDOM from 'react-dom';

class ProtectedView extends React.Component {

    render () {
        return (
            <div>
                <div>
                    <h1>Welcome back</h1>
                </div>
            </div>
        );
    }
}

export default ProtectedView;
