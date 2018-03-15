window.onload = () =>{
    document.addEventListener('mousemove', (e) => {});
    let temp = document.querySelectorAll(".row");
    temp.forEach((v) => {
    v = v.getElementsByTagName('div');
    console.log(v);
    v[0].addEventListener('click', (e) => {console.log(e.target)});
    v[1].addEventListener('click', (e) => {console.log(e.target)});
    v[2].addEventListener('click', (e) => {console.log(e.target)});
    v[3].addEventListener('click', (e) => {console.log(e.target)});
    })



    console.log(document.querySelectorAll(".row")[1].getElementsByTagName("div"));
    document.querySelector(".row div").addEventListener('mousedown', () => {
        
    });
    document.querySelector("#c11").addEventListener('mouseup', () => {
        
    });
    console.log(document.querySelector("#c11"));
}