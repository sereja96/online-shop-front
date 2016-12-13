import React from 'react';
import { Col } from 'react-bootstrap';
import Report from '../containers/reports/AdminReports';

class AdminReportView extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        return (
            <Col xs={12}>
                <h1 className="block-header" >Отчеты</h1>
                <hr className="underline-header" />

                <Report />
            </Col>
        );
    }

}

export default AdminReportView;