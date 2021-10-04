import { render } from '@testing-library/react';
import App from './App';
import TrailsListProvider from './context/TrailsList'

test('Modal deve iniciar fechada', () => {
  const {container, getByTestId}= render(
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );

  expect(getByTestId('main')).not.toContainHTML('<div className="modal" data-testeid="modal"></div>');

});
