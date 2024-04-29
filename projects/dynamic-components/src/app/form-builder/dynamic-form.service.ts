import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
type formsData={
 [name:string]:FormGroup
}
@Injectable()
export class DynamicFormService{
    formData:formsData={};
    
}