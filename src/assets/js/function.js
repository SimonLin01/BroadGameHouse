const dataAPI = "http:/http://tablerolegame0730.42web.io/PHP/";

export function accountAPI(api){
    return `${dataAPI}/account/${api}.php`;
}

export function adminAPI( folder,api){
    return `${dataAPI}/${folder}/${api}.php`;
}

export function gameAPI(api){
    return `${dataAPI}/game/${api}.php`;
}

export const setting = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
};
