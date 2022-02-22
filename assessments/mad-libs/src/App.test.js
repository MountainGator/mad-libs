import { render, screen, userEvent } from '@testing-library/react';
import useAddCommas from './hooks/useAddCommas';


it('should add commas to numbers', () => {
  expect(useAddCommas(1234)).toEqual('1,234');
  expect(useAddCommas(1000000)).toEqual('1,000,000');
  expect(useAddCommas(9876543210)).toEqual('9,876,543,210');
  expect(useAddCommas(6)).toEqual('6');
  expect(useAddCommas(-10)).toEqual('-10');
  expect(useAddCommas(-5678)).toEqual('-5,678');
  expect(useAddCommas(12345.678)).toEqual('12,345.678');
  expect(useAddCommas(-3141592.65)).toEqual('-3,141,592.65');
})