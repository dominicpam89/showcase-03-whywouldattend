import { FriendType } from "@/lib/definition/friends-list.type";
import { db, storage } from "@/lib/firebase.config";
import {
	collection,
	query,
	where,
	getDocs,
	addDoc,
	doc,
	updateDoc,
	deleteDoc,
	getDoc,
} from "firebase/firestore";
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes,
} from "firebase/storage";

const COLLECTION_NAME = "friendsList";
const cols = collection(db, COLLECTION_NAME);

export type QueryResponseType<T> = {
	error: boolean;
	name: string;
	message: string;
	data: T | null;
};

// READ
export async function getFriends(uid: string) {
	try {
		const q = query(cols, where("uid", "==", uid));
		const snapshot = await getDocs(q);
		const friends: FriendType[] = snapshot.docs.map(
			(doc) => doc.data() as FriendType
		);
		let data = null;
		if (friends) data = friends;
		if (data)
			return {
				error: false,
				name: "query success",
				message: "successfully fetch friends list",
				data,
			} satisfies QueryResponseType<FriendType[]>;
		else throw new Error("No data found");
	} catch (error) {
		console.error(error);
		throw error as Error;
	}
}

// READ ONE BY ID
export async function getFriend(friendId: string) {
	try {
		const friendDocRef = doc(db, COLLECTION_NAME, friendId);
		const friendDoc = await getDoc(friendDocRef);

		if (friendDoc.exists()) {
			const friendData = friendDoc.data() as FriendType;
			return friendData;
		} else {
			throw new Error("Friend not found");
		}
	} catch (error) {
		const err = new Error("Error fetching single document with given id");
		console.error("Error fetching document: ", error);
		throw {
			error: true,
			name: "get one friend by id",
			message: "failed to get one friend by id",
			data: err,
		} satisfies QueryResponseType<Error>;
	}
}

// CREATE
export async function createFriend({
	name,
	image,
	uid,
}: {
	name: string;
	image: File;
	uid: string;
}) {
	try {
		const imageRef = ref(storage, `/showcase-1/friends-list/${image.name}`);
		await uploadBytes(imageRef, image);
		const imageURL = await getDownloadURL(imageRef);

		const friendData: Omit<FriendType, "id"> = {
			name,
			image: imageURL,
			balance: 0,
			bill: 0,
			uid,
		};

		const docRef = await addDoc(cols, friendData);
		const friendDoc = doc(db, COLLECTION_NAME, docRef.id);
		await updateDoc(friendDoc, { id: docRef.id });
		return {
			error: false,
			name: "create friend",
			message: "successfully created friend data",
			data: { ...friendData, id: docRef.id.toString() },
		} satisfies QueryResponseType<FriendType>;
	} catch (error) {
		throw error as Error;
	}
}

// UPDATE
export async function updateFriend({
	friendId,
	balance,
	bill,
	imageFile,
}: {
	friendId: string;
	balance: number;
	bill: number;
	imageFile?: File;
}) {
	try {
		const friendDocRef = doc(db, COLLECTION_NAME, friendId);
		const updatedData: Partial<FriendType> = { balance, bill };

		if (imageFile) {
			const imageRef = ref(
				storage,
				`/showcase-1/friends-list/${imageFile.name}`
			);
			await uploadBytes(imageRef, imageFile);
			const imageUrl = await getDownloadURL(imageRef);
			updatedData.image = imageUrl;
		}

		await updateDoc(friendDocRef, updatedData);
		return {
			error: false,
			name: "update friend",
			message: "successfully updated",
			data: null,
		} satisfies QueryResponseType<null>;
	} catch (error) {
		console.error("Error updating document: ", error);
		throw error as Error;
	}
}

// DELETE
export async function deleteFriend({
	friendId,
	imageUrl,
}: {
	friendId: string;
	imageUrl: string;
}) {
	try {
		const friendDocRef = doc(db, COLLECTION_NAME, friendId);
		const imageRef = ref(storage, imageUrl);

		await deleteDoc(friendDocRef);
		await deleteObject(imageRef);
		return {
			error: false,
			name: "delete friend",
			message: "successfully deleted friend data",
			data: null,
		} satisfies QueryResponseType<null>;
	} catch (error) {
		console.error("Error deleting document: ", error);
		throw error as Error;
	}
}
