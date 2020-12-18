<template>
  <div>
    <modal-form :contatoSelecionado="contatoSelecionado" @cadastrar="adicionarContato" @editar="editarContato"></modal-form>
    <modal-excluir :contatoSelecionado="contatoSelecionado" @excluir="excluirContato"></modal-excluir>

    <div class="container">
      <h3 class="text-center mt-5 mb-3">Agenda de Contatos</h3>
      <button @click="limparContato()" type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#modalForm"><i class="fas fa-plus"></i> Novo Contato</button>
      <div class="table-responsive mt-3">
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
              <td v-if="contato.sexo=='M'" class="text-center">Masculino</td>
              <td v-else-if="contato.sexo=='F'" class="text-center">Feminino</td>
              <td v-else class="text-center">N/A</td>
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
    </div>
  </div>
</template>

<script>
import ModalForm from './ModalForm'
import ModalExcluir from './ModalExcluir'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    ModalForm,
    ModalExcluir
  },
  data() {
    return {
      index: null,
      contatoSelecionado: {
          id: null,
          nome: null,
          email: null,
          telefone: null,
          sexo: null
      },
      contatos: []
    }
  },
  mounted() {
    this.listarContatos();
  },
  methods: {
    listarContatos() {
      axios.get('http://localhost:8080/contatos', {})
        .then((response) => {
          this.contatos = response.data
        })
        .catch()
    },
    limparContato() {
      this.index = null
      this.contatoSelecionado = {
        id: null,
        nome: null,
        email: null,
        telefone: null,
        sexo: null
      }
    },
    selecionarContato(index) {
      this.index = index
      this.contatoSelecionado = this.contatos[index]
    },
    adicionarContato(contato) {
      this.contatos.push(contato)
      this.limparContato()
    },
    editarContato(contato) {
      this.contatos[contatoSelecionado.id] = contato
      this.limparContato()
    },
    excluirContato() {
      this.contatos.splice(this.index, 1)
      this.limparContato()
    },
  }
}
</script>

<style scoped>

</style>
