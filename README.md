
<img src="./public/twitter-bird-googly-eye.svg" style="width:100%; height:60px">

# OpenAI API Tweet Generator

This is a fake tweet generator app based on the [Pet name generator app](https://github.com/openai/openai-quickstart-node) created for the OpenAPI [quickstart tutorial](https://beta.openai.com/docs/quickstart). It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/). Check out the instructions below to get the project running.
## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-tweet-generator
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Go to the [OpenAI API site](https://openai.com/api/)

6. Sign up for an account and follow their documentation to generate an [API key](https://beta.openai.com/account/api-keys)

7. Create a `.env` file in the main directory of this repository and copy your newly generated API access key in the following format
   ```.env
   OPENAI_API_KEY=PASTE_YOUR_API_KEY_HERE
   ```

8. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! Feel free to modify the app to do whatever you'd like and don't forget to check out the OpenAI [tutorial](https://beta.openai.com/docs/quickstart) covering usage of the API!
