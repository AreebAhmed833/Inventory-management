class PUBLIC_DATA {
    static port = process.env.PORT || 4000;
    static mongo_uri = process.env.MONGO_URI || 'mongodb+srv://ahmedareebkhalil:vCQ5DnZaXh20Gw8C@cluster0.becth.mongodb.net/';
    static jwt_auth = process.env.JWT_AUTH || "!@#$%^&*()";

}

module.exports = {
    PUBLIC_DATA
};