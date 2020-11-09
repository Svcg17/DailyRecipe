import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class dountchart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ['#f0f1f4', '#3c4ccf', '#02a499'],
                labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            series: [12, 30, 20]
        }
    }
    render() {
        return (
            <React.Fragment>
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height="285" />
            </React.Fragment>
        );
    }
}


export default dountchart;