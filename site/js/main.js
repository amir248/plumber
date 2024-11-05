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

window.addEventListener('DOMContentLoaded',mainOnloadFunction);
async function mainOnloadFunction(){
    await newsDate();

}