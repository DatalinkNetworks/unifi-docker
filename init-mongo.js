db.getSiblingDB(process.env.MONGO_DBNAME).createUser({user: process.env.MONGO_USER, pwd: process.env.MONGO_PASS, roles: [{role: "dbOwner", db: process.env.MONGO_DBNAME}]});
db.getSiblingDB(process.env.MONGO_DBNAME + "_stat").createUser({user: process.env.MONGO_USER, pwd: process.env.MONGO_PASS, roles: [{role: "dbOwner", db: process.env.MONGO_DBNAME+ "_stat"}]});
