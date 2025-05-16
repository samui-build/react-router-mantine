import { render as testingLibraryRender } from '@testing-library/react';
import React from "react";
import { AppTheme } from "~/app-theme";

export function testRender(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <AppTheme env="test">{children}</AppTheme>
    ),
  });
}
