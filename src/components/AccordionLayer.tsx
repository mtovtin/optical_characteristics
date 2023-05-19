import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Send from '@mui/icons-material/Send'

import { PropAccordionLayer } from "../Interfaces/PropsInteface"
import { Box, Button, TextField } from "@mui/material";

import '../pages/Transmittance/style.css'
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
 en:{
   layer:"Layer",
   density:"Density",
   ind:"Refractive index",
   apply:"APPLY"
},
 ua: {
  layer:"Шар",
  density:"Товщина",
  ind:"Показник заломлення", 
  apply:"ПРИЙНЯТИ"
  }
});


export function AccordionLayer(props: { language: string; n: number | (() => number); d: number | (() => number); handlerChangeParam: (arg0: any, arg1: number, arg2: number) => void; index: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  if(props.language==='en'){
    strings.setLanguage('en')
}	else {
    strings.setLanguage('ua')
}
  const [refractiveIndex, setRefractiveIndex] = React.useState<number>(props.n)
  const [thickness, setThickness] = React.useState<number>(props.d)

  const handlerClick = () => {
    props.handlerChangeParam(props.index, refractiveIndex, thickness);
  };


  return (
    <div>
      <Accordion>
        
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content" 
          id="panel1d-header"
        >
          <Typography>{strings.layer} {props.index}</Typography>
        </AccordionSummary>
        
        <AccordionDetails>
            <div className={"lable-and-textfield"}>
                <div className={"input-lable"}> {strings.ind} </div>
                <TextField 
                  type={"number"} 
                  value={refractiveIndex} 
                  onChange={(value) => setRefractiveIndex(value.target.value as unknown as number)} 
                  label="1.51 ... 2.1" focused />
            </div>


            <div className={"lable-and-textfield"}>
                <div className={"input-lable"}> {strings.density} </div>
                <TextField 
                  type={"number"} 
                  value={thickness} 
                  onChange={(value) => setThickness(value.target.value as unknown as number)} 
                  label="32 ... 100" focused />
            </div>

            <Button onClick={handlerClick} variant="contained" endIcon={<Send />}>
              {strings.apply}
            </Button>
        
        </AccordionDetails>

      </Accordion>

    </div>
  );
};
