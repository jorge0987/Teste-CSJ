const faker = require("faker");
const Seeder = require("mysql-db-seed").Seeder;
const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");
// ES6 use `import {Seeder} from "mysql-db-seed";

// Generate a new Seeder instance
const seed = new Seeder(
  10, 
  "db_host",
  "db_username",
  "db_password",
  "database"
);
let stream = fs.createReadStream("bezkoder.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();
    // create a new connection to the database
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "012345",
      database: "testdb"
    });
    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =

          "INSERT INTO category (id, name, description, created_at) VALUES ?";

        connection.query(query, [csvData], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });
stream.pipe(csvStream);

{console.log(csvData);}

(async () => {
  await seed.seed(
    30,
    "users", 
    {
      email: faker.internet.email,
      profile_picture: faker.image.people,
      first_name: faker.name.firstName,
      last_name: faker.name.lastName,
      uuid: faker.random.uuid,
      created_at: seed.nativeTimestamp(),
      updated_at: seed.nativeTimestamp()
    }
  )
  seed.exit();
  process.exit();
})();