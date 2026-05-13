import jwt from "jsonwebtoken";

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "password";
const AUTH_SECRET = process.env.AUTH_SECRET || "change-this-secret";
export const ADMIN_COOKIE_NAME = "aptech_admin";

if (!process.env.AUTH_SECRET) {
  console.warn("AUTH_SECRET is not defined. Admin cookies will be signed with a placeholder secret.");
}

export function isAdminValid(username, password) {
  return username === ADMIN_USER && password === ADMIN_PASSWORD;
}

export function createAdminToken() {
  return jwt.sign({ user: ADMIN_USER, role: "admin" }, AUTH_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyAdminToken(token) {
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, AUTH_SECRET);
  } catch (error) {
    return null;
  }
}

export function verifyAdminRequest(request) {
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  return verifyAdminToken(token);
}
