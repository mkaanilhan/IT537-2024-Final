import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { message } from 'ant-design-vue';
import router from '@/router';
import { auth } from '@/config/firebase';  // Auth'u doğru import edin

export const registerUser = async (email, password) => {
  try {
    console.log("1-",email)
    console.log("password",password)

    console.log("auth-",auth)

    await createUserWithEmailAndPassword(auth, email, password);
    message.success("Kullanıcı başarıyla kaydedildi! Lütfen giriş yapın.");
    router.push("/login");
  } catch (error) {
    message.error("Kullanıcı kaydı sırasında bir hata oluştu! Lütfen tekrar deneyin.");
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const timestamp = new Date().getTime();
    const result = { user: userCredential.user, timestamp };
    
    const setLocalStorage = () => {
      localStorage.setItem("user_grabby", JSON.stringify(userCredential.user));
      localStorage.setItem("timestamp_grabby", JSON.stringify(timestamp));
    };

    setLocalStorage();

    message.success("Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz...");
    _.delay(() => (window.location.href = "/"), 3000);

    return result;
  } catch (error) {
    message.error("Geçersiz email veya şifre.");
  }
};

export const logOutUser = async () => {
  await signOut(auth);
  localStorage.removeItem("user_grabby");
  localStorage.removeItem("timestamp_grabby");
  window.location.href = "/";
};
