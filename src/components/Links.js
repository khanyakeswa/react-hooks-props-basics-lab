// const Links = (links) => {return <div>{links}</div>}

const Links = ( {github, linkedin} ) => {
    console.log(github, linkedin)
    return (
    <div>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
    </div>
    )
}

export default Links
