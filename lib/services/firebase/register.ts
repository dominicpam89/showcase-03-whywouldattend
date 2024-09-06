import { auth } from "@/lib/firebase.config";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	AuthError,
} from "firebase/auth";
import { RegisterSchemaType, AuthErrorType } from "@/lib/definition/auth.type";

/**
 * Registers a new user with Firebase authentication using email and password, and updates the user's profile with their full name.
 *
 * This function creates a new user account in Firebase with the provided email and password. After successful registration,
 * it updates the user's profile with the full name composed of the provided first and last names. If the registration or
 * profile update fails, an AuthError is thrown.
 *
 * @param {RegisterSchemaType} param0 - An object containing the user's registration data.
 * @param {string} param0.email - The user's email address.
 * @param {string} param0.password - The user's password.
 * @param {string} param0.firstName - The user's first name.
 * @param {string} param0.lastName - The user's last name.
 *
 * @returns {Promise<import("firebase/auth").User>} A promise that resolves to the newly registered user object.
 *
 * @throws {AuthErrorType} If there is an error during the registration or profile update process, an AuthErrorType is thrown.
 */
export async function firebaseRegisterUser({
	email,
	password,
	...registerData
}: RegisterSchemaType) {
	const { firstName, lastName } = registerData;
	const fullName = firstName + " " + lastName;
	try {
		const userCred = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		if (userCred)
			await updateProfile(userCred.user, { displayName: fullName });
		return userCred.user;
	} catch (err) {
		console.error(err);
		const error = err as AuthError;
		throw {
			name: error.name,
			message: error.message,
			additionalData: [error.code.toString()],
		} as AuthErrorType;
	}
}
