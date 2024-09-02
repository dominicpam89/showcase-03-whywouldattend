export type AuthenticatedUserType = {
	uid: string;
	displayName: string;
	email: string;
	emailVerified: boolean;
	photoURL: string | null;
};

export type AuthErrorType = {
	name: string;
	message: string;
	additionalData: Array<string | {}>;
};

import { z } from "zod";

export const registerSchema = z
	.object({
		firstName: z
			.string()
			.min(3, "First name must be at least 3 characters long")
			.max(50, "First name must be no more than 50 characters long")
			.regex(/^[a-zA-Z]+$/, "First name can only contain letters"),
		lastName: z
			.string()
			.min(3, "Last name must be at least 3 characters long")
			.max(50, "Last name must be no more than 50 characters long")
			.regex(/^[a-zA-Z]+$/, "Last name can only contain letters")
			.optional(),
		email: z.string().email("Invalid email address"), // Checks for a valid email format
		password: z
			.string()
			.min(8, "Password must be at least 8 characters long") // Minimum length requirement
			.max(64, "Password must be no more than 64 characters long") // Maximum length requirement
			.regex(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
			.regex(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase letter
			.regex(/\d/, "Password must contain at least one number") // At least one number
			.regex(
				/[@$!%*?&#]/,
				"Password must contain at least one special character"
			), // At least one special character
		confirmationPassword: z.string().min(1, "Confirmation cannot be empty!"),
	})
	.superRefine((data, ctx) => {
		if (data.password !== data.confirmationPassword) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["confirmationPassword"],
				message: "Passwords do not match",
			});
		}
	});
export type RegisterSchemaType = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email address"), // Checks for a valid email format
	password: z
		.string()
		.min(8, "Password must be at least 8 characters long") // Minimum length requirement
		.max(64, "Password must be no more than 64 characters long") // Maximum length requirement
		.regex(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
		.regex(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase letter
		.regex(/\d/, "Password must contain at least one number") // At least one number
		.regex(
			/[@$!%*?&#]/,
			"Password must contain at least one special character"
		), // At least one special character
});
export type LoginSchemaType = z.infer<typeof loginSchema>;
