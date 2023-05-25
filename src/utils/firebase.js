import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, getDocs, deleteDoc, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0PSr_FrMhgzlJbsDaAxxBBdnROgg1eak",
  authDomain: "training-ecom-6edad.firebaseapp.com",
  projectId: "training-ecom-6edad",
  storageBucket: "training-ecom-6edad.appspot.com",
  messagingSenderId: "754018740307",
  appId: "1:754018740307:web:750fb1445daecbb089fea6",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  objectsToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef)
    batch.set(newDocRef, obj)
  })
  console.log("done");
  return await batch.commit()
}

export const getCollection = async (collectionKey) => {
  const info = [];

  try {
    const querySnapshot = await getDocs(collection(db, collectionKey));

    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      info.push(docData);
    });
    return info;
  } catch (error) {
    console.error('Error retrieving collection:', error);
    return [];
  }
};

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const cartItems = []
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,  
        cartItems
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};  

export const signUpWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);


export const removeDuplicates = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(query(collectionRef));

  const uniqueIdentifiers = new Set();
  const duplicateDocs = [];
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const identifier = `${data.category}-${data.id}-${data.image}-${data.in_cart}-${data.name}-${data.price}-${data.quantity}`; // Create a unique identifier
    if (uniqueIdentifiers.has(identifier)) {
      duplicateDocs.push(doc);
    } else {
      uniqueIdentifiers.add(identifier);
    }
  });
  
  const deletePromises = duplicateDocs.map(async (doc) => {
    await deleteDoc(doc.ref);
    console.log(`Deleted duplicate document with ID: ${doc.id}`);
  });

  await Promise.all(deletePromises);
  console.log("Duplicates removed successfully.");
};
