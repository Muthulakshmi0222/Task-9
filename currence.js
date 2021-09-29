const getBlogs=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open("GET" , "https://restcountries.com/v3/all");
    xhr.responseType="json";
    xhr.onload = () => {
        console.log(xhr.response);
        const blogs = xhr.response;
        for(let currence of blogs){
            let result=currence.currencies;
            console.log(result.USD);            
        }
    };
    xhr.send();
    };
    getBlogs();
    