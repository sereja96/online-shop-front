import React from 'react';
import { Panel, Col } from 'react-bootstrap';

class NotFoundView extends React.Component {

    render () {
        return (
            <Col xs={10} xsOffset={1}
                 md={8} mdOffset={2} >
                <Panel>
                    <h1>404 - Page Not Found</h1>
                </Panel>
            </Col>
        )
    }
}

export default NotFoundView;
