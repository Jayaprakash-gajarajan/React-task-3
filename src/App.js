import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressclassNamees,
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressclassNamees } from '@mui/material/LinearProgress';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
// import { PortableWifiOffOutlined } from '@mui/icons-material';
// import { StackedChart } from './StackedChart';
// import { ToggleButtonOverview } from './ToogleButtonOverview';
import { useState } from 'react';
import { faCalendarMinus, faClipboardList, faComments, faCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { color } from '@mui/system';
import { Line } from 'react-chartjs-2';
import { StackedChart } from './StackedChart';
function App() {
  return (
    <div className="App">
      <h1>DashBoard</h1>
      <Element />
      <div className='charts'>
        <div className='charts1' style={{ marginRight: "20px" }}>
          <Charts1 />
        </div>
        <div className='charts2'>
          <Charts2 />
        </div>
      </div>
      <Chart />
    </div>
  );
}
function SummaryBoxList() {
  const dataList = [
    {
      value: false,
      number: "40,000",
      icon: faCalendarMinus,
      text: "EARNINGS(MONTHLY)",
      iconColor: "#dddfeb",
      type: "money",
      color: "rgb(135, 96, 251)"
    },
    {
      value: false,
      number: "215,000",
      icon: faDollarSign,
      text: "EARNINGS(ANNUAL)",
      iconColor: "#dddfeb",
      type: "money",
      lineprecentage: 60,
      color: "#eb6f33",
    },
    {
      value: true,
      number: "50%",
      icon: faClipboardList,
      text: "TASK",
      iconColor: "#dddfeb",
      type: "count",
      lineprecentage: 50,
      color: "#03c895",
    },
    {
      value: false,
      number: "18",
      icon: faComments,
      text: "PENDING REQUESTS",
      iconColor: "#dddfeb",
      type: "count",
      lineprecentage: 40,
      color: "#01b8ff",
    }
  ];

  return (
    <div classNameName='summary-box-list'>
      {dataList.map((ele) =>
        <DashBoard data={ele} />)}
    </div>
  )
}
function DashBoard({ data }) {
  return (
    <div classNameName='summary-box-container' >
      <div classNameName='summary-box-spec'>
        <p classNameName='summary-box-text' style={{ color: data.color }}>{data.text}</p>
        <div classNameName='progress'>
          <h2 classNameName='summary-box-number'>
            {data.type == "money" ? "$" : null}
            {data.number}</h2>
        </div>
      </div>
      {data.value == true ? <span><LinearProgress style={{ width: "150px", marginTop: "35px", borderRadius: "10px", height: "9px" }} lineColor={data.color} variant="determinate" value={data.lineprecentage} /></span> : null}

      <div classNameName='icon'>
        <FontAwesomeIcon style={{ color: data.iconColor, fontSize: "35px" }} icon={data.icon} />
      </div>


    </div>
  )
}
function Element() {
  return (
    <div>
      <div className="row">

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Earnings (Monthly)</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon style={{ color: "#dddfeb", fontSize: "35px" }} icon={faCalendarMinus} />

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Earnings (Annual)</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon style={{ color: "#dddfeb", fontSize: "35px" }} icon={faDollarSign} />

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon style={{ color: "#dddfeb", fontSize: "35px" }} icon={faClipboardList} />

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Pending Requests</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon style={{ color: "#dddfeb", fontSize: "35px" }} icon={faComments} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function Charts1() {

  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
        </div>

        <div className="card-body">
          <div className="chart-area" ><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
            <canvas id="myAreaChart" style={{ display: "block", height: "0px", width: "301px", width: "451", height: "0px", className: "chartjs-render-monitor" }}></canvas>
            <StackedChart />
          </div>
          <hr></hr>
        </div>
      </div>
    </div>

  )
}
function Chart() {
  return (
    <div>
      <div className="row">

        <div className="col-lg-6 mb-4">

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
              <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
              <div className="progress mb-4">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>
              <div className="progress mb-4">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>
              <div className="progress mb-4">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-primary text-white shadow">
                <div className="card-body">
                  Primary
                  <div className="text-white-50 small">#4e73df</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-success text-white shadow">
                <div className="card-body">
                  Success
                  <div className="text-white-50 small">#1cc88a</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">
                  Info
                  <div className="text-white-50 small">#36b9cc</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-warning text-white shadow">
                <div className="card-body">
                  Warning
                  <div className="text-white-50 small">#f6c23e</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-danger text-white shadow">
                <div className="card-body">
                  Danger
                  <div className="text-white-50 small">#e74a3b</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-secondary text-white shadow">
                <div className="card-body">
                  Secondary
                  <div className="text-white-50 small">#858796</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-light text-black shadow">
                <div className="card-body">
                  Light
                  <div className="text-black-50 small">#f8f9fc</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">
                  Dark
                  <div className="text-white-50 small">#5a5c69</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="col-lg-6 mb-4">

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "20rem" }} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="..." />
              </div>
              <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                constantly updated collection of beautiful svg images that you can use
                completely free and without attribution!</p>
              <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                unDraw →</a>
            </div>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
            </div>
            <div className="card-body">
              <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                CSS bloat and poor page performance. Custom CSS classNamees are used to create
                custom components and custom utility classNamees.</p>
              <p className="mb-0">Before working with this theme, you should become familiar with the
                Bootstrap framework, especially the utility classNamees.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
function Charts2() {
  return (
    <div>
      <div className="card shadow mb-4">
        <h6 className="m-0 font-weight-bold text-primary" style={{ paddingTop: "20px" }}>Revenue Sources</h6>
        <div className="card-header py-3"></div>
        <div className="card-body">

          <div className="chart-pie pt-4 pb-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
            <canvas id="myPieChart" width="451" height="260" style={{ display: "block", height: "110px", width: "301px", className: "chartjs-render-monitor" }}></canvas>
            <StackedChart />
          </div>

          <div className="mt-4 text-center small">
            <span className="mr-2">
              <FontAwesomeIcon icon={faCircle} style={{ color: "#4e73df" }} />
              Direct
            </span>
            <span className="mr-2">
              <FontAwesomeIcon icon={faCircle} style={{ color: "#1cc88a" }} />
              Social
            </span>
            <span className="mr-2">
              <FontAwesomeIcon icon={faCircle} style={{ color: "#36b9cc" }} />
              Referral
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}


export default App;
