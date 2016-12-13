import Report from './../../components/report/Report';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { isSuccess, getDataFromAction } from '../../actions/RequestAction';
import { getReportData } from '../../actions/ReportAction';

function mapStateToProps(globalState, ownProps) {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadReport: function (reportName) {
            dispatch(getReportData(reportName)).then((response) => {
                if (isSuccess(response)) {
                    console.log(getDataFromAction(response));
                    const data = getDataFromAction(response);
                    var ctx = document.getElementById("myChart");
                    var myChart = new Chart(ctx, data);
                }
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);


