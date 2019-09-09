import React from 'react';
import './CompanyOverview.scss';

import SectionLineHeader from '../../components/SectionLineHeader/SectionLineHeader';


const CompanyOverview = () => {
  return (
    <div className="company-overview-page">
      <section>
        <SectionLineHeader
          title="Current Events"
        />
        <div className="empty-list-placeholder">
          <span>There are currently no upcomming events. :(</span>
        </div>
      </section>
      <section>
        <SectionLineHeader
          title="Past Events"
        />
        <div className="empty-list-placeholder">
          <span>There have been no previous events. :(</span>
        </div>
      </section>
    </div>
  );
};

export default CompanyOverview;
