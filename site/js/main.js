function newsDate(){
    return new Promise((resolve)=>{
        function okDate(){
                // console.log('oK Date here');
            const d = new Date();
            document.querySelector('#date').innerHTML=  `${d.getFullYear()}`;
            // console.log('vLog!!!!!');
        }
        setTimeout(()=>{
            resolve(okDate());
        },0);
    });
};//newDate();

function menu(){
    return new Promise((resolve)=>{
        function openMenu(){
            const openMenu=document.createElement('script');
            openMenu.src="site/js/menu.js";
            document.querySelector('body').append(openMenu);
        }
        resolve(openMenu());
});
}
window.addEventListener('DOMContentLoaded',mainOnloadFunction);
async function mainOnloadFunction(){
    await newsDate();

    await menu();

}