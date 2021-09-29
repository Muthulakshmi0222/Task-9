const getBlogs=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v3/all");
    xhr.responseType="json";
    xhr.onload = () => {
        console.log(xhr.response);
        const blogs = xhr.response;
        let getRegion = blogs.filter(blogs => blogs.region==="Asia");
        console.log(getRegion);
    };
    xhr.send();
    };
    getBlogs();
    