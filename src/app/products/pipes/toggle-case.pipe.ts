import { Pipe, PipeTransform } from "@angular/core";

// bryan | togglecase = 'BRYAN'
// BRYAN | togglecase = 'bryan'


@Pipe({
  name:'toggleCase'
})

export class ToggleCasePipe implements PipeTransform{


  transform(value: string, toUpper: boolean = false):string {

    console.log({value, toUpper});
    return (toUpper) ? value.toUpperCase()
                     : value.toLowerCase()
  }

}
