import * as api from '@/helpers/api'
import Message from '@/helpers/message'
import ChatMessages from '@/components/chat-messages'
import ChatForm from '@/components/chat-form'

export default {
  data: () => ({
    user: 'Me',
    messages: []
  }),
  methods: {
    async onSubmit (text) {
      const message = new Message(text, this.user)
      this.messages.push(message)

      const response = await api.getAnswer(text)
      this.handlerResponse(response, message)
    },
    handlerResponse (res, userMessage) {
      this.$set(userMessage, 'status', true)

      if (res.ok) {
        const message = new Message(res.a, 'Server')
        this.messages.push(message)
      } else {
        this.$set(userMessage, 'error', res.error)
      }
    }
  },
  components: {
    ChatMessages,
    ChatForm
  }
}
