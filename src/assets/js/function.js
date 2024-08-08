const dataAPI = "http://localhost/BDGamephp/BDGame_Store";

export function accountAPI(api){
    return `${dataAPI}/account/${api}.php`;
}

export function adminAPI( folder,api){
    return `${dataAPI}/${folder}/${api}.php`;
}

