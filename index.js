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
        ball.style.top= topamount+"px";
    });
    
    spot4.addEventListener('mouseover', ()=>{
        leftamount = mathplus(leftamount);
        ball.style.left= leftamount+"px";
    });

    spot6.addEventListener('mouseover', ()=>{
        leftamount = mathminus(leftamount);
        ball.style.left= leftamount+"px";
    });

    spot8.addEventListener('mouseover', ()=>{
        topamount = mathminus(topamount);
        ball.style.top= topamount+"px";
    });

    spot1.addEventListener('mouseover', ()=>{
        topamount = mathplus(topamount);
        leftamount = mathplus(leftamount);
        ball.style.top= topamount+"px";
        ball.style.left= leftamount+"px";
    });

    spot3.addEventListener('mouseover', ()=>{
        topamount = mathplus(topamount);
        leftamount = mathminus(leftamount);
        ball.style.top= topamount+"px";
        ball.style.left= leftamount+"px";
    });

    spot7.addEventListener('mouseover', ()=>{
        topamount = mathminus(topamount);
        leftamount = mathplus(leftamount);
        ball.style.top= topamount+"px";
        ball.style.left= leftamount+"px";
    });

    spot9.addEventListener('mouseover', ()=>{
        topamount = mathminus(topamount);
        leftamount = mathminus(leftamount);
        ball.style.top= topamount+"px";
        ball.style.left= leftamount+"px";
    });

    let mathplus=(e)=> String(parseInt(e)+15);
    let mathminus=(e)=> String(parseInt(e)-15);
});