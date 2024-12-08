# F24-Berlin-Web-Circle

## Getting Started

```bash
# After cloning the repository, install the npm dependencies
npm install
```

```bash

# Run development server
npm run dev
```

Then you should see something like this in the terminal, showing you can see the app at [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

```bash
  VITE v3.0.7  ready in 175 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```

## Running tests

```bash
npm test
```

```bash
## Google Maps API Key

To integrate Google Maps into the application, you need an API key from the Google Cloud Platform. Follow the below steps to obtain the API key:

### Step 1: Access the Google Maps Platform
1. Visit the Google Maps Platform Credentials page(https://developers.google.com/maps/documentation/javascript/get-api-key#console).
2. If you don’t already have a Google Cloud account, you’ll need to sign up and create a new project.

### Step 2: Create a New Project (if you haven't created it yet)
1. In the Google Cloud Console, click the **Select a Project** dropdown at the top of the page.
2. Click **New Project**, provide a project name, and click **Create**.

### Step 3: Enable APIs and Services
1. Select your project name in the Google Cloud Console.
2. Go to the **Solution Library** section in the sidebar menu.
3. Search for **Maps JavaScript API** and click on it.
4. Click **Enable** to activate the API for your project.

### Step 4: Generate an API Key
1. Navigate to the Credentials page (https://console.cloud.google.com/apis/credentials).
2. Click **Create Credentials** at the top, then choose **API Key** from the dropdown.
3. A dialog will appear displaying your newly created API key. **Copy this key** as you will use it in the application.

### Step 5: Integrate the API Key into the Application
1. Create a .env File:
   Place a .env file in the root directory of your project.

2. Add the API Key to the File:
   Save the API key as a value for the VITE_GOOGLE_MAPS_API_KEY environment variable. The file should look like this:
   VITE_GOOGLE_MAPS_API_KEY=AIzvSnAASOwM0gH7PylljbJqpMoQFuPex1ZUreX


## Prisma and Database
1. Install PostgreSQL
   Download and install PostgreSQL from the official website.

2. Create a PostgreSQL Database
   Use the PostgreSQL command line (psql) or a GUI tool like pgAdmin to create a new database.

3. Create an .env File
   In the main directory (the server folder), create a file named '.env'

Inside this file, define the DATABASE_URL variable with your PostgreSQL connection string. Replace placeholders with your actual values:

DATABASE_URL=postgres://YourUserName:YourPassword@localhost:5432/prisma

YourUserName: Replace YourUserName and YourPassword with your PostgreSQL username and password.
5432: Ensure this matches the port you are using for PostgreSQL.
prisma: Replace with the name of the database.

4. Generate Prisma Client and Migrate the Database
   After defining models in schema.prisma, run the following commands to generate the Prisma client and migrate the database schema:
npx prisma generate
npx prisma migrate dev

## Database Migration

After modifying the `schema.prisma` file, apply the migration by running:

npx prisma migrate dev --name add_place_model


## Vite React Template

Taken from https://reactrouter.com/en/main/start/tutorial
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Collaborators:

- Bohdan Hrabynskyi ([@grabinskij](https://github.com/grabinskij))
- Alina Cuznetov ([@alinaincodeland](https://github.com/alinaincodeland))
- Michael Kleinschmidt ([@miklesch](https://github.com/miklesch))
- Mohammad Salavati ([@Sci-mo](https://github.com/Sci-mo))
- Dona Vidushani Nishshanka ([@dvnishshanka](https://github.com/dvnishshanka))
- Iman Bajalan ([@BajalanIman](https://github.com/BajalanIman))
- Samuel Konzi ([@Konzisam](https://github.com/Konzisam))
- Michael Kleinschmidt ([@miklesch](https://github.com/miklesch))
- Kalina Iwaszko ( [@messkalina] (https://github.com/messkalina))
- Bhagya Samarathunga ( [@BhagyaPrasadSamarathunga] (https://github.com/BhagyaPrasadSamarathunga))
- Gabriel Melhem ([@GabrielMelhem] (https://github.com/GabrielMelhem))
- Nataliya Rodionova ([@006080](https://github.com/006080))
```
