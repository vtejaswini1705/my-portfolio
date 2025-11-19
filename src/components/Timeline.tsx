import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          /* {/* Mphasis */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Nov 2024 – May 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Mphasis – New York, NY</h4>
            <p>
              Optimized ERP reporting processes with SQL automation, built dashboards in SQL/Excel, and conducted data validation and trend analysis to support decision-making.
            </p>
          </VerticalTimelineElement> */

          {/* Marist University */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2023 – Jul 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Operator</h3>
            <h4 className="vertical-timeline-element-subtitle">Marist University – Poughkeepsie, NY</h4>
            <p>
              Provided frontline technical support, trained new help desk staff, assisted with campus-wide software deployments, and collaborated with IT teams on monitoring and troubleshooting.
            </p>
          </VerticalTimelineElement>

          {/* Accenture */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2022 – Nov 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture – Hyderabad, India</h4>
            <p>
              Automated reporting processes, built dashboards, validated data for accuracy, and supported ERP system integration projects using advanced SQL.
            </p>
          </VerticalTimelineElement>

          {/* Sutherland Global */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2021 – Aug 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Sutherland Global Services – Hyderabad, India</h4>
            <p>
              Analyzed datasets, created Power BI dashboards for transaction monitoring, and used Splunk for application health tracking and machine data analysis.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
