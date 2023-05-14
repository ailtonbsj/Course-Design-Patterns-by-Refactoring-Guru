import { Observable } from "rxjs";
import { Module } from "../module";
import { StorageService } from "./storage.service";
import { HttpClient } from "@angular/common/http";

export class OnlineStorageService extends StorageService {
    moduleName: Module;
    baseURL = 'http://localhost:8080';

    constructor(moduleName: Module, private http: HttpClient) {
        super();
        this.moduleName = moduleName;
    }

    override listAll<T>(): Observable<T[]> {
        return this.http.get<T[]>(`${this.baseURL}/${this.moduleName}`);
    }

    override save<T>(entity: T): Observable<number> {
        return this.http.post<number>(`${this.baseURL}/${this.moduleName}`, entity);
    }

    override remove(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseURL}/${this.moduleName}/${id}`);
    }
}
