<template>
  <footer class="footer wrapper">
    <div class="contacts">
      <ul class="list">
        <li v-for="(social, i) in contacts" :key="i">
          <Link :social="social.title" :href="social.addres"></Link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import Link from "./Link.vue";
export default {
  data() {
    return {
      contacts: [
        {
          title: 'vk',
          addres: 'https://vk.com/'
        },
        {
          title: 'inst',
          addres: 'https://www.instagram.com/'
        },
        {
          title: 'link',
          addres: 'https://ru.linkedin.com/'
        },
        {
          title: 'tg',
          addres: 'https://web.telegram.org/k/'
        },
      ]
    };
  },
  components: {
    Link,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.footer {
  background: $blue;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-top: 5%;
  .contacts {
    text-align: center;
    .list {
      display: flex;
      justify-content: center;
      li {
        width: 8%;
        aspect-ratio: 1 / 1;
        margin-right: 3%;
        .link {
          border-radius: 50%;
        }
      }
    }
  }
}

@media (min-width: $laptop) {
  .footer {
    padding-top: 2%;
    padding-bottom: 2%;
    .contacts {
      .list {
        li {
          width: 5%;
        }
      }
    }
  }
}
@media (min-width: $desktop) {
  .footer {
    padding-top: 1%;
    padding-bottom: 1%;
    .contacts {
      .list {
        li {
          transition: all .3s ease-in-out;
          &:hover{
            padding: 2px;
          }
          width: 3%;
        }
      }
    }
  }
}
</style>