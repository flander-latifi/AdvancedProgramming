const validateUserData = require("./validateUserData");

describe("User Data Validation", () => {
    test("should return valid for correct user data", () => {
        const result = validateUserData({
            username: "testUser123",
            email: "test@example.com",
            password: "StrongPass1!",
            age: 25,
            referralCode: "ABCDEFGH"
        });
        expect(result.isValid).toBe(true);
        expect(result.errors).toEqual({});
    });

    test("should return error for missing username", () => {
        const result = validateUserData({
            email: "test@example.com",
            password: "StrongPass1!",
        });
        expect(result.isValid).toBe(false);
        expect(result.errors.username).toBe("Username is required");
    });

    test("should return error for invalid email", () => {
        const result = validateUserData({
            username: "validUser",
            email: "invalid-email",
            password: "StrongPass1!",
        });
        expect(result.isValid).toBe(false);
        expect(result.errors.email).toBe("Invalid email format");
    });

    test("should return error for weak password", () => {
        const result = validateUserData({
            username: "validUser",
            email: "test@example.com",
            password: "weakpass",
        });
        expect(result.isValid).toBe(false);
        expect(result.errors.password).toContain("Password must contain at least one number");
        expect(result.errors.password).toContain("Password must contain at least one special character");
    });

    test("should return error for username shorter than 3 characters", () => {
        const result = validateUserData({
            username: "ab",
            email: "test@example.com",
            password: "StrongPass1!",
        });
        expect(result.isValid).toBe(false);
        expect(result.errors.username).toBe("Username must be between 3 and 20 characters");
    });

    test("should return error for username longer than 20 characters", () => {
        const result = validateUserData({
            username: "a".repeat(21),
            email: "test@example.com",
            password: "StrongPass1!",
        });
        expect(result.isValid).toBe(false);
        expect(result.errors.username).toBe("Username must be between 3 and 20 characters");
    });

    test("should return error for age less than 18", () => {
        const result = validateUserData({
            username: "validUser",
            email: "test@example.com",
            password: "StrongPass1!",
            age: 16,
        });
        expect(result.isValid).toBe(false);
        expect(result.errors.age).toBe("User must be at least 18 years old");
    });

    test("should return error for non-numeric age", () => {
        const result = validateUserData({
            username: "validUser",
            email: "test@example.com",
            password: "StrongPass1!",
            age: "twenty",
        });
        expect(result.isValid).toBe(false);
        expect(result.errors.age).toBe("Age must be a number");
    });

    test("should return error for referral code with incorrect length", () => {
        const result = validateUserData({
            username: "validUser",
            email: "test@example.com",
            password: "StrongPass1!",
            referralCode: "ABC",
        });
        expect(result.isValid).toBe(false);
        expect(result.errors.referralCode).toBe("Referral code must be exactly 8 characters");
    });

    test("should return error for empty object", () => {
        const result = validateUserData({});
        expect(result.isValid).toBe(false);
        expect(result.errors.username).toBe("Username is required");
        expect(result.errors.email).toBe("Email is required");
        expect(result.errors.password).toBe("Password is required");
    });

    test("should return error for null input", () => {
        const result = validateUserData(null);
        expect(result.isValid).toBe(false);
        expect(result.errors.global).toBe("Invalid user data format");
    });

    test("should return error for undefined input", () => {
        const result = validateUserData(undefined);
        expect(result.isValid).toBe(false);
        expect(result.errors.global).toBe("Invalid user data format");
    });
});
