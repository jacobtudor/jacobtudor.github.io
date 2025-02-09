<script setup lang="ts">
  import DoubleHelix from '../components/dna.vue';
  import HeaderComponent from '../components/headercomponent.vue';

  import {ref, inject} from 'vue'

  const menu = ref<boolean>(false);

  function toggleMenu() {
    menu.value = !menu.value
    console.log('toggle menu running', menu)
}
</script>

<template>
  <HeaderComponent @toggle-menu="toggleMenu"/>
  <main :class="{'mobile-menu-open': menu}">
    <section class="hero">
      <div class="helix">      <DoubleHelix/>      </div>
      <!-- <img class="sapling-mobile" src="../assets/svg/Sapling.svg"/> -->
      <h1 aria-label="MSc BSc Jacob">
        <label><span>M</span><span>S</span><span>c</span></label>
        <label><span>B</span><span>S</span><span>c</span></label>
        <span>J</span><span>A</span><span>C</span><span>O</span><span>B</span></h1>
      <h2 aria-label="Tudor"><span>T</span><span>U</span><span>D</span>
        <!-- <img class="sapling" src="../assets/svg/Sapling.svg"/> -->
        <span>O</span><span>R</span></h2>
      <div class="my-labels">
        <span>Biological Data Specialist</span>
        <span>Software developer</span>
        <span>Creative</span>
      </div>
    </section>
    <section id="about-me" class="about-section">
      <div class="titles">
        <img src="../assets/png/profile-picture.png" alt="profile picture">
      </div>
      <div class="abouttext">
        <div><img src="" alt=""></div>
        <p><b>MSc</b> Bioinformatics and Systems Biology</p>
        <p><b>BSc</b> Biological Sciences</p>
        <p>With 5 years of studying biology and biological data
          and 2 years of professional web development I blend
          biology and programming together to conduct novel
          research and produce valuable web/software tools
        </p>
        <small>
          <label>Python</label><label>R</label><label>JavaScript</label><label>Typescript</label><label>HTML5</label>
        </small>
        <small>          
          <label>CSS</label><label>MySQL</label><label>Angular</label><label>Vue</label><label>React</label>
        </small>
      </div>
    </section>
    <!-- <section class="topic topic-web">
      <h1>Web</h1>
      <h3><span>DNA</span> tripple helix animation</h3>
      <small>          
        <label>HTML</label><label>SCSS</label><label>CSS</label><label>Vue</label>
      </small>
      <img src="" alt="Double helix animation screenshot">
      <h4>Goal</h4>
      <p>The aim of this project was to create a CSS animation that can conceivably represent a twisting molecule of DNA</p>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h4>Results</h4>
      <p>This project evolved my CSS animation skills, improving my ability to mimic perspective to create the illusion of movement in 3D space</p>
      <a href="">htpps://www.github/jacob/geneidentification</a>
    </section>

    <section class="topic topic-bioinformatics">
      <div class="topic-category-label"><div class="helix-animation-small"><DoubleHelix/></div><label>Biomarker Identification</label></div>
      <h3><span>Using</span> machine learning to identify differentiallyexpressed genes utilised in the “X” biological pathway</h3>
      <div class="topic-skills">
        <small>          
        <label>Python</label><label>PyTorch</label><label>MySQL</label>
        </small>
        <small>          
          <label>Vue</label><label>FastAPI</label><label>HTML</label><label>CSS</label>
        </small>
      </div>
      <img src="" alt="Image of results of Machine Learning model">
      <div class="two-col">
        <div>
          <h4>Data</h4>
          <p>18 rat blood samples</p>
        </div>
        <div>
          <h4>Goal</h4>
          <p>The aim of this project was to create a CSS animation that can conceivably represent a twisting molecule of DNA</p>
        </div>
      </div>
      <div class="two-col">
        <div>
          <h4>Results</h4>
          <p>32  “x” process associated genes
            identified</p>
        </div>
        <div>
          <h4>Conclusions</h4>
          <p>32  “x” process associated genes
            identified</p>
        </div>
      </div>
      <a href="">htpps://www.github/jacob/geneidentification</a>
    </section> -->
  </main>
</template>

<style>
main {
  transition: 1s transform;
}
main.mobile-menu-open {
  transform: translateX(-80%)
}
</style>