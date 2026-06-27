# User Management Dashboard

A responsive React application for managing users using the JSONPlaceholder API.

## Features

- View Users
- Add User
- Edit User
- Delete User
- Search Users
- Filter Users
- Sorting
- Pagination
- Responsive Design
- Material UI DataGrid

## Tech Stack

- React
- Vite
- JavaScript
- Material UI
- Axios
- React Hot Toast

## Installation

```bash
git clone <repository-url>

cd user-management-dashboard

npm install

npm run dev
```

## Build

```bash
npm run build
```

## API

https://jsonplaceholder.typicode.com/users

## Project Structure

```
src
 ├── api
 ├── components
 ├── hooks
 ├── pages
 ├── services
 ├── theme
 └── utils
```

## Assumptions

- JSONPlaceholder does not persist created users.
- Newly added users exist only in local state.
- Editing or deleting those locally created users is handled on the client side.

## Future Improvements

- React Hook Form
- Yup validation
- Authentication
- Dark mode
- Backend integration
