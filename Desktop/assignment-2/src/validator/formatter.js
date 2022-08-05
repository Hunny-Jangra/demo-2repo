const nameofString = "          Nodejs is very simplest as compared to others language                 ";

let trimming = () => {
    console.log(nameofString.trim());
    console.log(nameofString.toLowerCase());
    console.log(nameofString.toUpperCase());
}

module.exports.trimming = trimming;