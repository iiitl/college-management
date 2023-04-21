import inputStyle from './GeneralInputStyle.module.css'


// specify the width as a prop, like
/*
  <GeneralInput width={30}/> the width is in 'rem' unit
*/

// placeholder, type props work the same as in a normal input
// onChangeHandler prop corresponds the the onChange function of <input>

export default function GeneralInput({ width=20, placeholder, type, onChangeHandler, name }) {
  
  const inputStyles = {
    width: `${width}rem`, 
  };

  return (
    <>
    <input
    name={name}
    className={inputStyle.generalInput}
    type={type}
    placeholder={placeholder}
    onChange={onChangeHandler}
    style={inputStyle}
    />
    </>
  );
}