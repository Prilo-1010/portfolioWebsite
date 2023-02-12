import {  useEffect, useState } from "react";


const ButtonFilter = ({ button, filter }: any) => {
  // type MyType = { id: number }
  const [appState, changeState] = useState<any>({
    activeObject: null,
    objects: button
  });

  function toggleActive(index:any) {
    changeState({...appState, activeObject: appState.objects[index]})
  }

  function toggleActiveStyles(index: any){
     if(appState.objects[index] === appState.activeObject){
      return "filterLinks active"
     }else{
      return "filterLinks inactive"
     }
     }

     useEffect(()=>{
      changeState({...appState, activeObject: appState.objects[0]})
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[ ])
  
  return (
    <>
      {appState.objects.map((elements: any, index: any) => (
        <div key={index}  className="workLinks">
          <span
            className={toggleActiveStyles(index)}
            onClick={() => {
              toggleActive(index) ,filter(elements);
            }}
           
          >
            {elements}
          </span>
        </div>
      ))}
    </>
  );
};

export default ButtonFilter;
