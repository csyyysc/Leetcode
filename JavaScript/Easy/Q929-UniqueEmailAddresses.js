/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    const emailSet = new Set();

    for (let i = 0; i < emails.length; i++) {
        const email = emails[i].split("@");
        let local = email[0];
        let domain = email[1];

        local = local.replaceAll(".", "");
        const sign = local.indexOf("+");
        if (sign !== -1) {
            local = local.substring(0, sign);
        }
        emailSet.add(local + "@" + domain);
    }

    return emailSet.size;
};

const numUniqueEmails = (emails) => {
    return new Set(
        emails.map((email) => {
            const [local, domain] = email.split("@");
            return local.split("+").shift().split(".").join("") + "@" + domain;
        })
    ).size;
};
