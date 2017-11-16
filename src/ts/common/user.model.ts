import { Group } from "../group/group.model";
import { Role } from "./role.model";

export interface User {
    id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    groups: Group[];
    roles: Role[];
    password: string;
    created_at: Date;
    updated_at: Date;
}
