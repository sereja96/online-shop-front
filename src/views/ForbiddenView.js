import React from 'react';
import { Panel, Col } from 'react-bootstrap';

class ForbiddenView extends React.Component {

    render () {
        return (
            <Col xs={10} xsOffset={1}
                 md={8} mdOffset={2} >
                <Panel>
                    <img style={{width: '700px'}} src={ '/img/forbidden.jpg' } />
                    <h1>Доступ к данной странице ограничен. У вас не хватает прав для доступа. </h1>
                </Panel>
            </Col>
        )
    }
}

export default ForbiddenView;
