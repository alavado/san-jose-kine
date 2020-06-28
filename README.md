pm2 start yarn --interpreter bash --name "San Jose Strapi dev" -- strapi develop

# Write your query or mutation here
mutation {
  createPaciente (
    input: {
      data: {
      	nombre: "Guillermo Pérez Antillanca"
        fecha_nacimiento: "1976-03-01"
        rut: "12595454-2"
        sexo: Masculino
        diagnostico: "ACV triple"
      }
    }
  ) {
    paciente {
      nombre
    }
  }
}