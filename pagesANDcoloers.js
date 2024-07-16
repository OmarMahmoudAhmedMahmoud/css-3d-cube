export const colors= {
    main:"rgb(241, 206, 29)",
    scond:"rgb(0, 29, 61)",
    white:"rgb(231, 231, 212)",
    black :"rgb(4, 22, 39)",
};

export const pageTags ={
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
};

export const pages={

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
        `,
        `cube-box`
    ],

    Pyramid  : [
        document.getElementById("3d-tri"),
        `Coming Soon`
    ],

    ball : [
        document.getElementById("3d-ball"),
        `Coming Soon`
    ]
};