import {
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { usersCol } from "../firebase";
import { User } from "../types";
import { fireStore } from "../firebase";

const getUsers = async () => {
  const data = await getDocs(usersCol);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

const getUser = async (userId: string) => {
  const userDocRef = doc(fireStore, "users", userId);
  const docSnap = await getDoc(userDocRef);
  return docSnap.data();
};

const createUser = async (user: User) => {
  const userDocRef = doc(usersCol);
  await setDoc(userDocRef, {
    firstName: user.firstName,
    lastName: user.lastName,
  });
};

const updateUser = async (updatedUser: User) => {
  const { id, ...user } = updatedUser;
  const userDocRef = doc(usersCol, id as string);
  await updateDoc(userDocRef, {
    firstName: user.firstName,
    lastName: user.lastName,
  });
};

const deleteUser = async (userId: string) => {
  const userDocRef = doc(usersCol, userId);
  await deleteDoc(userDocRef);
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
