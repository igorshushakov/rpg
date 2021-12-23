const nasa=document.getElementById('nasa');
const url='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
function createNode(element){
    return document.createElement(element);
}
function append(parent,element){
    return parent.appendChild(element);
}
fetch(url)
.then((resp)=>resp.json())
.then(function (data){
    console.log(data);

        let title=createNode('h2');
        let photo=createNode('img')
        let discription=createNode('p');
        title.innerHTML=data.title
        photo.src=data.url;
        discription.innerHTML=data.explanation;
        append(nasa, photo);
        append(nasa, title);
        append(nasa, discription)
})