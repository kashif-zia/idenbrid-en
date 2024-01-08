import React from 'react';
import Marquee from 'react-fast-marquee';
import { ReactSVG } from 'react-svg';

// eslint-disable-next-line no-unused-vars
export default function UpdateFuture() {
  return (
    <Marquee speed='150' className='marquee-container'>
      <ReactSVG className='mx-5' src='/assets/images/updateFutere.svg' alt='futureImg' /> &nbsp; &nbsp; &nbsp;
    </Marquee>
  );
}
