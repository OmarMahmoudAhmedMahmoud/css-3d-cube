import {colors,pages,pageTags} from "./pagesANDcoloers.js";

const web = {
    navFunEvents : {},
    routing : {}
}

web.routing = {
    current : pages.cube,
    addClickEvent : function(){
        for (const key in pages) {
            let ele = pages[key];
            ele[0].addEventListener("click",() => {
                if (this.current[0] == ele[0]) return;
                this.setStyleForCurrent( ele )
                this.loadPage()
                this.start3D()
            });
        }
    },
    setStyleForCurrent : function(ele){
        this.current[0].style.backgroundColor="transparent";
        this.setCurrent(ele)
        this.current[0].style.backgroundColor = colors.scond;
        this.current[0].style.color = colors.white;
    },
    setCurrent : function(ele){
        if (ele == undefined) return ;
        this.current = ele ;
    },
    loadPage: function(){
        pageTags.mainBox.innerHTML= this.current[1];
        this.start3D()
    },
    start3D : function(){
        if (this.current[2] == null ) return;
        let check = false
        let box = document.getElementById(this.current[2]);
        let Xpos, Ypos;

        pageTags.mainBox.addEventListener("mousedown",() => check = true)
        pageTags.mainBox.addEventListener("mouseup",() => check = false)
        pageTags.mainBox.addEventListener("mouseleave",() => check = false)
        pageTags.mainBox.addEventListener("mousemove",function (e) {
            Xpos = e.clientX / 2;  
            Ypos = e.clientY / 2;
            web.routing.routaingEle(box , Xpos , Ypos , check)

        });
        // for toush screen
        pageTags.mainBox.addEventListener("touchstart",() => check = true)
        pageTags.mainBox.addEventListener("touchend",() => check = false)
        pageTags.mainBox.addEventListener("touchmove",function (e) {
            Xpos = e.touches[0].clientX / 2;  
            Ypos = e.touches[0].clientY / 2;
            web.routing.routaingEle(box , Xpos , Ypos , check)
        })
    },
    routaingEle : function(box ,Y , X , check){
        if (!check) return;
        box.style.transform=`rotateX(${X}deg) rotateY(${Y}deg)`;
    },
    render: function () {
        this.addClickEvent()
        this.setStyleForCurrent()
        this.loadPage()
    }

}//end object routing

web.navFunEvents = {
    holdR : undefined ,
    holdL : undefined ,
    addArrowBTnIMg:()=>{
        pageTags.goL.innerHTML = pageTags.arrowSvg;
        pageTags.goR.innerHTML = pageTags.arrowSvg
    },
    scrollX : function(dir){
        if (dir == "R") {
            this.holdR=setInterval(
                () => pageTags.box.scrollBy(5,0),0
            )
            return;
        }
        this.holdL=setInterval(
            () => pageTags.box.scrollBy(-5, 0), 0
        )
    },

    scrollEvntsTouch : function(){
        pageTags.goR.addEventListener("touchstart",
            () => this.scrollX("R"), 100
        )
        pageTags.goR.addEventListener("touchend",
            () => clearInterval(this.holdR), 100
        );

        pageTags.goL.addEventListener("touchstart",
            () => this.scrollX("L"), 100
        );
        pageTags.goL.addEventListener("touchend",
            () => clearInterval(this.holdL), 100
        );
    },

    scrollEvntsMouse : function(){
        pageTags.goR.addEventListener("mousedown",
            () => this.scrollX("R"), 100
        )
        pageTags.goR.addEventListener("mouseup",
            () => clearInterval(this.holdR), 100
        );

        pageTags.goL.addEventListener("mousedown",
            () => this.scrollX("L"), 100
        );
        pageTags.goL.addEventListener("mouseup",
            () => clearInterval(this.holdL), 100
        );
    },
    hoverOnPages : function (){

        for (const key in pages) {
            let ele = pages[key][0];

            ele.addEventListener("mouseenter",() => {
                if (web.routing.current[0] == ele) return;
                ele.style.backgroundColor="white";
                ele.style.color="black";
            });

            ele.addEventListener("mouseleave",() => {
                if (web.routing.current[0] == ele) return;
                ele.style.backgroundColor="transparent";
                ele.style.color="white";
            });
        }
    },
    render : function(){
        this.addArrowBTnIMg()
        this.scrollEvntsMouse()
        this.scrollEvntsTouch()
        this.hoverOnPages()
    }
}


web.render = function(){
    web.navFunEvents.render();
    web.routing.render();
};

document.body.onload=()=>{
    web.render()
    document.body.style.display="block";
}

