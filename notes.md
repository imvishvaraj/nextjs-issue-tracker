## features to build

### core
- creating an issue
- viewing issues
- updating an issue
- deleting an issue


### advanced
- user authentication
- assigning issues
- sorting issues
- filtering issues
- pagination
- dashboard

### Prisma
npm i prisma@5.3.1
npx prisma init

### MySQL
https://hub.docker.com/_/mysql

docker pull mysql
docker run --name issues-mysql -e MYSQL_ROOT_PASSWORD=nextjsissues


### PostgreSQL
create user issues_user with password 'issuespass123';
create database issues_db;
grant all privileges on database issues_db to issue_user;

#### connection string
postgresql://issues_user:issuespass123@127.0.0.1:5432/issues_db