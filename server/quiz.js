const axios = require('axios');
const api = 'Zl7jR6RoJG5tFmQhLKKRpshIiacCEjoPTlrLe7Jh';

// Funtion to fetch quiz questions
async function fetchQuizQuestions(category, difficulty, limit = 10) {
  // console.log('quiz api triggered');
  let response = '';
  if (category === 'Random') {
    // console.log('random case');
    response = await axios.get(
      `https://quizapi.io/api/v1/questions?apiKey=${api}&difficulty=${difficulty}&limit=${limit}`
    );
  } else {
    // console.log('random else case');
    response = await axios.get(
      `https://quizapi.io/api/v1/questions?apiKey=${api}&category=${category}&limit=${limit}&difficulty=${difficulty}`
    );
  }

  const quizData = await response.data;
  return quizData;
}

module.exports = fetchQuizQuestions;
