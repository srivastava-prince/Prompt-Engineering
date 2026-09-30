const mongoose = require("mongoose")
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const url = "mongodb+srv://princesrivastava226001_db_user:IZb2bndJGyo03e6b@cluster0.e471nxu.mongodb.net/api_collection?appName=Cluster0"

mongoose.connect(url)
    .then((result) => {
        console.log('mongodb connected')


    }).catch((err) => {
        console.log(err)

    });