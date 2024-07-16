
const web = {}

web.nav={};
web.color= {
    main:"rgb(241, 206, 29)",
    scond:"rgb(0, 29, 61)",
    white:"rgb(231, 231, 212)",
    black :"rgb(4, 22, 39)",
}
web.tags ={
    mainBox : document.getElementById("_3dBox"),
    box : document.getElementById("pagesBtnsBox"),
    goR : document.getElementById("GoRight"),
    goL : document.getElementById("Goleft"),
    arrowSvg :  
    `     
        <svg width="509" height="878" viewBox="0 0 509 878" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.481714 439.378C-1.40376 450.507 2.25816 462.332 11.2482 470.467L451.884 869.164C465.882 881.83 487.498 880.75 500.164 866.752C512.83 852.753 511.75 831.138 497.752 818.472L78.782 439.378L497.752 60.2842C511.75 47.6181 512.83 26.0023 500.164 12.0039C487.498 -1.99445 465.882 -3.07446 451.884 9.59161L11.2482 408.289C2.25816 416.424 -1.40376 428.249 0.481714 439.378Z" fill="black"/>
        </svg>
    `,
}

web.routing={
    mainBox : document.getElementById("_3dBox"),
    currnt : [document.getElementById("3d-tri"),
        'Comin Soon'
    ] ,

    loadPage: function(){
        this.mainBox.innerHTML= this.currnt[1];
    },

    anime3D : function(){
        if (this.currnt[2] == null ) return;
        let check = false
        let box = this.currnt[2];
        let X, Y;

        this.mainBox.addEventListener("mousedown",function () {
            check = true;
        })
        this.mainBox.addEventListener("mouseup",function () {
            check = false
        })
        this.mainBox.addEventListener("mouseleave",function () {
            check = false;
        })
        this.mainBox.addEventListener("mousemove",function (e) {
            if (!check) return
            X = e.clientX;  
            Y = e.clientY;
            box.style.transform=`rotateX(${(Y/2)}deg) rotateY(${(X/2)}deg)`;
        });

        // for toush screen
        this.mainBox.addEventListener("touchstart",function () {
            check = true;

        })
        this.mainBox.addEventListener("touchend",function () {
            check = false

        })
        this.mainBox.addEventListener("touchmove",function (e) {
            if (!check) return
            X = e.touches[0].clientX;  
            Y = e.touches[0].clientY;
        
                

            box.style.transform=`rotateX(${(Y/2)}deg) rotateY(${(X/2)}deg)`;
        })
    },

    render: function () {
        let currunt = this.currnt[0];
        this.currnt[0].style.backgroundColor=web.color.scond;
        this.currnt[0].style.color=web.color.white;
        this.loadPage()
        for (const key in this.pages) {
            let ele = this.pages[key][0];

            ele.addEventListener("click",() => {
                if (this.currnt != ele) {
                    this.currnt[0].style.backgroundColor="transparent";
                    this.currnt = this.pages[key];
                    this.currnt[0].style.color=web.color.white;
                    this.currnt[0].style.backgroundColor=web.color.black;
                    this.loadPage()
                    this.currnt[2]=document.getElementById("cube-box");
                    this.anime3D()
                }
            });

            ele.addEventListener("mouseenter",() => {
                if (this.currnt[0] == ele) {
                    return
                }
                ele.style.backgroundColor="white";
                ele.style.color="black";
            });

            this.pages[key][0].addEventListener("mouseleave",() => {
                if (this.currnt[0] == ele) {
                    return
                }
                ele.style.backgroundColor="transparent";
                ele.style.color="white";
            })
        }
    }
}

web.routing.pages={
    cube :[
        document.getElementById("3d-cube"),
        `    
            <div id="cube-main">
                <div id="cube-box">
                    <div class="top"></div>
                    <div class="bottom"></div>
                    <div class="right"></div>
                    <div class="left"></div>
                    <div class="front"></div>
                    <div class="back"></div>
                </div>
            </div>
        `
    ],
    Pyramid  : [
        document.getElementById("3d-tri"),
        `Coming Soon`
    ],
    ball : [
        document.getElementById("3d-ball"),
        `Coming Soon`
    ]
}

































web.nav.funEvents = {
    holdR : undefined ,
    holdL : undefined ,
    addArrowBTnIMg:()=>{
        web.tags.goL.innerHTML = web.tags.arrowSvg;
        web.tags.goR.innerHTML = web.tags.arrowSvg
    },
    scrollX : function(dir){
        if (dir == "R") {
            this.holdR=setInterval(
                () => web.tags.box.scrollBy(5,0),0
            )
            return;
        }
        this.holdL=setInterval(
            () => web.tags.box.scrollBy(-5, 0), 0
        )
    },

    scrollEvntsTouch : function(){
        web.tags.goR.addEventListener("touchstart",
            () => this.scrollX("R"), 100
        )
        web.tags.goR.addEventListener("touchend",
            () => clearInterval(this.holdR),100
        );
        web.tags.goL.addEventListener("touchstart",
            () => this.scrollX("L"), 100
        );
        web.tags.goL.addEventListener("touchend",
            () => clearInterval(this.holdL), 100
        );
    },

    scrollEvntsMouse : function(){
        web.tags.goR.addEventListener("mousedown",
            () => this.scrollX("R"), 100
        )
        web.tags.goR.addEventListener("mouseup",
            () => clearInterval(this.holdR),100
        );
        web.tags.goL.addEventListener("mousedown",
            () => this.scrollX("L"), 100
        );
        web.tags.goL.addEventListener("mouseup",
            () => clearInterval(this.holdL), 100
        );
    },

    render : function(){
        this.addArrowBTnIMg()
        this.scrollEvntsMouse()
        this.scrollEvntsTouch()
    }
}






























web.render = function(){
    web.nav.funEvents.render();
    web.routing.render();
};
function runder() {
    web.render()
}
document.body.onload=()=>{
    runder()
    document.body.style.display="block";
}

