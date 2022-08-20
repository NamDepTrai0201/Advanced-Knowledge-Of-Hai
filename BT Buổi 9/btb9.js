async function loadJSON(url) {
    let response = await fetch(url);
    if(response.status==200){
        return response.json()
    }else{
        throw new Error(response.status)
    }
}
loadJSON("no-such-user.json")

class HttpError extends Error{
    constructor(response){
        super(`${response.status} for ${response.url}`);
        this.name = "HttpError";
        this.response = response;
    }
}
async function loadJSON(url){
    let response = await fetch(url);
    if(response.status==200){
        return response.json();
    }else{
        throw new Error(response.status);
    }
}
async function demoGithubUser(){
    let name = prompt('Enter a name?' , 'iliakan');
    let user = await loadJSON(`https://api.github.com/users/${name}`)
    alert(`full name : ${user.name}`);
    return user;
}
demoGithubUser().catch(error=>{
    if(error instanceof HttpError && error.response.status==404){
        alert('No such user , please try again');
    }else{
        throw error;
    }
})