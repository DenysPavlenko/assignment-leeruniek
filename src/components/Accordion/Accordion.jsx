import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import chevronDown from 'assets/icons/chevron-down.png';
import './Accordion.scss';

const Accordion = ({ heading, children, className }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => setIsActive((isActive) => !isActive);

  const classes = clsx({
    accordion: true,
    'is-active': isActive,
    'no-content': !children,
    [className]: className,
  });

  return (
    <div className={classes} data-testid="accordion">
      <button
        type="button"
        className="accordion__button"
        onClick={handleToggle}
      >
        <div className="accordion__heading">{heading}</div>
        <img src={chevronDown} className="accordion__icon" alt="chevron" />
      </button>
      {isActive && children && (
        <div className="accordion__content" data-testid="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  heading: PropTypes.node.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Accordion;
