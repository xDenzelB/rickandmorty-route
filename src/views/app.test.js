import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe('App', () => {
  it('Should navigate from list and detail views', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getByText(/loading/i);

    const link = await screen.findByText('Rick Sanchez');
    userEvent.click(link);

    await screen.findByText('Loading character...');
    await screen.findByText('Rick Sanchez');
  })

  it('Should render the details page', async () => {
    render(
      <MemoryRouter initialEntries={['/characters']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText(/loading/i);
    const link = await screen.findByText('Morty Smith');
    userEvent.click(link);

    await waitForElementToBeRemoved(screen.getByText(/loading character.../i));
    await screen.findByText('Character Details');
    await screen.findByText('Morty Smith');
    await screen.findByText('Species: Human');
    await screen.findByText('Status: Alive');
    await screen.findAllByAltText('Image');
    const backLink = await screen.findByText('Back to List');
    userEvent.click(backLink);


  })
})
