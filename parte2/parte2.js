var myarreglo = [
    {
      "aseguradora": "AFIRME",
      "cotizacion": {
        "cliente": {
          "tipoPersona": "fisica",
          "nombre": "prueba",
          "apellidoPat": "prueba",
          "apellidoMat": "prueba",
          "rfc": "",
          "fechaNacimiento": "01-01-2005",
          "ocupacion": "",
          "curp": "",
          "direccion": {
            "calle": "oriente 945",
            "noExt": "410",
            "noInt": "021",
            "colonia": "prueba",
            "codPostal": "56618",
            "poblacion": "mexico",
            "ciudad": "cdmx",
            "pais": "mexico"
          },
          "edad": "18",
          "genero": "MASCULINO",
          "telefono": "",
          "email": ""
        }
      }
    }
  ];
  
  // se crea un segundo arreglo a partir del primero
  var myarreglo2 = JSON.parse(JSON.stringify(myarreglo));
  
  // se modifican algunos datos del segundo arreglo
  myarreglo2[0].cotizacion.cliente.nombre = "Cristina";
  myarreglo2[0].cotizacion.cliente.apellidoPat = "Diaz";
  myarreglo2[0].cotizacion.cliente.edad = "27";
  myarreglo2[0].cotizacion.cliente.genero = "FEMENINO";
  myarreglo2[0].cotizacion.cliente.telefono = "555-1234";
  
 
  console.log("Arreglo original:");
  console.log(myarreglo);
  console.log("Segundo arreglo:");
  console.log(myarreglo2);