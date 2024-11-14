In this folder we have the docker-compose .yaml file enabling us to run docker instance on our local.\
* To run a local instance all we need to do is to add environment variables in a .env file in this folder, like this.

`POSTGRES_USER=username
POSTGRES_DB=airbnb
POSTGRES_PASSWORD=postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
PGADMIN_EMAIL=admin@admin.com
PGADMIN_PASSWORD=admin`

`docker-compose up` to run it

We have the `schema.sql` which can be run to create the tables and the ingested data, which is similar to the json we have.







