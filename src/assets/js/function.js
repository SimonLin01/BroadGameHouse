const dataAPI = "http://tablerolegame0730.42web.io/BDG/php";

export function accountAPI(api){
    return `${dataAPI}/account/${api}.php`;
}

export function adminAPI( folder,api){
    return `${dataAPI}/${folder}/${api}.php`;
}

