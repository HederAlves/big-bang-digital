import { createStore } from 'vuex'

export default createStore({
  state: {
    contaPJ: {
      id: '1',
      value: 39.882
    },
    recentTransactions: [
      {
        id: '1',
        name: "Mercadinho da Cidade",
        value: 10.98,
        icon: '#'
      },
      {
        id: '2',
        name: "Tenda Nostra",
        value: 26.38,
        icon: '+'
      },
      {
        id: '3',
        name: "Farmácia Um",
        value: 43.17,
        icon: '-'
      },
      {
        id: '4',
        name: "Academia Body",
        value: 62.12,
        icon: '*'
      },
      {
        id: '5',
        name: "ShopOnline",
        value: 134.24,
        icon: '='
      }
    ],
    recebimentos: [],
    pagamentos: [],
    saldoTotal:  {
      id: 'w4s7e8d4f455q',
      value: 1
    },
  },
  getters: {
  },
  mutations: {
    alterarSaldoTotal(state, data) {
      state.saldoTotal = data
      // console.log(data);
    }
  },
  actions: {
  },
  modules: {
  }
})
