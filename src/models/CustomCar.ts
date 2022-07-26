import { Body } from "./Body";
import { Drivetrain } from "./Drivetrain";
import { Engine } from "./Engine";
import { Exterior } from "./Exterior";
import { Grade } from "./Grade";
import { Wheels } from "./Wheels";
import { Interior } from "./Interior";
import { Transmission } from "./Transmission";

export interface CustomCar {
    id? : number;

    model: string;

    body: string;

    grade: string;

    driveTrain: string;

    transmission: string;

    engine: string;

    exterior: string;

    interior: string;

    wheels?: string;

    extras?: string[];

    additionalCost: number;

}