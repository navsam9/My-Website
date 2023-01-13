export async function getGithubRepos(): Promise<JSON | false> {
    try {
        const url: string = `https://api.github.com/users/navsam9/repos`
        const response = await fetch(url);
        const result = response.json();
        return result;
    } catch (e)
    {
        if (typeof e === "string") {
            console.log(e.toUpperCase())
        } else if (e instanceof Error) {
            console.log(e.message)
        }
        return false;
    }
}

export async function getRepoLanguages(url: RequestInfo | URL): Promise<JSON | false> {
    try {
        const response = await fetch(url);
        const result = response.json();
        return result;
    } catch (e)
    {
        if (typeof e === "string") {
            console.log(e.toUpperCase())
        } else if (e instanceof Error) {
            console.log(e.message)
        }
        return false;
    }
}