const Dicrise = () => {
    const user={
        firstName:'Ashraf',
        lastName:{
            name:{
                name2:'rafi',
            },

        },
    };
    const {firstName,lastName: {name:{name2}}}=user;
    const lname=user.lastName.name.name2;
    const fname=user.firstName;

    return (
        <div>
            <h2>Hello {firstName} {name2}</h2>
            <h2>Hello {fname+' '+lname}</h2>
        </div>
    );
};

export default Dicrise;