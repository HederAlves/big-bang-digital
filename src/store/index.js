import { createStore } from 'vuex';

const state = {
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
    },
    {
      id: '2',
      name: "Tenda Nostra",
      value: 26.38,
    },
    {
      id: '3',
      name: "Farmácia Um",
      value: 43.17,
    },
    {
      id: '4',
      name: "Academia Body",
      value: 62.12,
    },
    {
      id: '5',
      name: "ShopOnline",
      value: 134.24,
    }
  ],
  payments: [],
  totalBalance: {
    id: 'w4s7e8d4f455q',
    value: 1
  }
};

export default createStore({
  state,
  getters: {},
  mutations: {
    updatedBalance(state, data) {
      state.totalBalance = data;
    }
  },
  actions: {},
  modules: {}
});
