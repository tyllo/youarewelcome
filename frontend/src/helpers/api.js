const ANSWER_URL = '/api/get-answer'
const SERVER_TIME_LATENCY = 300

class ErrorMessage {
  constructor (response) {
    this.ok = false
    this.error = response.statusText
  }
}

function timeout (time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

export async function getAnswer (text) {
  const body = new FormData()
  body.set('q', text)

  const response = await fetch(ANSWER_URL, {method: 'POST', body})
  await timeout(SERVER_TIME_LATENCY)

  return response.ok ? response.json() : new ErrorMessage(response)
}
