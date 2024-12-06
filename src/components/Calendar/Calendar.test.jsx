import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Calendar from './Calendar';
import '@testing-library/jest-dom';

describe('Calendar Component', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      setCheckInDate: vi.fn(),
      setCheckOutDate: vi.fn(),
      alreadyBookedDates: [],
      isInitializedRef: { current: false },
    };
  });

  it('should call setCheckInDate and setCheckOutDate once on initial load', () => {
    render(<Calendar {...defaultProps} />);
  
    expect(defaultProps.setCheckInDate).toHaveBeenCalledOnce();
    expect(defaultProps.setCheckOutDate).toHaveBeenCalledOnce();
    expect(defaultProps.isInitializedRef.current).toBe(true);
  });
});






