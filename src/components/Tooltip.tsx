import React from 'react';
import OvalTextBox from './OvalTextBox';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = 'top',
  className = '',
}) => {
  let positionClasses;

  switch (position) {
    case 'bottom':
      positionClasses = 'bottom-full mb-2';
      break;
    case 'top':
      positionClasses = 'top-full mt-2';
      break;
    case 'left':
      positionClasses = 'right-full mr-2';
      break;
    case 'right':
      positionClasses = 'left-full ml-2';
      break;
    default:
      positionClasses = 'bottom-full mb-2';
  }

  return (
    <div className="relative group inline-block">
      <div className="relative">{children}</div>
      <div
        className={`absolute ${positionClasses} opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-transform duration-300 ease-in-out bg-gray-800 text-white text-xs rounded-full ${className}`}
      >
        <OvalTextBox text={text} className={className} />
      </div>
    </div>
  );
};

export default Tooltip;
