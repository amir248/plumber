const stateOfSite={};
stateOfSite.click=+0;
document.querySelector('main > header > nav > div').addEventListener('click',()=>{
    stateOfSite.click++;
    // console.log('^_^');
    if(stateOfSite.click==0||stateOfSite.click==1){
        let firstMenu=document.createElement('div');
        firstMenu.classList.add('firstMenu');
        setTimeout(()=>{
            firstMenu.style.cssText=`
            height:100vh;
            // top:100vh;
            bottom:0;
            font-size:30px;
            transition:all 1s ease-out;
        `;
        },1);
        firstMenu.innerHTML=`
            <a href="#">one</a>
            <a href="#">two</a>
            <a href="#">three</a>
        `;

        document.querySelector('main').prepend(firstMenu);
    }
    document.querySelector('.firstMenu').addEventListener('click',()=>{
        // console.log('click!!!!');
        closeThisMenu();
        stateOfSite.click=0;
    });
    if(stateOfSite.click==2){
        // console.log('not undefined');
        // firstMenu.style.cssText=`
        //     height:0;
        // `;
        
        closeThisMenu();

        stateOfSite.click=0;
    }
    function closeThisMenu(){
        document.querySelector('.firstMenu').style.cssText=`
            height:0;
            top:100vh;
            bottom:0;
            font-size:3px;
            transition:all 1s ease-out;
        `;
        setTimeout(()=>{
            document.querySelector('.firstMenu').remove();
        },700);
        // document.querySelector('.firstMenu').addEventListener('click',closeThisMenu()); // o_O <-- this need thikn that fix script
    }
});
// .firstMenu

