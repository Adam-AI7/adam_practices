import { Injectable } from "@angular/core";

type guideTemplate={
   html:string;
   targetId:string;

}

export class UserGuideService {
    guideTimer=0;
    templateInfo={
        id:'',
        show:false,
        touched:false,
    }

    constructor(){

    }
    guideBySeries(){

    }
    guideByOne(){
    
    }
    getTemplate(){
      return `<div id="giudelineBackdrop" style="display:none;opacity:0;height:100vh;width:100vw;position:fixed;top:0;left:0;"></div>
      <div id="guide-template-container" style="height:content-fit;max-height:" class = "container-template">
      
      
      </div>`
      
    }
    generateTemplateid() {
        // Generate a random number between 100000 and 999999 (inclusive)
        return `${Math.floor(Math.random() * 900000) + 100000}guideTemplate`;
      }
}