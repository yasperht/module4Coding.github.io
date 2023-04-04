var names=new Array();
/*Ingresamos todos los nombres en el arreglo*/
names[0]="Josue";
names[1]="Meliodas";
names[2]="Scannor";
names[3]="Ban";
names[4]="Elizabeth";
names[5]="Biscuit";
names[6]="Oliva"
names[7]="Yujiro";
names[8]="Baki";
names[9]="AliJr";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}