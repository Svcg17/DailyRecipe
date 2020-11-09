import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

class RadarChart extends Component {


    render() {
        const data = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "Desktops",
                    backgroundColor: "rgba(2, 164, 153, 0.2)",
                    borderColor: "#02a499",
                    pointBackgroundColor: "#02a499",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#02a499",
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: "Tablets",
                    backgroundColor: "rgba(60, 76, 207, 0.2)",
                    borderColor: "#3c4ccf",
                    pointBackgroundColor: "#3c4ccf",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#3c4ccf",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };

        const option = {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                        var total = meta.total;
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = parseFloat((currentValue / total * 100).toFixed(1));
                        return currentValue + ' (' + percentage + '%)';
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            }
        }

        return (
            <React.Fragment>
                <Radar width={600} height={245} data={data} options={option} />
            </React.Fragment>
        );
    }
}

export default RadarChart;   