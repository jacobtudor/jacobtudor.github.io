<template>
    <nav>
        <span class="vl"></span>
        <a href="about">About me</a>
        <div class="shadow"></div>
        <a href="contact">Contact</a>
        <div class="shadow"></div>
        <span class="vl"></span>
    </nav>
</template>

<style lang="scss" scoped>
nav { 
    position: fixed;
    z-index: 1;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 3rem 1rem;
}
nav a { 
    font-weight: 300;
    text-decoration: none;
    color: #000;
    margin: 0.5rem 0;
    box-shadow: 0px 2px 2px #c0c0c0;
}
nav a:hover { 
    color: #7dca8a;
    box-shadow: 0px 2px 2px #7dca8a;

}
.vl { 
    background-color: rgb(53, 53, 53);
    width: 1px;
    height: 50px;
    margin-left: 20px;
    align-self: center;
}
</style>