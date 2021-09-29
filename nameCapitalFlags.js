const getBlogs=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v3/all");
    xhr.responseType="json";
    xhr.onload = () => {
        console.log(xhr.response);
        const blogs = xhr.response;
        blogs.forEach(function(countries){
            console.log(countries.name);
            console.log(countries.capital);
            console.log(countries.flags);
        });
    };
    xhr.send();
    };
    getBlogs();
    