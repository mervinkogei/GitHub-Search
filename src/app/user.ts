export class User {
    constructor(
        
        public avatar_url:any,
        public username: string,
        public company: string,
        public location: string,
        public followers: number,
        public following: number,
        public created_at: Date,
        public public_repos: number,
        public html_url: any,
    ){}
}
