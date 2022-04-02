import React from "react";

const Login = () => {

    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [error,setError]= React.useState(null)

    const procesarDatos =e =>{
        e.preventDefault();
        if(!email.trim()){
            console.log('ingrese email')
            setError('ingrese email')
            return
        }
        if(!password.trim()){
            console.log('ingrese password')
            setError('ingrese password')
            return
        }
        if(password.length<6){
            console.log('pass debe ser mayor a 6 caracteres')
            setError('pass debe tener minimo 6 caracteres')
            return
        }
        setError(null)
        console.log('all validations passed')
    }
  return (
    <div className="mt-5">
      <h3 className="text-center">Registrate</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>{
              error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
              )
          }
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Ingrese Email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Ingrese Contraseña"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <div className="d-flex flex-column">
              <button className="btn btn-lg btn-dark btn-block mb-3" type="submit">
                Ingresar
              </button>

              <button className="btn btn-sm btn-info btn-block" type="button">
                ¿No tienes cuenta?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
