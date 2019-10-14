import React from 'react';
import './InfoPopover.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoPopover = ({popoverText}) => {
    return (
        <div className="info-icon-container" title="Nunc ornare, justo nec tempus vehicula, mi urna rutrum risus, in fermentum dolor nisi eget tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at tincidunt lorem. Vestibulum lacinia ultrices purus, ut sollicitudin est fringilla in.">
            <div className="info-icon">
                <FontAwesomeIcon icon="info"  />
            </div>
        </div>
    )
};

export default InfoPopover;