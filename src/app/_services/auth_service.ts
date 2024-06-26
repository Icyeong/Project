import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "@/_firebase/firebaseConfig";

const auth = getAuth(app);

// 이메일/비밀번호 로그인
const signInWithEmailPassword = async ({ email, password }: { email: string; password: string }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken();
    return { token, user };
  } catch (error) {
    console.error("Error signing in with email and password:", error);
    throw error;
  }
};

// 구글 로그인
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const token = await user.getIdToken();
    return { token, user };
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};

// 로그아웃
const LogOut = () => {
  try {
    return signOut(auth);
  } catch (error) {
    throw error;
  }
};

// 이메일 회원가입
const signupWithEmail = async ({ email, password }: { email: string; password: string }) => {
  try {
    const result = createUserWithEmailAndPassword(auth, email, password);
    const user = (await result).user;
    const token = await user.getIdToken();
    return { token, user };
  } catch (error) {
    throw error;
  }
};

export const AuthService = {
  signInWithGoogle,
  signInWithEmailPassword,
  LogOut,
  signupWithEmail,
};
