
type Filetree = {
    "tree" : [
        {
            "path": string,
        }
    ]
}

export async function getPostsMeta(): Promise<Meta[] | undefined >{ 
    const res = await fetch('https://api.github.com/repos/ggebre/test-blogposts/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': "2022-11-28"
        }
    })
    if (!res.ok) return undefined

    const repoFiletree: Filetree = await res.json()

    const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    

}