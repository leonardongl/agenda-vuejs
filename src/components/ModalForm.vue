<template>
  <div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="modalFormLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalFormLabel">
            <span v-if="contato.id">Editar</span> <span v-else>Novo</span> Contato
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeModalForm">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="form-group col-12">
              <label for="nome">Nome:</label>
              <input class="form-control" type="text" name="nome" placeholder="Nome Completo" v-model="contato.nome">
            </div>
            <div class="form-group col-sm-7">
              <label for="email">E-mail:</label>
              <input class="form-control" type="email" name="email" placeholder="exemplo@email.com" v-model="contato.email">
            </div>
            <div class="form-group col-sm-5">
              <label for="telefone">Telefone:</label>
              <input class="form-control" type="text" name="telefone" v-mask="'(##) #####-####'" placeholder="(00) 00000-0000" v-model="contato.telefone">
            </div>
            <div class="form-group col-12">
              <label for="sexo">Sexo:</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="sexo" id="masculinoRadio" v-model="contato.sexo" v-bind:value="'M'">
                <label class="form-check-label" for="masculinoRadio">
                  Masculino
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="sexo" id="femininoRadio" v-model="contato.sexo" v-bind:value="'F'">
                <label class="form-check-label" for="femininoRadio">
                  Feminino
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button v-if="contato.id" @click="editar()" type="button" class="btn btn-sm btn-primary"><i class="fas fa-save"></i> Salvar</button>
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
    cadastrar() {
      axios.post('http://localhost:8080/contatos', this.contato)
      .then(response => {
        document.getElementById('closeModalForm').click()
        this.$emit('cadastrar', response.data)
        this.$toast.success('Contato cadastrado com sucesso.', 'Sucesso!')
      })
      .catch(error => {
        this.$toast.error(error.response.data[0].mensagem, 'Erro!')
      })
    },
    editar() {
      axios.put(`http://localhost:8080/contatos/${this.contato.id}`, this.contato)
      .then(response => {
        document.getElementById('closeModalForm').click()
        this.$emit('editar', response.data)
        this.$toast.success('Contato atualizado com sucesso.', 'Sucesso!')
      })
      .catch(error => {
        this.$toast.error(error.response.data[0].mensagem, 'Erro!')
      })
    }
  },
}
</script>

<style scoped>

</style>
