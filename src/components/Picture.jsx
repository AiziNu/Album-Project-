export const Picture = ({title, thumbnailUrl })=>{
  return <div className="picture">
    <h4>{title}</h4>
    <img src={thumbnailUrl} alt="" />
  </div>
}