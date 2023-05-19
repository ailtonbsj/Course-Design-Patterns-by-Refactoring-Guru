import { Observable, from } from "rxjs";
import { WebStorage } from "./web-storage";
import { Module } from "../module";
import { HttpClient } from "@angular/common/http";

export class RestAPI implements WebStorage {

    constructor(
        private moduleName: Module,
        private baseURL: string,
        private http: HttpClient) {
    }

    listAll<T>(): Observable<T[]> {
        return this.http.get<T[]>(`${this.baseURL}/${this.moduleName}`);
    }

    save<T>(entity: T): Observable<number> {
        return this.http.post<number>(`${this.baseURL}/${this.moduleName}`, entity);
    }
    
    remove(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseURL}/${this.moduleName}/${id}`);
    }
}
