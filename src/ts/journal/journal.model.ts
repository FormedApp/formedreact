import { Group } from "../group/group.model";

export interface Journal {
    id: string;
    entry: string;
    user_id: string;
    groups: Group[];
    created_at: Date;
    updated_at: Date;
}
