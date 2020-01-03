import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
import { TYPES } from "./types";

@injectable()
export class Katana implements Weapon {
    hit(): string {
        return 'cut!';
    }
}

@injectable()
export class Shuriken implements ThrowableWeapon {
    throw(): string {
        return 'hit!';
    }
}

@injectable()
export class Ninja implements Warrior {

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    constructor(
        @inject(TYPES.Weapon) katana: Weapon,
        @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    fight(): string {
        return this._katana.hit();
    }

    sneak(): string {
        return this._shuriken.throw();
    }
}
