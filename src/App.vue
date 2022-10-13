<template>
  <header class="wrapper">
    <h1 class="title">
      Drag and Drop <br />
      "to-do list"
    </h1>
  </header>

  <main class="wrapper main">
    <!-- информационный текст -->
    <Transition name="fade">
      <ul v-if="list.length" class="text">
        <li>
          <span>&#10133;</span>
          <p>
            Создай несколько списков с задачами и перетаскивай их в другие
            списки при необходимости;
          </p>
        </li>
        <li>
          <span>&#9989;</span>
          <p>Ставь галочку в "Completed" - задача выполнена;</p>
        </li>
        <li>
          <span>&#128397;</span>
          <p>Меняй название задачи и имя списка;</p>
        </li>
        <li>
          <span>&#x1f607;</span>
          <p>Обнови страницу, и список останется;</p>
        </li>
      </ul>
      <p v-else class="text">Список задач пока пуст<span>&#x1f607;</span></p>
    </Transition>

    <!-- списки задач -->
    <TransitionGroup tag="ul" class="container" name="list">
      <List v-for="(elem, i) in list" :key="elem.id" :items="elem" :index="i" />
    </TransitionGroup>

    <!-- кнопка добавления нового списка -->
    <Button class="btn__addList" @click="addList" />
  </main>

  <Footer/>
</template>

<script>
import List from "./components/List.vue";
import Button from "./components/Button.vue";
import { mapActions } from "vuex";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      count: 1,
    };
  },
  name: "App",
  components: {
    List,
    Button,
    Footer,
  },
  computed: {
    list() {
      return this.$store.getters.list;
    },
  },
  methods: {
    ...mapActions(["change"]),
    addList() {
      this.change({
        arr: { tasks: [{}], id: `fd${++this.count}` },
        i: this.list.length,
      });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  background: $blue;
  padding-top: 1% !important;
  padding-bottom: 1% !important;
  .title {
    text-align: center;
    word-break: break-all;
  }
}
main {
  text-align: center;
  .text {
    margin: 5% 0;
    li {
      margin-bottom: 3%;
      p {
        display: inline;
      }
      span {
        display: inline-block;
      }
    }
  }
  .title,
  .text {
    font-family: "Anton", sans-serif;
  }
  .container {
    margin-top: 3%;
    @include flexCenter;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .btn__addList {
    width: 5%;
  }
}

@media (min-width: $laptop) {
  main {
    .text {
      margin: 2% 0;
    }
    .container {
      justify-content: flex-start;
    }
    .btn__addList {
      width: 3%;
    }
  }
}
@media (min-width: $desktop) {
  main {
    .text {
      text-align: center;
      font-size: 20px;
      li {
        margin-bottom: 1%;
      }
    }
    .container {
      justify-content: flex-start;
    }
    .box.btn__addList {
      width: 2%;
      &:hover {
        padding: 2px;
      }
    }
  }
}

.fade-enter-from {
  transform: translateX(-50%);
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s ease-in;
}

.fade-leave-to {
  transform: translateX(50%);
}
.fade-leave-active {
  position: absolute;
  opacity: 0;
}
</style>

