import React from "react";
import warehouseImg from '../assets/images/mock05.png';
import dashboardImg from '../assets/images/mock02.png';
import pipelineImg from '../assets/images/mock03.png';
import institutionalImg from '../assets/images/mock04.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">

            {/* Student Data Warehouse */}
            <div className="project">
                <a href="https://github.com/vtejaswini1705/student-data-warehouse" target="_blank" rel="noreferrer">
                    <img src={warehouseImg} className="zoom" alt="Student Data Warehouse" width="100%"/>
                </a>
                <a href="https://github.com/vtejaswini1705/student-data-warehouse" target="_blank" rel="noreferrer">
                    <h2>Student Data Warehouse</h2>
                </a>
                <p>Designed a mock institutional data warehouse with relational schemas, SQL queries, and visualization workflows. 
                   Includes enrollment, retention, and graduation reporting aligned with compliance standards (IPEDS/NYSED style).</p>
            </div>

            {/* Interactive Dashboards */}
            <div className="project">
                <a href="https://public.tableau.com/" target="_blank" rel="noreferrer">
                    <img src={dashboardImg} className="zoom" alt="Dashboards" width="100%"/>
                </a>
                <a href="https://public.tableau.com/" target="_blank" rel="noreferrer">
                    <h2>Interactive Dashboards</h2>
                </a>
                <p>Developed dashboards using Tableau and Power BI to visualize trends such as student outcomes, 
                   retention metrics, and financial KPIs. Focused on delivering clear, actionable insights to stakeholders.</p>
            </div>

            {/* ETL / Data Pipelines */}
            <div className="project">
                <a href="https://github.com/vtejaswini1705" target="_blank" rel="noreferrer">
                    <img src={pipelineImg} className="zoom" alt="ETL Pipelines" width="100%"/>
                </a>
                <a href="https://github.com/vtejaswini1705" target="_blank" rel="noreferrer">
                    <h2>ETL & Data Pipelines</h2>
                </a>
                <p>Built sample ETL pipelines using Python, Pandas, and SQL for transforming raw datasets into clean, 
                   structured formats. Automated processes for improved data quality and faster reporting cycles.</p>
            </div>
            {/* Institutional Data Dashboard */}
            <div className="project">
                <a href="https://institutional-data-project-ggp4q5nrecxxfpam9vd39j.streamlit.app/" target="_blank" rel="noreferrer">
                    <img src={institutionalImg} className="zoom" alt="Institutional Data Dashboard" width="100%"/>
                </a>
                <a href="https://institutional-data-project-ggp4q5nrecxxfpam9vd39j.streamlit.app/" target="_blank" rel="noreferrer">
                    <h2>Institutional Data Dashboard</h2>
                </a>
                <p>Developed an interactive Streamlit dashboard to analyze mock institutional data. Includes enrollment trends, 
                   retention metrics, gender distribution, and average age by major. Features filtering and exportable data for 
                   reproducible analysis.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;
