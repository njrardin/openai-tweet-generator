import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * 
 * @param {*} request an api request object containing the author of the fake tweet
 * @param {*} response an api response object containing the generated fake tweet
 */
export default async function (request, response) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(request.body.tweetAuthor),
    temperature: 0.75,
    max_tokens: 100,
  });
  console.log('Result:', completion);
  response.status(200).json({ result: completion.data.choices[0].text });
}

/**
 * 
 * @param {String} tweetAuthor the author of the fake tweet
 * @returns the prompt to send to OpenAI to generate a fake tweet
 */
function generatePrompt(tweetAuthor) {
  return `Generate a full sentence fake tweet less than 280 characters long.

Author: Taylor Swift
Tweet: with some help from the excellent @birbigs, @bejohnce, and @meellisday who fabulously portray… get ready for it… my grown sons and daughter in law? Anyway. Forever grateful to my incredible DP @The_RinaYang and our amazing crew. 🌌🤩
Author: Hank Green
Tweet: A lot of people who say they want "free speech" actually just want to be the one in charge of which speech is free.
Author: ${tweetAuthor}
Tweet: `;
}
