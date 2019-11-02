export class User {
    constructor(
        public username: string,
        public avatar_url:any,
        public company: string,
        public location: string,
        public followers: any,
        public following: any,
        public created_at: Date,
        public public_repos: number,
        public html_url: any,
    ){}
}
