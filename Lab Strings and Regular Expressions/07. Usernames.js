function usernames(arr) {
    let result = [];
    for (let email of arr) {
        let [alias,domain] = email.split('@');
        let username = alias + '.';
        let domainParts = domain.split('.');
        domainParts.forEach(p => username += p[0]);
        result.push(username);
    }
    console.log(result.join(', '))
}