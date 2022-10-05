import {
  createStore
} from 'vuex'

const store = createStore({
  state() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [{
          tasks: ['to do smth', 'read smth', 'cook smth'],
        },
        {
          tasks: ['learn smth', 'play smth', 'insane'],
        }
      ],
      value: JSON.parse(localStorage.getItem('value')) || 'originl value'
    }
  },
  getters: {
    list(st) {
      // let list = localStorage.getItem('list') ?
      //   JSON.parse(localStorage.getItem('list')) :
      //   st.list
      return st.list
        .map(el => el.tasks)
        .map((el, k) => el.map((el, i) => {
          return {
            name: el,
            id: `${k}_${i}`,
          }
        }))
    },
  },
  mutations: {
    updateList(state, { arr, i }) {
      if (state.list[i]) {
        state.list[i].tasks = arr;
        if (!state.list[i].tasks.length) {
          state.list.splice(i, 1);
        }
        localStorage.setItem('list', JSON.stringify(state.list));
        return
      }
      state.list[i] = {
        tasks: arr
      }
      localStorage.setItem('list', JSON.stringify(state.list));
    },
    addItem(state, {
      val,
      i
    }) {
      state.list[i].tasks.push(val);
      localStorage.setItem('list', JSON.stringify(state.list));
    },
    changeValue(state) {
      state.value += '__add__';
      localStorage.setItem('value', JSON.stringify(state.value));
    }
  },
  actions: {
    change({
      commit
    }, {
      arr,
      i
    }) {
      arr = arr.map(el => el.name);
      commit('updateList', {
        arr,
        i
      });
    },
    add({
      commit
    }, payload) {
      commit('addItem', payload)
    },
    saveToLs({
      commit
    }, payload) {
      commit('changeValue', payload);
    }
  }
})

export default store