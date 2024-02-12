import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

test('can receive a new user and show it in the list', async () => {
    render(<App />);
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const button = screen.getByRole('button');

    // Add a new user
    await user.click(nameInput);
    await user.keyboard('jane');
    await user.click(emailInput);
    await user.keyboard('jane@jane.com');

    await user.click(button);

    // screen.debug();
    // lists the DOM and the state of the component in the console; delete after debugging

    // Check the user is in the list
    const name = screen.getByRole('cell', { name: 'jane' });
    const email = screen.getByRole('cell', { name: 'jane@jane.com'}) ;

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
});