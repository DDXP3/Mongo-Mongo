
const users = [
    {
        username: 'Alpha',
        email: 'Alpha1@gmail.com'
    },
    {
        username: 'Beta',
        email: 'Beta1@gmail.com'
    },
    {
        username: 'Delta',
        email: 'Delta1@gmail.com'
    },
    {
        username: 'Omega',
        email: 'Omega1@gmail.com'
    },
    {
        username: 'Sigma',
        email: 'Sigma1@gmail.com'
    }
];

const thoughts = [
    {
        text: "I'm Alpha",
        username: 'Alpha',
        reacts:[{
            reactBody: 'Weak',
            username: 'Sigma'
        }]
    },
    {
        text: "Alpha is so cool",
        username: 'Beta',
        reacts:[{
            reactBody: 'Simp',
            username: 'Omega'
        }]
    },
    {
        text: "I'm cool too!",
        username: 'Delta',
        reacts:[{
            reactBody: 'or not',
            username: 'Delta'
        }]
    }
];

module.exports = {users, thoughts}