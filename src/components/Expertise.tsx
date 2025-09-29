import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Oracle",
    "DB2 iSeries",
    "Stored Procedures",
    "Query Optimization"
];

const labelsSecond = [
    "Python",
    "Pandas",
    "NumPy",
    "PySpark",
    "ETL/ELT",
    "Azure Data Factory",
    "AWS Glue",
    "Databricks"
];
const labelsThird = [
    "Tableau",
    "Power BI",
    "Excel",
    "Snowflake",
    "Data Modeling",
    "Data Warehousing",
    "Cloud (AWS / Azure)",
    "Git & GitHub"
];
function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Data Engineering</h3>
                    <p>Experienced in designing relational schemas, writing optimized SQL queries, 
                       and building ETL pipelines to ensure high-quality and reliable data delivery.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & Big Data</h3>
                    <p>Skilled in leveraging cloud platforms and distributed frameworks to handle large datasets 
                       efficiently and support scalable analytics solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Analytics & Visualization</h3>
                    <p>Passionate about transforming raw data into actionable insights with dashboards, 
                       visualizations, and reports for stakeholders and decision-makers.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;