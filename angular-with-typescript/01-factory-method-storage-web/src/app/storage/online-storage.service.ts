import { Observable } from "rxjs";
import { Module } from "../module";
import { StorageService } from "./storage.service";
import { HttpClient } from "@angular/common/http";
import { WebStorage } from "./web-storage";
import { RestAPI } from "./rest-api";

export class OnlineStorageService extends StorageService {
    baseURL = 'http://localhost:8080';

    constructor(private moduleName: Module, private http: HttpClient) {
        super();
    }

    override createStorage(): WebStorage {
        return new RestAPI(this.moduleName, this.baseURL, this.http);
    }
}
