import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[equalsField][ngModel]',
  providers:[
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualFieldDirective )}
  ]
})
export class EqualFieldDirective implements Validator {

    
  registerOnValidatorChange(fn: () => void): void {
    throw new Error('Method not implemented.');
  }


  constructor(@Attribute('equalsField') public equalsField:string) { }

  validate(c: AbstractControl): { [key: string]: any; } {
      let value = c.value;
      let el = c.root.get(this.equalsField);

      if(value && el !== value.value) return {
        equalsField: false
      }
      return null;
    }
}
