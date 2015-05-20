// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$ ('#btncalcular') .on ('tap' , function () { 
    navigator .vibrate (1000);
 });
   $ ('#btninicio') .on ('tap' , function () { 
    navigator .vibrate (1000);
 });
	
	
	var nombre;
    var dia;
    var mes;
    var anio;	


$(document).ready(function(e) {

	
$('#btncalcular').click(function(e){
		
		var diac;
		diac=$('#txtdia').val();
		var mesc;
		mesc=$('#txtmes').val();
		var anioc;
		anioc=$('#txtanio').val();
		
		var fecha_actual = new Date ();
		//alert (fecha_actual);
		var fecha_proximo = new Date (fecha_actual.getFullYear(),mesc -1 ,diac);
		//alert (fecha_proximo);
		var fecha_actual = new Date (fecha_actual.getFullYear(), fecha_actual.getMonth(), fecha_actual.getDate());
		//alert (fecha_actual);
		var fecha_nacimiento = new Date (anioc,mesc-1,diac);
		//alert (fecha_nacimiento);
		var edad=fecha_actual.getFullYear()-anioc;
		
		if (fecha_proximo <= fecha_actual)
		{
			fecha_proximo = new Date (fecha_proximo.getFullYear()+1,fecha_proximo.getMonth(),fecha_proximo.getDate());
			$('#pre').show ();
			
		}
		else
		{
			edad=edad-1
			
		}
		var dias_faltantes = (fecha_proximo - fecha_actual)/1000/60/60/24;
		
		dias_faltantes = Math.round(dias_faltantes);
		
		
		$('#day').text( $('#txtnombre').val() + ' FALTAN ' + dias_faltantes + ' DIAS PARA TU CUMPLEAÑOS '); 
	
		
		 $('#bird').text(' tienes '+ edad  +  ' años hoy');
		 
		if (dias_faltantes <7)
		{
				
	       $('#age').show();
		   
		}
		else
		{
			
		   $('#age').hide();
		}
		
});
      
	 
	 $('#btninicio').click(function(e){
		$('#txtnombre').val('')
		$('#txtdia').val('')
		$('#txtmes').val('')
		$('#txtanio').val('')
		
		
});

});//ready
}); 
});

