import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
    // render the component
    render(<UserForm />);
    // manipulate the component or find an element to interact with
const inputs = screen.getAllByRole('textbox');
const button = screen.getByRole('button');
    // assert on the results of the interaction - what should happen?
expect(inputs).toHaveLength(2);
expect(button).toBeInTheDocument();

});
