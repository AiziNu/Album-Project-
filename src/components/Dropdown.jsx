export const Dropdown = ({data, handleSelect})=>{
  return (
    <select
    name=""
    id=""
    onChange= {handleSelect}
  >
    <option value="" selected disabled>
      Select Album
    </option>

    {data.map((album) => (
      <option value={album.albumName}>{album.albumName}</option>
    ))}
    {/* <option value="Family Photos">Family Photos</option>
    <option value="Family Reunion">Family Reunion</option>
    <option value="Work">Work</option> */}
  </select>
  )
}