## Archivo de Variables de Entorno `.env` gnando:

Crear un archivo de variables de entorno `.env` en la raiz del proyecto y asigne:

1. La configuración de empleada de la base de datos.
```
    DB_NAME= << Nombre de la Base de Datos >>               --> Ej: DB_NAME= HealthFood
    DB_USER= << Nombre de Usuario de la Base de Datos>>     --> Ej: DB_USER= postgres
    DB_PASS= << Password de la Base de Datos >>             --> Ej: DB_PASS= postgres
    DB_HOST= << Puerto Host de la base de datos >>          --> Ej: DB_HOST= localhost
    DB_DIAL= << Asigne el tipo de base de datos empleada >> --> Ej: DB_DIAL= postgres

    ** Nombres permitidos para DB_DIAL: mysql | postgres | sqlite | mariadb | mssql | db2 | snowflake | oracle
```

** OPTIONAL : Agregue el número de puerto `PORT` a epmlear para desarrollo `DB_PORT_DEV`, producción `DB_PORT_PRO` y testing `DB_PORT_TEST`, por defecto estos se ejecutaran en los puertos `5432`, `5541` y `54320` respectivamente.

2. ** OPTIONAL : Asigne el número de puerto `PORT` en el cual ejecutara su servidor, ejemplo `PORT=4000`, por defecto este se ejecuta en el puerto `3001`.

3. Asigne la KEY generada en su registro 
API_KEY= 24d804e987544799be1173994b1fbb9b