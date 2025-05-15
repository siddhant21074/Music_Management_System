import img4 from "D:/Siddhant/React/Music Management/Images and video/img4.jpg";

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted!");
    };

    return (
        <>
            <div style={{ display: 'flex', backgroundColor: 'white' }}>
                <img src={img4} alt="Signup Banner" style={{ objectFit: 'cover', height: '100%', width: '70%' }} />

                <form onSubmit={handleSubmit} style={{ color: 'purple', marginLeft: 10 }}>
                    <h1 style={{ color: 'purple', fontSize: 50 }}>Sign Up</h1>

                    <div style={{ fontSize: 25, display: 'flex' }}>
                        <label htmlFor="firstName">First Name</label>
                        <label htmlFor="lastName" style={{ paddingLeft: 80 }}>Last Name</label>
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <input type="text" id="firstName" name="firstName" style={{ borderRadius: '20px', width: '150px', padding: 8 }} />
                        <input type="text" id="lastName" name="lastName" style={{ borderRadius: '20px', width: '150px', marginLeft: 25, padding: 8 }} />
                    </div>

                    <br />

                    <div style={{ fontSize: 25, display: 'flex' }}>
                        <label htmlFor="email">Email</label>
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <input type="email" id="email" name="email" style={{ borderRadius: '20px', width: '270px', padding: 8 }} />
                    </div>

                    <br />

                    <div style={{ fontSize: 25, display: 'flex' }}>
                        <label htmlFor="password">Password</label>
                    </div>

                    <div style={{ fontSize: 25 }}>
                        <input type="password" id="password" name="password" style={{ borderRadius: '20px', width: '200px', padding: 8 }} />
                    </div>

                    <br />
                    <button type="submit" style={{ color: 'purple', fontSize: 23, borderRadius: '20px', backgroundColor: '#FFFFC5', padding: 7 }}>Register</button>
                    <br />
                    <br />

                    <div>
                        <h2>Already have an account?</h2>
                        <button style={{ color: 'purple', fontSize: 23, borderRadius: '20px', backgroundColor: '#FFFFC5', padding: 7 }}>Sign In</button>
                    </div>
                </form>
            </div>
        </>
    );
}
