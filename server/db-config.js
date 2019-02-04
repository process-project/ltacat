module.exports = {
 databaseURL: process.env.DATABASE_URL || "postgres://postgres@localhost/frbcat",
 csvURL: process.env.CSV_URL || "http://www.frbcat.org/frbcat.csv",
  hrPool: {
    user: process.env.HR_USER || 'hspreeuw',
    password: process.env.HR_PASSWORD || 'gxI4h2h09B6E22dNYpf7',
    connectString: process.env.HR_CONNECTIONSTRING || 'db.lofar.target.rug.nl:1521/db.lofar.target.rug.nl',
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};
