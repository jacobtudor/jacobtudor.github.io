<template>
    <div class="dna">
        <div class="row row1">
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
        </div>
        <div class="row row2">
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="strand">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// Variables
$circlediameter: 3px;
$lineheight: 2rem;
$linewidth: 2px;
$linespacing: 1px;

$color1:green;
$color2:greenyellow;

// .dna { 
//     width: 500px;
// }

.row { 
    display: flex;
    //justify-content: space-between;
}
.row1 .strand { 
    flex-direction: column-reverse;
}
.row2 .strand { 
    flex-direction: column;
}

.strand { 
    position: relative;
    display: flex;
    align-items: center;
    height: $lineheight;
    padding: 0 $linespacing; 
}

// Circles
.circle { 
    position: absolute;
    background-color: $color1;
    width: $circlediameter; height: $circlediameter;
    border-radius: 50%;
}
.row1, .row2 {
    .circle {
        animation-duration: 5000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .strand:nth-child(1) .circle, .strand:nth-child(1) .line { 
        //animation-delay: calc(0.25s * 0);
        animation-delay: 0ms;
    }
    .strand:nth-child(2) .circle, .strand:nth-child(2) .line { 
        //animation-delay: calc(0.25s * 1);
        animation-delay: 250ms;
    }
    .strand:nth-child(3) .circle, .strand:nth-child(3) .line { 
        //animation-delay: calc(0.25s * 2);
        animation-delay: 500ms;
    }
    .strand:nth-child(4) .circle, .strand:nth-child(4) .line { 
        //animation-delay: calc(0.25s * 3);
        animation-delay: 750ms;
    }
    .strand:nth-child(5) .circle, .strand:nth-child(5) .line { 
        //animation-delay: calc(0.25s * 4);
        animation-delay: 1000ms;
    }
    .strand:nth-child(6) .circle, .strand:nth-child(6) .line { 
        //animation-delay: calc(0.25s * 4);
        animation-delay: 1250ms;
    }
    .strand:nth-child(7) .circle, .strand:nth-child(7) .line { 
        //animation-delay: calc(0.25s * 5);
        animation-delay: 1500ms;
    }
    .strand:nth-child(8) .circle, .strand:nth-child(8) .line { 
        //animation-delay: calc(0.25s * 6);
        animation-delay: 1750ms;
    }
    .strand:nth-child(9) .circle, .strand:nth-child(9) .line { 
        //animation-delay: calc(0.25s * 7);
        animation-delay: 2000ms;
    }
    .strand:nth-child(10) .circle, .strand:nth-child(10) .line { 
        //animation-delay: calc(0.25s * 8);
        animation-delay: 2250ms;
    }
    .strand:nth-child(11) .circle, .strand:nth-child(11) .line { 
        //animation-delay: calc(0.25s * 8);
        animation-delay: 2500ms;
    }
    .strand:nth-child(12) .circle, .strand:nth-child(12) .line { 
        //animation-delay: calc(0.25s * 8);
        animation-delay: 2750ms;
    }
    .strand:nth-child(13) .circle, .strand:nth-child(13) .line { 
        //animation-delay: calc(0.25s * 8);
        animation-delay: 3000ms;
    }
}
// .row1, .row2 {
//     .circle {
//         animation-duration: 5000ms;
//         animation-iteration-count: infinite;
//         animation-timing-function: linear;
//     }
//     .strand:nth-child(1) .circle { 
//         //animation-delay: calc(0.25s * 0);
//         animation-delay: 1ms;
//     }
//     .strand:nth-child(2) .circle { 
//         //animation-delay: calc(0.25s * 1);
//         animation-delay: 251ms;
//     }
//     .strand:nth-child(3) .circle { 
//         //animation-delay: calc(0.25s * 2);
//         animation-delay: 501ms;
//     }
//     .strand:nth-child(4) .circle { 
//         //animation-delay: calc(0.25s * 3);
//         animation-delay: 751ms;
//     }
//     .strand:nth-child(5) .circle { 
//         //animation-delay: calc(0.25s * 4);
//         animation-delay: 1001ms;
//     }
//     .strand:nth-child(6) .circle { 
//         //animation-delay: calc(0.25s * 4);
//         animation-delay: 1251ms;
//     }
//     .strand:nth-child(7) .circle { 
//         //animation-delay: calc(0.25s * 5);
//         animation-delay: 1501ms;
//     }
//     .strand:nth-child(8) .circle { 
//         //animation-delay: calc(0.25s * 6);
//         animation-delay: 1751ms;
//     }
//     .strand:nth-child(9) .circle { 
//         //animation-delay: calc(0.25s * 7);
//         animation-delay: 2001ms;
//     }
//     .strand:nth-child(10) .circle { 
//         //animation-delay: calc(0.25s * 8);
//         animation-delay: 2251ms;

//     }
// }
// .row1, .row2 {
//     .strand:nth-child(1) .line { 
//         animation-delay: calc(0.25s * 0);
//     }
//     .strand:nth-child(2) .line { 
//         animation-delay: calc(0.25s * 1);
//     }
//     .strand:nth-child(3) .line { 
//         animation-delay: calc(0.25s * 2);
//     }
//     .strand:nth-child(4) .line { 
//         animation-delay: calc(0.25s * 3);
//     }
//     .strand:nth-child(5) .line { 
//         animation-delay: calc(0.25s * 4);
//     }
//     .strand:nth-child(6) .line { 
//         animation-delay: calc(0.25s * 5);
//     }
//     .strand:nth-child(7) .line { 
//         animation-delay: calc(0.25s * 6);
//     }
//     .strand:nth-child(8) .line { 
//         animation-delay: calc(0.25s * 7);
//     }
//     .strand:nth-child(9) .line { 
//         animation-delay: calc(0.25s * 8);
//     }
//     .strand:nth-child(10) .line { 
//         animation-delay: calc(0.25s * 9);
//     }
// }
.row1 { 
    .circle { 
        top: 0%;
        animation-name: row1circletwist;
    }
}
.row2 {
    .circle {
        bottom: 0%;
        animation-name: row2circletwist;
    }
}

@keyframes row1circletwist {
    0% {
        background-color: $color1;
        scale: 1;
        top: 0%
    }
    25% {
        //background-color: $color2;
        //scale: 0.75;
        top: calc(100% - $circlediameter)
    }
    50% {
        //background-color: $color2;
        scale: 1;
        top: calc(200% - $circlediameter)
    }
    75% {
        background-color: $color2;
        //scale: 0.75;
        scale: 0.75; 
        top: calc(100% - $circlediameter)
    }
    100% {
        background-color: $color1;
        scale: 1;
        top: 0%
    }
}
@keyframes row2circletwist {
    0% {
        background-color: $color1;
        scale: 1;
        bottom: 0%
    }
    // 25% {
    //     //background-color: $color2;
    //     //scale: 0.75;
    //     bottom: calc(100% - $circlediameter);
    // }
    25% {
        background-color: $color2;
        //scale: 0.75;
        scale: 0.5;
        bottom: calc(100% - $circlediameter)
    }
    50% {
        //background-color: $color2;
        scale: 1;
        bottom: calc(200% - $circlediameter)
    }
    // 75% {
    //     background-color: $color2;
    //     //scale: 0.75;
    //     scale: 0.5;
    //     bottom: calc(100% - $circlediameter)
    // }
    25% {
        //background-color: $color2;
        //scale: 0.75;
        bottom: calc(100% - $circlediameter);
    }
    100% {
        background-color: $color1;
        scale: 1;
        bottom: 0%
    }
}

// Line
.line {
    width: $linewidth;
    height: 80%;
    margin: 1px 2px;
    background-color: $color1;
    animation-name: linescale;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes linescale {
    0% {
        background-color: $color1;
        height: 80%;
    }
    24% {
        animation-play-state: running;
    }
    25% {
        //background-color: $color2;
        height: 0%;
    }
    26% {
        animation-play-state: running;
    }
    50% {
        background-color: $color1;
        height: 80%; 
    }
    74% {
        animation-play-state: running;
    }
    75% {
        //background-color: $color2;
        height: 0%; 
    }
    76% {
        animation-play-state: running;
    }
    100% {
        background-color: $color1;
        height: 80%;
    }
}
</style>