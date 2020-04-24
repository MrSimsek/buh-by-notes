let notDeciedYet: any = 5;
notDeciedYet.someDefaultMethod(); // it might exist at runtime
notDeciedYet.toFixed(); // this is exist in Number prototype but compiler does not check

let prettySure: number = 5;
prettySure.toFixed(); // this is safe

let list: any[] = [1, true, 'free'];
list[1] = 100;
