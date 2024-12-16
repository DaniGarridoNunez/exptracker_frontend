## About The Project

**screenshot**

Take control of your finances with this intuitive expense management tool. Set budgets, record expenses, and monitor your spending patterns to make smarter financial decisions and stay within your limits.

### Key Features

- **Budget Management**: Easily set and adjust your budget to match your financial goals.  
- **Expense Tracking**: Add expenses with details like amount, name, etc.  
- **Full CRUD Functionality**: Edit, update, or delete budgets and expenses effortlessly.  
- **Real-Time Overview**: Instantly see how much of your budget remains and track your spending habits.   

### Built With

This app was designed to be both scalable and user-friendly, offering a modern solution to task and project management.

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Next](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)


## Usage

For those interested in how the project works without having to install it, here are some screenshots showcasing its key features:  

*Login / Register pages*  
**screenshot**


*Update your profile data* 
**screenshot**


## Getting Started

Follow the steps below to set up the project locally:

### Prerequisites

To get started first you will need to install the following:

- NodeJS
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free PostegreSQL database at [Render](https://render.com/)
2. Get a free API Key at [MailTrap](https://mailtrap.io/es/)
3. Clone the repo
   ```sh
   git clone https://github.com/DaniGarridoNunez/exptracker_frontend.git
   ```
4. Install NPM packages in both /frontend and /backend
   ```sh
   npm install
   ```
5. Enter your API keys in `.env` at /backend for example:
   ```sh
    FRONTEND_URL= http://localhost:5173
    DATABASE_URL=postgresql://example:example.frankfurt-postgres.render.com/exptracker
    EMAIL_HOST=sandbox.smtp.mailtrap.io
    EMAIL_PORT=2525
    EMAIL_USER=username
    EMAIL_PASS=password
    JWT_SECRET=palabrasupersecreta
    NODE_ENV=development
   ```
6. Enter your API keys in `.env` at /frontend:
    ```sh
    API_URL=http://localhost:4000/api
    NEXT_PUBLIC_URL=http://localhost:3000
    ```
7. And then run in both /frontend and /backend:
   ```sh
   npm run dev
   ```


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git switch -c feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [MIT License](https://opensource.org/licenses/MIT) for more information.

## Contact

Daniel Garrido - danigarridonunez@gmail.com - [LinkedIn Profile](https://www.linkedin.com/in/daniel-garrido-87b041223/)