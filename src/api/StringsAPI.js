const StringsAPI = {
    API_URL: '/portal/backend/strings',
    get:
        function (language) {
            return fetch(this.API_URL + "/" + language, {
                credentials: "same-origin",
            })
        }
};

export default StringsAPI