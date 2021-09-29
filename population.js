const getBlogs=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v3/all");
    xhr.responseType="json";
    xhr.onload = () => {
        console.log(xhr.response);
        const blogs = xhr.response;
        let getPopulation = blogs.filter(blogs => blogs.population < 200000);
        console.log(getPopulation);
        let populations = blogs.population;
        var number = sum => sum.reduce((x,y) => x+y,0);
        console.log(number(populations));
    };
    xhr.send();
    };
    getBlogs();
    