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
      if (this.storePeople.people.length == 0) {
        this.warningText = 'Прежде чем начать, пожалуйста добавьте людей.'
        return true
      } else if (this.storePeople.people.length == 1) {
        this.warningText = 'Проверьте, что добавлено больше одного человека.'
        return true
      } else {
        let isShowMessage = false
        this.storePeople.people.forEach((person) => {
          if (person.name === '') {
            isShowMessage = true
            this.warningText = 'Проверьте, что всем добавленым людям записаны имена.'
          }
        })
        return isShowMessage
      }
    }
  }
}
</script>
