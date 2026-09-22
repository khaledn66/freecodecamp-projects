// Checks whether the authenticated user can modify a watchlist.
export function authorizeModification(req, res, next) {
  const { role, id } = req.user;
  const { userId } = req.params;

  // Parents can modify any user's watchlist.
  // Children can modify only their own watchlist.
  if (role !== "parent" && String(id) !== String(userId)) {
    return res.status(403).json({
      error: "Access denied",
    });
  }

  next();
}