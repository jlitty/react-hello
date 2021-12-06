import React,{useState} from 'react';
import { render } from 'react-dom';
import Comp from './Comp';
import Comp2 from './Comp2';
const themes = {
  dark: {
    backgroundColor: '#3c3c3c',
    color: '#dedede',
    padding: '1em',
    fontFamily: 'Segoe UI Light',
  },
  light: {
    backgroundColor: '#cbcbcf',
    color: '#26222d',
    padding: '1em',
    fontFamily: 'Brush Script MT',
  },
};
export const ThemeContext = React.createContext();
const App=()=>{
const [change,setChange]=useState(false);
const objStyles=Object.assign({borderRadius:'30px',border:'none'},themes.dark);
return <div>
  <button style={objStyles} onClick={()=>setChange(!change)}>Toggle</button>
<ThemeContext.Provider value={change?themes.light:themes.dark}>
  <Comp />
</ThemeContext.Provider>
<ThemeContext.Provider value={!change?themes.light:themes.dark}>
  <Comp2 />
</ThemeContext.Provider>
</div>
}
render(
  <App/>,
  document.getElementById('root')
);
