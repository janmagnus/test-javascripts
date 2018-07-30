const VersionAPI = {
    API_URL: '/portal/backend/version',
    get:
        function () {
            return fetch(this.API_URL, {
                credentials: "same-origin",
            })
        }
};

export default VersionAPI