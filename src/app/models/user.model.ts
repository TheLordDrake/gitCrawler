import { RawUser } from './raw-user.model';

export class User {
    id: number;
    login: string;
    name: string;
    email: string;
    location: string;
    avatarUrl: string;
    gravatarId: string;
    bio: string;
    company: string;
    hireable: boolean;

    url: string;
    htmlUrl: string;
    reposUrl: string;
    publicRepos: number;
    publicGists: number;
    gistsUrl: string;
    followers: number;
    following: number;
    createdAt: string;
    updatedAt: string;
    followersUrl: string;
    followingUrl: string;
    starredUrl: string;
    subscriptionsUrl: string;
    organizationsUrl: string;
    eventsUrl: string;
    receivedEventsUrl: string;
    blog: string;


    constructor(raw?: RawUser) {
        this.id = raw.id;
        this.login = raw.login;
        this.name = raw.name;
        this.email = raw.email;
        this.location = raw.location;
        this.avatarUrl = raw.avatar_url;
        this.bio = raw.bio;
        this.company = raw.company;
        this.hireable = raw.hireable;
    }
}
