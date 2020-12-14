export default function http(path, method, body = {}, correct, uncorrect) {
    console.log(JSON.stringify(body))
     fetch(path, {
        method: method,
        body: Object.keys(body).length === 0 ? null : JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: "include",
        mode: "cors"
    }).then((response) => {
        let jsonPromise = response.json();

        if (response.status >= 400) {
            return jsonPromise.then(response => uncorrect(response));
        } else {
            jsonPromise.then(response => correct(response))
        }
    })
}