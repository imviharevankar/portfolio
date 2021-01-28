import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import "./SkillChart.css";

function SkillChart({ level, title }) {

    const state = {

        labels: [ title ],
        datasets: [
            {
                backgroundColor: [
                    "#FEDA4A",
                    "#000000"
                ],
                data: [level, 100-level]
            }
        ]
    }
    return (
        <div className="skillChart">
            <Doughnut  
                data={state}
                options={{
                    title: {
                        display: true,
                        text: `${title}`,
                        fontSize: 14,
                        position: "bottom",
                        fontColor: "#F7F7F7"
                    },
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}

export default SkillChart;
