import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Bird } from "./bird.model";
import { BirdsService } from "./birds.service";

@Injectable({providedIn: 'root'})
export class BirdsResolverService implements Resolve<Bird[]> {
    constructor(private birdsService: BirdsService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const birds = this.birdsService.getBirds();
        return birds;
    }
}