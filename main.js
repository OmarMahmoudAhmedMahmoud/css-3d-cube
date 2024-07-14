const nav = {

    routing:{
        mainBox : document.getElementById("_3dBox"),
        currnt : [document.getElementById("3d-tri"),
            'tri'
        ] ,
        pages : {
            cube :[document.getElementById("3d-cube"),
                'cube'
            ],
            tri : [document.getElementById("3d-tri"),
                'tri'
            ]
        },
        loadPage: function(){
            this.mainBox.innerHTML= this.currnt[1];
   
        },
        render: function () {
            this.currnt[0].style.backgroundColor="green";
            this.loadPage()
            for (const key in this.pages) {


                this.pages[key][0].addEventListener("click",() => {
                    if (this.currnt != this.pages[key][0]) {
                        this.currnt[0].style.backgroundColor="transparent";
                        this.currnt=this.pages[key];
                        this.currnt[0].style.backgroundColor="green";
                        this.loadPage()
                    }
                });

                this.pages[key][0].addEventListener("mouseenter",() => {
                    if (this.currnt[0] == this.pages[key][0]) {
                        return
                    }
                    this.pages[key][0].style.backgroundColor="white";
                    this.pages[key][0].style.color="black";
                });

                this.pages[key][0].addEventListener("mouseleave",() => {
                    if (this.currnt[0] == this.pages[key][0]) {
                        return
                    }
                    this.pages[key][0].style.backgroundColor="transparent";
                    this.pages[key][0].style.color="white";
                })
            }
        }
    }
}


nav.style = {
    box : document.getElementById("pagesBtnsBox"),
    goR : document.getElementById("GoRight"),
    goL : document.getElementById("Goleft"),
    holdR : undefined ,
    holdL : undefined ,
    render : function(){
        this.goR.addEventListener("mousedown",
            ()=> {
                this.holdR=setInterval(
                    ()=>{
                        nav.style.box.scrollBy(50,0)
                    },
                    0
                )
            }
        );
        this.goR.addEventListener("mouseup",
            ()=>{
                clearInterval(this.holdR)
            },
            0
        );
        this.goL.addEventListener("mousedown",
            () =>{
                this.holdL=setInterval(
                    ()=> {
                        nav.style.box.scrollBy(-50,0)
                    },
                    0
                )
            }
        );
        this.goL.addEventListener("mouseup",
            ()=>{
                clearInterval(this.holdL)
            },
            0
        );
    }
}

function runder() {
    nav.style.render();
    nav.routing.render();
}



document.body.onload=()=>{
    runder()
}
