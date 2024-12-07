import { Injectable } from "@angular/core";
import { IUser } from "../interfaces/user/user.interface";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class UpdateUserService{
    updateUser(newUser: IUser): Observable<IUser>{
        return new Observable<{ status: number; body: IUser }>((observer) => {
            setTimeout(() => {
                observer.next({ status: 200, body: structuredClone(newUser), })
                observer.complete()
            }, 500)
        }).pipe(
            map((updateUserResponse) => updateUserResponse.body )
        )
    }
}