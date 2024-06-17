
class StorageService {
    private storage: Storage;
    constructor(storage:Storage) {
        this.storage = storage;
    }

    getItem(key:string){
        try{
            return this.storage.getItem(key)
        } catch (e){

        }
    }

    setItem<T>(key:string, value:T){
        try{
            this.storage.setItem(key, JSON.stringify(value))
        } catch (e){

        }
    }

    removeItem(key:string){
        this.storage.removeItem(key)
    }
}

const LocalStorageService = new StorageService(localStorage)

export {LocalStorageService}