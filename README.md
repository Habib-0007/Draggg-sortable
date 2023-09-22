# React Image Gallery with Auth0 Authentication

This project is a React-based image gallery that incorporates user
authentication using Auth0. It utilizes the React-easy-sort library for easy
sorting of images. Follow the steps below to run the application locally.

### Prerequisites

Before getting started, make sure you have the following prerequisites installed
on your system:

-  Node js [Download and install Node.js](https://nodejs.org/)

### Getting Started

1. Clone the repository to your local machine::

```
git clone https://github.com/your-username/draggg-sortable.github
```

2. Navigate to the project directory:

```
cd draggg-sortable

```

3. Install project dependencies:

```
npm Install
```

### Auth0 Configuration

1. Create an Auth0 account if you don't have one [Auth0
   Signup](https://auth0.com/signup)
2. Set up a new Auth0 application:

   -  Log in to your Auth0 Dashboard.
   -  Click on "Applications" and then "Create Application."
   -  Choose "Single Page Web Applications."
   -  Configure the application settings with your project's information.

3. Configure Auth0 settings in your React application:

   -  Create a `.env` file in the project root and add your Auth0 credentials:

   ```
      REACT_APP_AUTH0_DOMAIN=your-auth0-domain

      REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id

   ```

### Running the Application

1. Start the React development server:

```
npm run dev
```

2. Open your web browser and navigate to http://localhost:3000 to view the
   application.

### Features

-  Image gallery with react-easy-sort
-  User authentication with Auth0

### Deployment

To deploy this application to a live server, you can follow these guides for
different hosting platforms:
- [Netlify Deployment
Guide](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)
- [Vercel Deployment Guide](https://vercel.com/docs/platform/deployments)

### Acknowledgments

-  [React](https://react.dev/)
-  [React-easy-sort](https://github.com/danielstocks/react-easy-sort)
-  [Auth0](https://auth0.com/)
