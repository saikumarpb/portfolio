import Link from 'next/link';

interface GithubUserResponse {
    login: string;
    name: string;
    location: string;
    public_repos: string;
    followers: string;
    following: string;
}

export default async function Github() {
    const { name, location, login, public_repos, followers, following } =
        await getGithubUser();
    return (
        <div className='relative flex-1'>
            <div className="flex flex-col gap-4 justify-center">
                <div>Name : {name}</div>
                <div>Login id : {login}</div>
                <div>Location : {location}</div>
                <div>Public repos : {public_repos}</div>
                <div>Followers : {followers}</div>
                <div>Following : {following}</div>
            </div>
            <div className='absolute right-0 top-0'>
                <Link href="/">Home</Link>
            </div>
        </div>
    );
}

async function getGithubUser() {
    const res = await fetch('https://api.github.com/users/saikumarpb');
    const user = res.json() as unknown as GithubUserResponse;
    return user;
}
