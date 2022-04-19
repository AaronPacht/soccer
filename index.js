document.addEventListener('DOMContentLoaded', (e)=>{
    
    let ball = document.querySelector("#ball");
    let topamount = "100"
    let leftamount = "100"
    let spot1 = document.querySelector("#spot1");
    let spot2 = document.querySelector("#spot2");
    let spot3 = document.querySelector("#spot3");
    let spot4 = document.querySelector("#spot4");
    let spot6 = document.querySelector("#spot6");
    let spot7 = document.querySelector("#spot7"); 
    let spot8 = document.querySelector("#spot8");
    let spot9 = document.querySelector("#spot9");

    spot2.addEventListener('mouseover', ()=>{
        topamount = mathplus(topamount);
        if (parseInt(topamount)<=window.innerHeight-25) {
            ball.style.top= topamount+"px";
        } else {
            ball.style.top=window.innerHeight-50+"px";
        };
    });
    
    spot4.addEventListener('mouseover', ()=>{
        leftamount = mathplus(leftamount);
        if (parseInt(leftamount)<=window.innerWidth-25) {
            ball.style.left= leftamount+"px";
        } else {
            ball.style.left=window.innerWidth-50+"px";
        };
    });

    spot6.addEventListener('mouseover', ()=>{
        leftamount = mathminus(leftamount);
        if (parseInt(leftamount)>=0) {
            ball.style.left= leftamount+"px";
        } else {
            ball.style.left=25+"px";
        };
    });

    spot8.addEventListener('mouseover', ()=>{
        topamount = mathminus(topamount);
        if (parseInt(topamount)>=0) {
            ball.style.top= topamount+"px";
        } else {
            ball.style.top=25+"px";
        };
    });

    spot1.addEventListener('mouseover', ()=>{
        topamount = mathplus(topamount);
        leftamount = mathplus(leftamount);
        if (parseInt(topamount)<=window.innerHeight-25 && parseInt(leftamount)<=window.innerWidth-25) {
            ball.style.top= topamount+"px";
            ball.style.left= leftamount+"px";
        } else {
            if (parseInt(topamount)<=window.innerHeight-25) {
                ball.style.top= topamount+"px";
                ball.style.left=window.innerWidth-50+"px";
            }
            if (parseInt(leftamount)<=window.innerWidth-25) {
                ball.style.left= leftamount+"px";
                ball.style.top=window.innerHeight-50+"px";
            }
        };
    });

    spot3.addEventListener('mouseover', ()=>{
        topamount = mathplus(topamount);
        leftamount = mathminus(leftamount);
        if (parseInt(topamount)<=window.innerHeight-25 && parseInt(leftamount)>=0) {
            ball.style.top= topamount+"px";
            ball.style.left= leftamount+"px";
        } else {
            if (parseInt(topamount)<=window.innerHeight-25) {
                ball.style.top= topamount+"px";
                ball.style.left=25+"px";
            }
            if (parseInt(leftamount)>=0) {
                ball.style.left= leftamount+"px";
                ball.style.top=window.innerHeight-50+"px";
            }
        };
    });

    spot7.addEventListener('mouseover', ()=>{
        topamount = mathminus(topamount);
        leftamount = mathplus(leftamount);
        if (parseInt(topamount)>=0 && parseInt(leftamount)<=window.innerWidth-25) {
            ball.style.top= topamount+"px";
            ball.style.left= leftamount+"px";
        } else {
            if (parseInt(topamount)>=0) {
                ball.style.top= topamount+"px";
                ball.style.left=window.innerWidth-50+"px";
            }
            if (parseInt(leftamount)<=window.innerWidth-25) {
                ball.style.left= leftamount+"px";
                ball.style.top=25+"px";
            }
        };
    });

    spot9.addEventListener('mouseover', ()=>{
        topamount = mathminus(topamount);
        leftamount = mathminus(leftamount);
        if (parseInt(topamount)>=0 && parseInt(leftamount)>=0) {
            ball.style.top= topamount+"px";
            ball.style.left= leftamount+"px";
        } else {
            if (parseInt(topamount)>=0) {
                ball.style.top= topamount+"px";
                ball.style.left=25+"px";
            }
            if (parseInt(leftamount)>=0) {
                ball.style.left= leftamount+"px";
                ball.style.top=25+"px";
            }
        };
    });

    let mathplus=(e)=> String(parseInt(e)+15);
    let mathminus=(e)=> String(parseInt(e)-15);
});