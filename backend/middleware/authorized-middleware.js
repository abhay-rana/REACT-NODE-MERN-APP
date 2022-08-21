const isAuthorizedUSer = (...roles) => {
	return (req, res, next) => {
		if (roles.includes(req.user.role)) {
			return res.json({
				message: `${req.user.fullname} is not allowed to perform this operation`,
			});
		}
		next();
	};
};

export default isAuthorizedUSer;

"file 5 chnaged"