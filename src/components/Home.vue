<template>
  <div>
    <modal-form :contatoSelecionado="contatoSelecionado" @cadastrar="adicionarContato" @editar="editarContato"></modal-form>
    <modal-excluir @excluir="excluirContato"></modal-excluir>

    <div class="container">
      <h3 class="text-center mt-5 mb-3">Agenda de Contatos</h3>
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th class="text-center">ID</th>
              <th>Nome</th>
              <th class="text-center">E-mail</th>
              <th class="text-center">Telefone</th>
              <th class="text-center">Sexo</th>
              <th class="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(contato, index) in contatos" :key="contato.id">
              <td class="text-center">{{ contato.id }}</td>
              <td>{{ contato.nome }}</td>
              <td class="text-center">{{ contato.email }}</td>
              <td class="text-center">{{ contato.telefone }}</td>
              <td class="text-center">{{ contato.sexo }}</td>
              <td class="text-center">
                <button @click="selecionarContato(index)" type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#modalForm">
                  <i class="fas fa-edit"></i> Editar
                </button>
                <button @click="selecionarContato(index)" type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#modalExcluir">
                  <i class="fas fa-eraser"></i> Excluir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#modalForm"><i class="fas fa-plus"></i> Novo Contato</button>
    </div>
  </div>
</template>

<script>
import ModalForm from './ModalForm'
import ModalExcluir from './ModalExcluir'

export default {
  name: 'Home',
  components: {
    ModalForm,
    ModalExcluir
  },
  data() {
    return {
      contatoSelecionado: {
          id: null,
          nome: null,
          email: null,
          telefone: null,
          sexo: null
      },
      contatos: [
        {
          id: '1',
          nome: 'Leonardo',
          email: 'leonardongl@gmail.com',
          telefone: '(92) 98814-6884',
          sexo: 'M'
        },
        {
          id: '2',
          nome: 'Herison',
          email: 'herison@gmail.com',
          telefone: '(92) 98814-6884',
          sexo: 'F'
        }
      ]
    }
  },
  methods: {
    selecionarContato(index) {
      this.contatoSelecionado = this.contatos[index]
    },
    adicionarContato(contato) {
      this.contatos.push(contato)
    },
    editarContato(contato) {
      this.contatos.push(contato)
    },
    excluirContato(index) {
      this.contatos.pop(index)
    }
  }
}
</script>

<style scoped>

</style>
