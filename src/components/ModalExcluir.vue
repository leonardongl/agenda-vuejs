<template>
  <div class="modal fade" id="modalExcluir" tabindex="-1" role="dialog" aria-labelledby="modalExcluirLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalExcluirLabel">Excluir Contato</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeModalExcluir">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <h6>Deseja realmente excluir esse contato?</h6>
            {{ contato.nome }}
        </div>
        <div class="modal-footer">
          <button @click="excluir()" type="button" class="btn btn-sm btn-danger"><i class="fas fa-eraser"></i> Excluir</button>
          <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal"><i class="fas fa-times"></i> Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalExcluir',
  props: {
    contatoSelecionado: { type: Object, default: null }
  },
  data() {
    return {
      contato: {
        id: null,
        nome: null,
        email: null,
        telefone: null,
        sexo: null
      }
    }
  },
  watch: {
    contatoSelecionado() {
      this.contato = this.contatoSelecionado
    }
  },
  methods: {
    excluir() {
      axios.delete(`http://localhost:8080/contatos/${this.contato.id}`, {})
      .then(novoContato => {
        document.getElementById('closeModalExcluir').click()
        this.$emit('excluir')
        this.$toast.success('Contato excluído com sucesso.', 'Sucesso!')
      })
      .catch(error => {
        console.log(error.response)
        this.$toast.error('Erro ao excluir o contato.', 'Erro!')
      })
    }
  },
}
</script>

<style scoped>

</style>
