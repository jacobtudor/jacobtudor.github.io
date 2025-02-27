<template>
    <HeaderComponent/>
    <section>
        <ArticleComponent :file="id"/>
    </section>
</template>

<script lang="ts" setup>
import HeaderComponent from '../components/headercomponent.vue';
import ArticleComponent from '../components/articlecomponent.vue';

const props = defineProps({
    id: String
})
</script>