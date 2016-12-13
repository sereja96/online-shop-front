import React from 'react';
import { Col, Button } from 'react-bootstrap';

class Report extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            reportName: 'Отчет'
        };
    }

    loadReport (name) {
        this.props.loadReport(name);
    }

    loadCommonSalesReport () {
        this.setState({reportName: 'Отчет по продажам'});
        this.loadReport("common_sales");
    }

    loadOrderStatusesReport () {
        this.setState({reportName: 'Отчет "Количество Заказов реализованных и откланенных заказов"'});
        this.loadReport("order_statuses");
    }

    loadCategoryPie () {
        this.setState({reportName: 'Отчет "Процентное отношение товаров по категориям"'});
        this.loadReport("category_pie");
    }

    loadBrandPie () {
        this.setState({reportName: 'Отчет "Процентное отношение товаров по брендам"'});
        this.loadReport("brand_pie");
    }


    testReport () {
        this.loadReport("test");
    }

    render () {
        return (
            <div>
                <div>
                    <Col>
                        <Button bsSize="sm"
                                bsStyle="primary"
                                onClick={this.loadCommonSalesReport.bind(this)}>Отчет по продажам</Button>
                        <Button bsSize="sm"
                                bsStyle="primary"
                                onClick={this.loadOrderStatusesReport.bind(this)}>Статусы Заказов</Button>
                        <Button bsSize="sm"
                                bsStyle="primary"
                                onClick={this.loadCategoryPie.bind(this)}>Товары по категориям</Button>
                        <Button bsSize="sm"
                                bsStyle="primary"
                                onClick={this.loadBrandPie.bind(this)}>Товары по брендам</Button>
                        <Button bsSize="sm"
                                bsStyle="primary"
                                onClick={this.testReport.bind(this)}>Тестовый Отчет</Button>
                    </Col>
                </div>
                <div>
                    <h2>{this.state.reportName}</h2>
                </div>
                <div>
                    <canvas style={{height: '500px'}} id="myChart" > </canvas>
                </div>
            </div>
        );
    }

}

export default Report;
