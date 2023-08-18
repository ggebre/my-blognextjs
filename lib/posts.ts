import { FaRegWindowClose } from "react-icons/fa"

type Filetree = {
    "tree" : [
        {
            "path": string,
        }
    ]
}

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    const res = await fetch(`https://api.github.com/repos/ggebre/test-blogposts/git/trees/main/${fileName}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': "2022-11-28"
        }
    })
    if(!res.ok) return undefined 

    const rawMDX = await res.text()

    if(rawMDX === '404: Not Found') return undefined 
    
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
    // get those files which ends with .mdx extension 
    const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    const posts: Meta[] = []

    for(const file of filesArray){
        const post = await getPostByName(file)
        if(post) {
            const { meta } = post 
            posts.push(meta)
        }
    }

    return posts.sort((a, b) => a.date < b.date ? 1 : -1)

}