
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class DeferredItemsList  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"items14"	,
					"items3"	,
					"items1"	,
					"items6"	,
					"items8"	,
					"sesion"	,
					"items11"	,
					"items7"	,
					"items5"	,
					"items4"	,
					"items10"	,
					"items12"	,
					"items13"	,
					"items2"	,
					"dividend"	,
					"items15"	,
					"items9"	
			];			
			super(undefined,props);
		}   	    
	}
	public set items14 (value: number | null) {
    	this.setPropertyValue(value, "items14");    	
  	}
  	
  	public get items14(): number | null {
    	return this.getPropertyValue("items14");    	
  	}
	public set items3 (value: number | null) {
    	this.setPropertyValue(value, "items3");    	
  	}
  	
  	public get items3(): number | null {
    	return this.getPropertyValue("items3");    	
  	}
	public set items1 (value: number | null) {
    	this.setPropertyValue(value, "items1");    	
  	}
  	
  	public get items1(): number | null {
    	return this.getPropertyValue("items1");    	
  	}
	public set items6 (value: number | null) {
    	this.setPropertyValue(value, "items6");    	
  	}
  	
  	public get items6(): number | null {
    	return this.getPropertyValue("items6");    	
  	}
	public set items8 (value: number | null) {
    	this.setPropertyValue(value, "items8");    	
  	}
  	
  	public get items8(): number | null {
    	return this.getPropertyValue("items8");    	
  	}
	public set sesion (value: number | null) {
    	this.setPropertyValue(value, "sesion");    	
  	}
  	
  	public get sesion(): number | null {
    	return this.getPropertyValue("sesion");    	
  	}
	public set items11 (value: number | null) {
    	this.setPropertyValue(value, "items11");    	
  	}
  	
  	public get items11(): number | null {
    	return this.getPropertyValue("items11");    	
  	}
	public set items7 (value: number | null) {
    	this.setPropertyValue(value, "items7");    	
  	}
  	
  	public get items7(): number | null {
    	return this.getPropertyValue("items7");    	
  	}
	public set items5 (value: number | null) {
    	this.setPropertyValue(value, "items5");    	
  	}
  	
  	public get items5(): number | null {
    	return this.getPropertyValue("items5");    	
  	}
	public set items4 (value: number | null) {
    	this.setPropertyValue(value, "items4");    	
  	}
  	
  	public get items4(): number | null {
    	return this.getPropertyValue("items4");    	
  	}
	public set items10 (value: number | null) {
    	this.setPropertyValue(value, "items10");    	
  	}
  	
  	public get items10(): number | null {
    	return this.getPropertyValue("items10");    	
  	}
	public set items12 (value: number | null) {
    	this.setPropertyValue(value, "items12");    	
  	}
  	
  	public get items12(): number | null {
    	return this.getPropertyValue("items12");    	
  	}
	public set items13 (value: number | null) {
    	this.setPropertyValue(value, "items13");    	
  	}
  	
  	public get items13(): number | null {
    	return this.getPropertyValue("items13");    	
  	}
	public set items2 (value: number | null) {
    	this.setPropertyValue(value, "items2");    	
  	}
  	
  	public get items2(): number | null {
    	return this.getPropertyValue("items2");    	
  	}
	public set dividend (value: number | null) {
    	this.setPropertyValue(value, "dividend");    	
  	}
  	
  	public get dividend(): number | null {
    	return this.getPropertyValue("dividend");    	
  	}
	public set items15 (value: number | null) {
    	this.setPropertyValue(value, "items15");    	
  	}
  	
  	public get items15(): number | null {
    	return this.getPropertyValue("items15");    	
  	}
	public set items9 (value: number | null) {
    	this.setPropertyValue(value, "items9");    	
  	}
  	
  	public get items9(): number | null {
    	return this.getPropertyValue("items9");    	
  	}
	
}