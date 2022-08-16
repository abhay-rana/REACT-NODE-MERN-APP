import jwt from "jsonwebtoken";
import "dotenv/config";

//middleware for the authentication

const isAuthenticatedUser = (req, res, next) => {
	const { jwt_token } = req.cookies;
	if (!jwt_token) {
		return res.json({
			success: false,
			message: "you are not logged in",
		});
	}
	const decode = jwt.verify(jwt_token, process.env.JWT_SECRET);
	req.user=await User.findById(decode._id);
    next(); 
};

export default isAuthenticatedUser;