import { getData } from './RequestAction';
import { LOAD_REPORT_ERROR, LOAD_REPORT_REQUEST, LOAD_REPORT_SUCCESS } from '../constants/ReportConstants';


export function getReportData (reportName) {
    const request = getData(['/admin/report', reportName].join('/'), true);

    return {
        type: LOAD_REPORT_REQUEST,
        payload: request
    }
}

