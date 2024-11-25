If you prefer running postgres using docker like ,
I included a docker-compose.yaml file to spin an instance.\
#### Steps
1. Create a .env file if you dont have one in this directory.
2. Add the environment variables:
```bash
#prisma URL
DATABASE_URL=postgres://username:password@localhost:5432/airbnb #my db is airbnb


# DATABASE CREDENTIALS 
POSTGRES_USER=username
POSTGRES_DB=airbnb
POSTGRES_PASSWORD=password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432

#PG ADMIN credentials if needed
PGADMIN_EMAIL=admin@admin.com
PGADMIN_PASSWORD=admin
```
3. Run `docker-compose up` or `docker-compose -d`
4. When the images are pulled and container started, you should be ready to run the migrations



