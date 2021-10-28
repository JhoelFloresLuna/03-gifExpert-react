export const GifGidItem = ({id, title, url}) => {

    //console.table(id, title);
    return (
        <div className="card animate__animated animate__fadeInDown ">
        <img src={url} alt={title}/>
        <p>{title}</p>
        </div >
    )
}
