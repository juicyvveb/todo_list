import {
  createStore
} from 'vuex'

const store = createStore({
  state() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [{
          id: 'first',
          title: 'my title',
          tasks: ['to do smth', 'read smth', 'cook smth'],
        },
        {
          id: 'second',
          title: '',
          tasks: ['learn smth', 'play smth', 'insane'],
        }
      ],
    }
  },
  getters: {
    list(st) {
      // return st.list
      //   .map(el => el.tasks)
      //   .map((el, k) => el.map((el, i) => {
      //     return {
      //       name: el.name ? el.name.trim() : el.trim(),
      //       id: `${k}_${i}`,
      //       done: el.done || false
      //     }
      //   }))
      function createTasks(arr,i){
        return arr
        .map((el, k) => {
              return {
                name: el.name ? el.name.trim() : el.trim(),
                id: `${i}_${k}`,
                done: el.done || false
              }
            })
      }
      return st.list
      .map((el,i) => {
        return {
          title: el.title, 
          tasks: createTasks(el.tasks, i)
        }
      });
    },
  },
  mutations: {
    updateList(state, { arr, i }) {
      if (state.list[i]) {
        state.list[i] = arr;
        if (!state.list[i].tasks.length) {
          state.list.splice(i, 1);
        }
        localStorage.setItem('list', JSON.stringify(state.list));
        return
      }
      state.list[i] = arr
      localStorage.setItem('list', JSON.stringify(state.list));
    },
    addItem(state, {
      val,
      i
    }) {
      state.list[i].tasks.push(val);
      localStorage.setItem('list', JSON.stringify(state.list));
    },
    deleteList(state, i){
      state.list.splice(i, 1);
      localStorage.setItem('list', JSON.stringify(state.list));
    }
  },
  actions: {
    change({ commit}, {arr, i}) {
      arr.tasks = arr.tasks.map(el => {return {name: el.name, done: el.done}});
      commit('updateList', { arr, i});
    },
    add({commit}, payload) {
      commit('addItem', payload)
    },
    deleteList({commit}, index){
      commit('deleteList', index)
    }
  }
})

export default store