CREATE TABLE users (
  id serial PRIMARY KEY,
  firstname varchar(100),
  lastname varchar(100),
  email varchar(100) not null,
  is_admin int DEFAULT 0,
  password varchar(250) not null,
  created_at TIMESTAMPTZ DEFAULT Now()
);

CREATE TABLE rides (
  id serial PRIMARY KEY,
  title varchar(250) not null,
  from varchar(250) not null,
  to varchar(250) not null,
  seats int not null,
  price int not null,
  vehicle_type varchar(250) not null,
  user_id int not null,
  status_id int DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT Now()
);

CREATE TABLE role (
    id serial PRIMARY KEY,
    role_name varchar(100) NOT NULL,
    user_id int NOT NULL
);