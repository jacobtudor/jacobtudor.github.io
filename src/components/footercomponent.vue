<script setup lang="ts">
import DoubleHelix from './dna.vue'
</script>

<template>
    <footer>
        <div>
            <span class="line"></span>
            <div class="logo">      
                <DoubleHelix/>
                <!-- <img src="../assets/svg/Sapling.svg" alt=""> -->
            </div>
            <span class="line"></span>
        </div>
        <nav>
            <a href="mailto:jacob_tudor@outlook.com">Contact</a>
            <div class="shadow"></div>
            <span class="vl"></span>
        </nav>
    </footer>

</template>

<style lang="scss" scoped>
footer { 
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}
footer > div { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem 0 1rem;
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
// .line:last-child {
//     background: linear-gradient(90deg, rgba(0,128,0,1) 0%, rgba(204,255,0,1) 37%, rgba(244,244,244,1) 100%);
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
    a:hover { 
        color: rgba(0,128,0,1);
    }
}
</style>