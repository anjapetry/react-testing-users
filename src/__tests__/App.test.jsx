import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

test('can receive a new user and show it in the list', async () => {
    render(<App />)

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const button = screen.getByRole('button');

    // Add a new user
    await user.click(nameInput);
    await user.keyboard('joni');
    await user.click(emailInput);
    await user.keyboard('joni@joni.com');

    await user.click(button);

    // screen.debug();
    // lists the DOM and the state of the component in the console; delete after debugging
    // Check the user is on the list
    const name = screen.getByRole('cell', { name: 'joni' });
    const email = screen.getByRole('cell', { name: 'joni@joni.com'});

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
});

