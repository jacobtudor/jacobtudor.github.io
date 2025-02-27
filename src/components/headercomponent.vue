<script setup lang="ts">
import DoubleHelix from './dna.vue'

import {provide, ref} from 'vue';
import { overflowState } from '../stores/overflowstore';

function toggleOverflow() {
  overflowState.toggleOverflow()
}

const menu = ref<boolean>(false);

function toggleMenu() {
    menu.value = !menu.value
    console.log('toggle menu running', menu)
}

provide<boolean>('menu', menu.value)
provide<() => void>('toggleMenu', toggleMenu)
</script>

<template>
    <header :class="{'mobile-menu-open': (menu === true)}">
        <div>
            <span class="line"></span>
            <router-link to="/" class="logo">      
                <DoubleHelix/>
                <!-- <img src="../assets/svg/Sapling.svg" alt=""> -->
            </router-link>
            <span class="line"></span>
            <div class="mobile-burger" @click="$emit('toggle-menu'), toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <nav>
            <span class="vl"></span>
            <router-link to="/Articles">Articles</router-link>
            <div class="shadow"></div>
            <router-link to="/Projects">Projects</router-link>
            <div class="shadow"></div>
            <a href="/#about-me">About me</a>
            <div class="shadow"></div>
            <a href="mailto:jacob_tudor@outlook.com">Contact</a>
            <div class="shadow"></div>
            <span class="vl"></span>
        </nav>    
        <div class="mobile-menu" :class="{'mobile-menu-open': (menu === true)}">
            <nav>
                <span class="vl"></span>
                <!-- <a href="Articles" @click="$emit('toggle-menu'), toggleMenu()">Articles</a>
                <div class="shadow"></div>
                <a href="projects" @click="$emit('toggle-menu'), toggleMenu()">Projects</a>
                <div class="shadow"></div> -->
                <a href="#about-me" @click="$emit('toggle-menu'), toggleMenu()">About me</a>
                <div class="shadow"></div>
                <a href="mailto:jacob_tudor@outlook.com" @click="$emit('toggle-menu'), toggleMenu()">Contact</a>
                <div class="shadow"></div>
                <span class="vl"> </span>
            </nav>
        </div>
    </header>

</template>

<style lang="scss" scoped>
header { 
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}
header > div { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem 0 1rem;
    padding-top: 5px;
}

.line { 
    width: 100%;
    height: 1px;
    margin: 1rem;
    background-color: rgba(0,128,0,1);
}
// .line:first-child { 
//     background: linear-gradient(270deg, rgba(0,128,0,1) 0%, rgba(204,255,0,1) 37%, rgba(244,244,244,1) 100%);
// }
.logo { 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    img { 
        width: 100%;
    }
}
// .logo > div { 
//     scale: 0.15
// }

nav { 
    & { 
        display: flex;
        justify-content: flex-end;
        //margin-right: 3rem;
        margin-right: 5%;

    }
    a { 
        font-size: 0.8rem;
        margin-left: 1rem; 
        color: grey;
        text-decoration: none;
    }
    a:first-of-type { 
        text-decoration: line-through;
        opacity: 0.5;
    }
    a:hover { 
        color: rgba(0,128,0,1);
    }
}

.mobile-menu { 
    position: fixed;
    right: -100%;
    margin: 0;
    width: 85%;
    height: 100vh;
    background-color: #a49893;
    transition: right  1300ms ease;
}
.mobile-menu nav {
    flex-direction: column;
    align-items: center;
    margin: auto;
    .vl { 
        display: block;
        width: 1px;
        height: 1.5rem;
        background-color: #000;
        margin: 1rem
    }
    a { 
        margin: 1rem;
        color: rgba(0,128,0,1);
    }
    
}
.mobile-menu-open {
    right: 0%; 
}
.mobile-burger { 
    & {
        position: fixed;
        right: 2rem;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    &:hover {
        cursor: pointer; 
    }
    span { 
        display: block;
        background-color: green;
        width: 1rem; 
        height: 3px;
        margin: 0.1rem; 
    }
}

@media only screen and (max-width: 600px) {
    header > div { padding-right: 2rem }
    .mobile-burger { 
        display: flex;
    }
    header > nav { 
        display: none;
    }
}
</style>
<style >
 </style>