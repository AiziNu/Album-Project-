import { Button } from "./Button"

export const Header = ({numOfAlbums, numOfPic, renderAlbums, isShowAlbums})=>{
  return <div className="header">
    <p>Wellcome to my profile. I have {numOfAlbums} albums and {numOfPic} photos</p>
    <Button btnName={isShowAlbums ? "Hide Albums" : "Unhide Albums"} handleClick={renderAlbums}/>
  </div>
}