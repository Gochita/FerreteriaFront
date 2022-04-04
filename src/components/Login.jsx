import React from "react";
import fire,{db} from "../firebase";
import { getAuth, createUserWithEmailAndPassword,
   signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, } 
from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

const auth = getAuth(fire);
const googleAuth = new GoogleAuthProvider();
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [registro, setRegistro] = React.useState(true);
  const navigate = useNavigate();

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      console.log("ingrese email");
      setError("ingrese email");
      return;
    }
    if (!password.trim()) {
      console.log("ingrese password");
      setError("ingrese password");
      return;
    }
    if (password.length < 6) {
      console.log("pass debe ser mayor a 6 caracteres");
      setError("pass debe tener minimo 6 caracteres");
      return;
    }
    setError(null);

    if (registro) {
      registrar();
    }else{
      login();
    }
  };
const login = React.useCallback(async() =>{

  try {
    const res=await signInWithEmailAndPassword(auth,email,password)
    console.log(res.user)
    setEmail("");
    setPassword("");
    setError(null)
    navigate("/admin");
  } catch (error) {
    if(error.message === "auth/invalid-email"){
      setError("Email no corresponde")
    }
    if(error.code === "auth/user-not-found"){
      setError("Email no registrado")
    }
    if(error.code === "auth/wrong-password"){
      setError("Contraseña incorrecta")
    }
    console.log(error);
  }
},[email,password, navigate]);


const SignInGoogle = async () => {
  await signInWithPopup(auth, googleAuth)
    .then(async (result) => {
      await setDoc(doc(db, "usuarios", "google"), {
        email: result.user.email,
        uid: result.user.uid,
      });
      navigate("/admin");
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

  const registrar = React.useCallback(async () => {

    try {
    
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, "usuarios"), {
        email: res.user.email,
        uid: res.user.uid,
      });
      console.log(res);
      setEmail("");
      setPassword("");
      setError(null);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("este email no es valido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Este email ya está en uso");
      }
    }
  }, [email, password,navigate]);

  return (
    <div className="mt-5">
      <h3 className="text-center">{registro ? "Registrate" : "Ingresa"}</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            {error && <div className="alert alert-danger">{error}</div>}
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Ingrese Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Ingrese Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="pagination gap-2 d-md-flex justify-content-center">
              <button
                // className="btn btn-sm btn-dark btn-block mb-3"
                className="btn btn-sm btn-outline-dark btn-block mb-3"
                type="submit"
              >
                {registro ? "Registrate" : "Ingresa"}
              </button>

              <button
                className="btn btn-sm btn-outline-danger btn-block mb-3"
                onClick={() => setRegistro(!registro)}
                type="button"
              >
                {registro ? "Ya tienes cuenta?" : "No tienes cuenta?"}
              </button>
            </div>
          </form>
          <hr />
          <div className="row justify-content-center">
            <button
              className="btn btn-dark btn-sm mt-2 mb-2"
              type="button"
              style={{ margin: "0 auto" }}
              onClick={SignInGoogle}
            >
              <i className="fa-brands fa-google me-2 "></i>
              Accede con Google
            </button>
            </div>    
        </div>
      </div>
    </div>
  );
};

export default Login;
