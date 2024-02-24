import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { resetRegistered, login } from 'features/user';
import Layout from '../components/layout';


const LoginPage = () => {
	// const dispatch = useDispatch();
	// const { loading, isAuthenticated, registered,user } = useSelector(
	// 	state => state.user
	// );

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	// useEffect(() => {
	// 	if (registered) dispatch(resetRegistered());
	// }, [registered]);

	const { email, password } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();

        console.log(email,password)

		// dispatch(login({ email, password }));
	};

	// if (user && isAuthenticated){
	// 	console.log('user-',user.is_active)
	// 	if (user  && user.is_staff){
	// 		console.log('admin')
	// 	return <Navigate to='/ad-dashboard' />;}
	// 	else{
	// 		console.log('user')
	// 		return <Navigate to='/dashboard' />;
			
	// 	}
	// } 

	return (
		<Layout title='Auth Site | Login' content='Login page'>
			<h1 style={{textAlign:'center'}}>Login</h1>
			<form className='mt-5' onSubmit={onSubmit} style={{padding:"10px",backgroundColor:'whitesmoke', display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem' }}>
    <div style={{ flex: 1 }}>
      <div className='form-group'>
        <label className='form-label' htmlFor='email'>
          Email
        </label>
      </div>
    </div>
    <div style={{ flex: 2 }}>
      <div className='form-group'>
        <input
          className='form-control'
          type='email'
          name='email'
          onChange={onChange}
          value={email}
          required
        />
      </div>
    </div>
  </div>
  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem' }}>
    <div style={{ flex: 1 }}>
      <div className='form-group mt-3'>
        <label className='form-label' htmlFor='password'>
          Password
        </label>
      </div>
    </div>
    <div style={{ flex: 2 }}>
      <div className='form-group mt-3'>
        <input
          className='form-control'
          type='password'
          name='password'
          onChange={onChange}
          value={password}
          required
        />
      </div>
    </div>
  </div>
  {
    
    <button className='btn btn-primary mt-4' style={{width:'50px',marginLeft:'170px'}}>Login</button>
  }
</form>

		</Layout>
	);
};

export default LoginPage;
