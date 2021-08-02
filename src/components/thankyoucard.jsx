import React, { useContext } from 'react';
import { appContext } from './context';
import { ThankYouCardWrapper, ThankYouButton } from './styled';

const thanksVariant = {
  in: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  out: {
    x: '-100vw',
  },
  exit: {
    y: '-100vh',
    transition: {
      duration: 0.3,
    },
  },
};
const ThankYouCard = () => {
  const { changeContactFormStatus } = useContext(appContext);
  return (
    <ThankYouCardWrapper
      variants={thanksVariant}
      animate="in"
      initial="out"
      exit="exit"
    >
      <h1>We’re glad we can help you.</h1>
      <p>
        Based on your needs, we will select the appropriate solution. We will
        answear your questions asap.
      </p>
      <p>In the meantime see how we helped others achieve their goals.</p>
      <div>
        <ThankYouButton onClick={() => changeContactFormStatus(0)}>
          Go back
        </ThankYouButton>
      </div>
    </ThankYouCardWrapper>
  );
};

export default ThankYouCard;
