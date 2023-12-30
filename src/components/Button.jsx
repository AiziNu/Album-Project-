export const Button = ({handleClick,id, btnName})=>{
  return  <button className="button" onClick={()=>(id ? handleClick(id) : handleClick())}>{btnName}</button>;
  
}