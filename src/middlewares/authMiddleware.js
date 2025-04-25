import "dotenv/config";
import jwt from "jsonwebtoken";
import userServices from "../service/userServices.js";

export function authMiddleware(req, res, next) {
    const tokenHeader = req.headers.authorization;
    if (!tokenHeader) {
        return res.status(401).send({ message: "Token não encontrado" });
    }
    const partsToken = tokenHeader.split(" ");
    if (partsToken.length !== 2) {
        return res.status(401).send({ message: "Token inválido" });
    }

    const [scheme, token] = partsToken;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ message: "Token malformado" });
    }

    jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Token inválido" });
        }
        const user = await userServices.findUserByIdService(decoded.id);
        if (!user || !user.id) {
            return res.status(401).send({ message: "Token inválido" });
        }
        req.userId = user.id;

        return next();
    });
}