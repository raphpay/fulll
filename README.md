# Github Search App

## Overview

This is a React Native application that allows users to search for GitHub users and perform various actions on the search results.

## Features

- Search for GitHub users by username
- View search results in a list
- Select multiple users and perform actions such as duplicating or removing them
- Toggle between editing mode to enable bulk actions

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd github-search-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. The application will open in your default web browser. Use the search input to search for GitHub users by username.

3. Select users by tapping on them to enable bulk actions. Toggle editing mode using the edit icon to perform bulk actions such as duplicating or removing selected users.

## Code Structure

- **src/business-logic**: Contains business logic related to fetching data from the GitHub API and handling user interactions.
  - `APIService.ts`: Provides methods for fetching GitHub user data from the API.
  - `model/IUser.ts`: Defines the interface for the GitHub user data.
- **src/ui**: Contains UI components and styles for the application.
  - `assets`: Contains images and styles used in the UI components.
  - `components`: Contains reusable UI components such as buttons and list items.
  - `App.tsx`: Main component that renders the application UI and handles user interactions.

## Dependencies

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Native](https://reactnative.dev/): A framework for building native applications using React.
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API): A browser API for making HTTP requests.

## License
No license
```