<script>
export default {
  data() {
    return {
      warningText: ''
    }
  },

  methods: {
    // Проверка на условия показа сообщения-предупреждения
    isShowMessage() {
      let isShowMessage = false

      if (this.storePeople.people.length == 0) {
        isShowMessage = true
        this.warningText = 'Прежде чем начать, пожалуйста добавьте людей.'
      } else if (this.storePeople.people.length == 1) {
        isShowMessage = true
        this.warningText = 'Проверьте, что добавлено больше одного человека.'
      } else {
        this.storePeople.people.forEach((person) => {
          if (person.name === '') {
            isShowMessage = true
            this.warningText = 'Проверьте, что всем добавленым людям записаны имена.'
          }
        })
      }

      return isShowMessage
    }
  }
}
</script>
