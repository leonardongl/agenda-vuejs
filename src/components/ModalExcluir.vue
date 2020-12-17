<template>
  <div class="modal fade" id="modalExcluir" tabindex="-1" role="dialog" aria-labelledby="modalExcluirLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalExcluirLabel">Excluir Contato</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

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
  methods: {
    async excluir() {
      await axios.put(`excluir/{$id}`, {})
      .then(novoContato => {
        this.$emit('excluir', {})
      })
      .catch(console.log('Erro'))
    }
  },
}
</script>

<style scoped>

</style>
