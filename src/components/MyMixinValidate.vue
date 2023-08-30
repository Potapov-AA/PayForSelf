<script>
export default {
  data() {
    return {
      warringText: ''
    }
  },

  methods: {
    // Проверка на условия показа сообщения-предупреждения
    showWarringMessage() {
      var showWarning = false

      if (this.storePeople.people.length == 0) {
        showWarning = true
        this.warringText = 'Прежде чем начать, пожалуйста добавьте людей.'
      } else if (this.storePeople.people.length == 1) {
        showWarning = true
        this.warringText = 'Проверьте, что добавлено больше одного человека.'
      } else {
        this.storePeople.people.forEach((person) => {
          if (person.name === '') {
            showWarning = true
            this.warringText = 'Проверьте, что всем добавленым людям записаны имена.'
          }
        })
      }

      return showWarning
    }
  }
}
</script>

<style></style>
