const mongoClient = require("../Database/connection");

const findAll = async (req, res) => {
    try {
        const result = await mongoClient.findAll();
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing database opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const findbestAll = async (req, res) => {
    try {
        const result = await mongoClient.findAll();
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing database opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

module.exports={findAll,findbestAll}