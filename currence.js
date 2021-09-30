const getBlogs=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open("GET" , "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload = () => {
        const blogs = xhr.response;
        for(let currence of blogs){
            let result=(currence.currencies[0].symbol);
            if(result==='$'){
                let countryname=currence.name;
                let dollar = result + "," + countryname;
                console.log(dollar);
            }
            
        }
    };
    xhr.send();
    };
    getBlogs();
    