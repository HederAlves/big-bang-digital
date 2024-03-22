import { createStore } from 'vuex';

const store = createStore({
  state: {
    account: {
      id: '1',
      name: "heder",
      value: 304.78
    },
    cardsInfo: [
      {
        id: '1',
        title: "Conta PJ",
        value: 39.828
      },
      {
        id: '2',
        title: "Recebimentos",
        value: 765.88
      },
      {
        id: '3',
        title: "Lucro",
        value: 15.887
      }
    ],
    recentTransactions: [
      {
        id: '1',
        name: "Mercadinho da Cidade",
        value: 10.98,
        backgroundColor: '#FDFF9D'
      },
      {
        id: '2',
        name: "Tenda Nostra",
        value: 26.38,
        backgroundColor: '#FF9D9D'
      },
      {
        id: '3',
        name: "Farmácia Um",
        value: 43.17,
        backgroundColor: '#C8FF9D'
      },
      {
        id: '4',
        name: "Academia Body",
        value: 62.12,
        backgroundColor: '#AB9DFF'
      },
      {
        id: '5',
        name: "ShopOnline",
        value: 134.24,
        backgroundColor: '#FF9DEF'
      }
    ],
    payments: [],
    totalBalance: {
      id: 'w4s7e8d4f455q',
      value: 1
    }
  },
  getters: {},
  mutations: {
    updatedBalance(state, data) {
      state.totalBalance = data;
    }
  },
  actions: {},
  modules: {}
});

export default store;
