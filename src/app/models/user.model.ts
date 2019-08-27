import { RawUser } from './raw-user.model';

export class User {
    id: number;
    name: string;
    email: string;
    avatarUrl: string;

    constructor(raw?: RawUser) {
        this.id = raw.id;
        this.name = raw.name;
        this.email = raw.email;
        this.avatarUrl = raw.avatar_url;
    }
}
