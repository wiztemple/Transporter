
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR (100) NOT NULL,
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR (100),
  lastname VARCHAR (100),
  email VARCHAR(100) NOT NULL UNIQUE,
  role_id INTEGER REFERENCES role(role_id),
  password varchar (250) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT Now()
);

CREATE TABLE rides (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  location VARCHAR(250) NOT NULL,
  destination VARCHAR(250) NOT NULL,
  seats INTEGER NOT NULL,
  price INTEGER NOT NULL,
  departure DATE NOT NULL,
  vehicle_type VARCHAR(250) NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY(userId) REFERENCES users(id),
  status_id INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT Now()
);

CREATE TABLE requestRides (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  ride_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL,
  FOREIGN KEY(userID) REFERENCES users(id),
  FOREIGN KEY(rideID) REFERENCES rides(id)
);
