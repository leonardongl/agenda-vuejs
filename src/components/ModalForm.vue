<template>
  <div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="modalFormLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalFormLabel">
            <span v-if="dadosForm.id">Editar</span> <span v-else>Novo</span> Contato
            </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="form-group col-12">
              <label for="nome">Nome:</label>
              <input class="form-control" type="text" name="nome" placeholder="Nome Completo" :v-mo="dadosForm.nome">
            </div>
            <div class="form-group col-sm-7">
              <label for="email">E-mail:</label>
              <input class="form-control" type="email" name="email" placeholder="exemplo@email.com" :value="dadosForm.email">
            </div>
            <div class="form-group col-sm-5">
              <label for="telefone">Telefone:</label>
              <input class="form-control" type="text" name="telefone" placeholder="(00) 00000-0000" :value="dadosForm.telefone">
            </div>
            <div class="form-group col-12">
              <label for="sexo">Sexo:</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="sexo" id="masculinoRadio" value="M" :checked="(dadosForm.sexo=='M')">
                <label class="form-check-label" for="masculinoRadio">
                  Masculino
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="sexo" id="femininoRadio" value="F" :checked="(dadosForm.sexo=='F')">
                <label class="form-check-label" for="femininoRadio">
                  Feminino
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button v-if="dadosForm.id" @click="editar()" type="button" class="btn btn-sm btn-primary"><i class="fas fa-save"></i> Salvar</button>
          <button v-else type="button" @click="cadastrar()" class="btn btn-sm btn-primary"><i class="fas fa-save"></i> Cadastrar</button>
          <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal"><i class="fas fa-times"></i> Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalForm',
  props: {
    contatoSelecionado: { type: Object, default: null }
  },
  data() {
    return {
      contato: null
    }
  },
  computed: {
    dadosForm() {
      return this.contato = this.contatoSelecionado
    }
  },
  methods: {
    async cadastrar() {
      var novoContato = await axios.post('cadastrar', {
        nome: '',
        email: '',
        telefone: '',
        sexo: ''
      })
      .then(novoContato => {
        this.$emit('cadastrar', novoContato)
      })
      .catch(console.log('Erro'))

    },
    async editar() {
      var contatoEditado = await axios.put(`editar/{$id}`, {
        nome: '',
        email: '',
        telefone: '',
        sexo: ''
      })
      .then(novoContato => {
        this.$emit('editar', contatoEditado)
      })
      .catch(console.log('Erro'))
    }
  },
}
</script>

<style scoped>

</style>
