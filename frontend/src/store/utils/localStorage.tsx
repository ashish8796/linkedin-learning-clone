export function loadData(key: string){
    try {
        let data: any = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    }
    catch (err) {
        return undefined;
    }
}

export function saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
}