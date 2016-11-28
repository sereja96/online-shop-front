import React from 'react';

class NoContent extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <h3>{this.props.message || "Пододжите, идет загрузка..."}</h3>
        );
    }

}

export default NoContent;
