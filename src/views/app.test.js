import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe('App', () => {
  it('Should navigate from list and detail views', async () => {
    render(
      <MemoryRouter initialEntries={['/characters']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText(/loading/i);

    const link = await screen.findByText('Rick Sanchez');
    userEvent.click(link);

    await screen.findByText('Loading character...');
    await screen.findByText('Rick Sanchez');
  })
})