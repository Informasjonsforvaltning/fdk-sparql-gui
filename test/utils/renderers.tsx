import React from 'react';
import { render } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { Store } from 'redux';
import ThemeProvider from '@fellesdatakatalog/theme';

export const renderWithTheme = (
  children: any,
  options?: Record<string, unknown>
) => {
  const rendered = render(<ThemeProvider>{children}</ThemeProvider>, options);
  return {
    ...rendered,
    rerender: (rerenderUi: any) =>
      renderWithTheme(rerenderUi, {
        ...options,
        container: rendered.container
      })
  };
};

export const renderWithRedux = (children: any, store: Store<any, any>) => {
  const rendered = renderWithTheme(
    <ReduxProvider store={store}>{children}</ReduxProvider>
  );
  return {
    ...rendered,
    rerender: (rerenderUi: any, rerenderStore: Store<any, any>) => {
      rendered.container.remove();
      return renderWithRedux(rerenderUi, rerenderStore);
    }
  };
};
