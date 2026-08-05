const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.project1.e5dgaf1.mongodb.net",
  (err, records) => {
    console.log(err);
    console.log(records);
  }
);