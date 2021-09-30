const getBlogs=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open("GET" , "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload = () => {
        const blogs = xhr.response;
        let getPopulation = blogs.filter(blogs => blogs.population < 200000);
        console.log(getPopulation);
        let totalPopulation = blogs.reduce((acc, cur) => acc + cur.population, 0);
        
        console.log("Total Population: ", totalPopulation);
        
    };
    xhr.send();
    };
    getBlogs();
    