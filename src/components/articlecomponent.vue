<template>
    <div class="article-content">
      <div v-html="markdownToHtml"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { marked } from "marked"; // import markdown parser
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import Articles from '../assets/articles/articleslist';
  
  const articles = Articles

  const route = useRoute(); // Access route parameters

  const markdownToHtml = ref(""); // Ensure it's initialized with an empty string
  
  // Fetch the markdown file when the component is mounted
  onMounted(async () => {
  const articlenameurl = route.params.id;
  let path = ''
  for (let [key, value] of Object.entries(articles)) {
    if (value.name === articlenameurl) { 
      path = value.linkhref
      
    }
  }

  const filePath = `/posts/${path}`; // Dynamic file path

  console.log('filepath', filePath)

  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error("Markdown file not found.");

    const text = await response.text();

    // Ensure `marked()` always returns a string
    const parsedHtml = await Promise.resolve(marked(text));
    console.log(parsedHtml)
    markdownToHtml.value = parsedHtml;
  } catch (error) {
    console.error("Error fetching markdown file:", error);
  }
});
</script>

<style lang="scss">
.article-content {
  h1, h2, h3, h4, p, small, b, span { 
    font-family: 'Arial, sans-serif';
    letter-spacing: unset; 
  }
}

</style>