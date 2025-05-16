import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Welcome } from './welcome';
import { testRender } from "~/utils/test-render";

describe('Welcome', () => {
  it('should render successfully', () => {
    testRender(<Welcome />);
    expect(screen.getByText(/What's next?/i)).toBeInTheDocument();
  });
});
