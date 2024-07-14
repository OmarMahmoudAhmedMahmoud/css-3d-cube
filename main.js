// const nav = {
//     box : document.getElementById("pagesBtnsBox"),
//     goR : document.getElementById("GoRight"),
//     goL : document.getElementById("Goleft"),
//     runder : function(){

//         this.goR.addEventListener("mousedown",
//             function () {
//                 nav.box.scrollBy(20,0)
//             }
//         );




//         this.goL.addEventListener("mousedown",
//             function () {
//                 nav.box.scrollBy(-20,0)
//             }
//         )
//     }
// }


//  nav.box.scrollBy(20,0)
const nav = {
    box : document.getElementById("pagesBtnsBox"),
    goR : document.getElementById("GoRight"),
    goL : document.getElementById("Goleft"),
    holdR : undefined ,
    holdL : undefined ,
    runder : function(){

        this.goR.addEventListener("mousedown",
            function () {
                nav.holdR=setInterval(
                    function () {
                        nav.box.scrollBy(50,0)
                    },
                    0
                )
            }
        );

        this.goR.addEventListener("mouseup",
            function () {
                clearInterval(nav.holdR)
            },
            0
        );

        this.goL.addEventListener("mousedown",
            function () {
                nav.holdL=setInterval(
                    function () {
                        nav.box.scrollBy(-50,0)
                    },
                    0
                )
            }
        );

        this.goL.addEventListener("mouseup",
            function () {
                clearInterval(nav.holdL)
            },
            0
        );






    }
}





nav.runder()

