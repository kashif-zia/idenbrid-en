import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Container from 'react-bootstrap/Container';
import './pageheader.scss';

export default function PageHeader({ title, subtext, subTitle }) {
  // Accept the "subtext" prop
  return (
    <section className='section-page-header h'>
      <Container>
        <div className='page-header-content'>
          <div className='page-name'>
            <h3>{title}</h3>
          </div>
          <div className='page-title'>
            <p>{subtext}</p>
            {subTitle && <p className='subtitle'>{subTitle}</p>}
          </div>
        </div>
      </Container>
    </section>
  );
}

// Define prop types for validation
PageHeader.propTypes = {
  subtext: PropTypes.string.isRequired, // Make sure "subtext" is a required string prop
};
