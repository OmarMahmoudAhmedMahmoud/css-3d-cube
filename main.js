const nav = {
    box : document.getElementById("pagesBtnsBox"),
    goR : document.getElementById("GoRight"),
    goL : document.getElementById("Goleft"),
    runder : function(){

        this.goR.addEventListener("mousedown",
            function () {
                nav.box.scrollBy(20,0)
            }
        );




        this.goL.addEventListener("mousedown",
            function () {
                nav.box.scrollBy(-20,0)
            }
        )
    }
}



nav.runder()

