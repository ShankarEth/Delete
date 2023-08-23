
function show(items)
{
    let chuck = ""
    items.map((val)=>{
        chuck = chuck + 
                `<tr><td>${val.id}</td>
                <td>${val.title}</td>
                <td>${val.price}</td></tr>`
    })
    document.getElementById("demo").innerHTML = chuck;
}
const url = "https://dummyjson.com/products";
fetch(url)
.then((res)=>res.json())
.then((res)=>show(res.products))
.catch((err)=> alert(err));