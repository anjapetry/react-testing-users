import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from '../UserList';

// most of the time, you will want to render the component in a helper function
function renderComponent() {
    const users = [
  { name: 'Jane', email: 'jane@jane.com' },
  { name: 'John', email: 'johnfawcett@molfarella.io'},
  ];
  render(<UserList users={users} />);

  return { users };
}

// to be avoided  according to react testing library documentation:
// beforeEach(() => {
  // render(<UserList users={users} />);
// });


test('render one row per user', () => {
    // Arrange: render the component
    renderComponent();

  // const { container } = render(<UserList users={users} />);
  // render(<UserList users={users} />);

// Act: find all the rows in the table
// screen.logTestingPlaygroundURL(); to create query functions
// const rows = screen.getAllByRole('row');
// workaround to use within to get rows from tbody
   const rows = within(screen.getByTestId('users')).getAllByRole('row');
//const table = within(container).getByRole('table');
// const table = container.querySelector('table');
// console.log(table);
// eslint-disable-next-line
// const rows = container.querySelectorAll('tbody tr'); fallback #2


// Assert: ensure correct number of rows in the table
expect(rows).toHaveLength(2);
});

test('render the name and email of each user', () => {
// Arrange: render the component
const { users } = renderComponent();
 // const { container } = render(<UserList users={users} />);

// screen.logTestingPlaygroundURL(); then run test and copy URL

for (let user of users) {
  // Act: find the row for the user
 // const row = screen.getByText(user.name).closest('tr');
  // Assert: ensure the row contains the user's name and email
//  expect(row).toHaveTextContent(user.name);
//  expect(row).toHaveTextContent(user.email);
const name = screen.getByRole('cell', { name: user.name });
const email = screen.getByRole('cell', { name: user.email });

expect(name).toBeInTheDocument();
expect(email).toBeInTheDocument();

}
});