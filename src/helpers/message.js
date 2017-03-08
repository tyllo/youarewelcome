export default class Message {
  /**
   * @param {string} text
   * @param {string} user
   */
  constructor (text, user) {
    const time = Date.now()

    this.id = user + time
    this.time = time
    this.text = text
    this.user = user
    this.error = ''
    this.status = false
  }
}
