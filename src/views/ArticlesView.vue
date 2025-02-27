<script setup lang="ts">
  import DoubleHelix from '../components/dna.vue';
  import HeaderComponent from '../components/headercomponent.vue';
  import Articles from '../assets/articles/articleslist';
  import { RouterLink } from 'vue-router';
  import {ref, inject} from 'vue'
  import Articlecomponent from '@/components/articlecomponent.vue';

  const menu = ref<boolean>(false);

  function toggleMenu() {
    menu.value = !menu.value
    console.log('toggle menu running', menu)
  }

  const articles = ref(Articles)

</script>

<template>
  <HeaderComponent @toggle-menu="toggleMenu"/>
  <main>
    <section>
      <h1>Articles</h1>
        <ul>
          <li class="article" v-for="article in articles" :key="article.linkhref">
            <div>
              <article-link :to="{path: 'article/' + article.name}">{{article.name}}</article-link>
              <div>
                <p>{{article.desc}}</p>
                <small>{{ article.publicationdate }}</small>
              </div>
            </div>
            <div><img src="" alt="{{article.name}}thumbnailalt"></div>
          </li>
        </ul>
    </section>
  </main>
</template>

<style lang="scss">
  .article { 
    & { 
      display: flex;
      margin: 1rem;
      border-bottom: 1px solid green;
    }
    & > div {
      display: flex;
      flex-direction: column;
    }
    & > div > div { 
      display: flex;
    }
    a { 
      font-size: 1.5rem;
      font-weight: 100;
    }
    a { 
      color:green;
    }
    p {
      font-size: 0.8rem;
    }
  }
</style>
