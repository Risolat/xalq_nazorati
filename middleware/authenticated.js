export default function ({ $auth, redirect, app }) {
    // let user = localStorage.getItem('auth._token.local');
    // console.log(user)
    if (localStorage.getItem('auth._token.local') === false) {
        return redirect(app.localePath(`/login`));
    }
}