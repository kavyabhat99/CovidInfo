const btn = document.getElementById("btn");

btn.addEventListener('click',()=>{

    //fetch
    fetch('https://corona.lmao.ninja/v2/all')
    .then((response) => {
        return (response.json());
    })

    .then((data) => {
        console.log(data);
        var results = document.getElementById('results');
        var template =`<h1 style="background-color:powderblue;">Covid Cases</h1> ${data.cases}  
        <h1 style="background-color:powderblue;">Deaths</h1> ${data.deaths}
        <h1 style="background-color:powderblue;">Recovered</h1> ${data.recovered}
        <h1 style="background-color:powderblue;">Critical</h1> ${data.critical}`
        results.innerHTML=template;

    })

    
})