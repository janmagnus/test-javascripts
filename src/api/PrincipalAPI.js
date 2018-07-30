const PrincipalAPI = {
    API_URL: '/portal/backend/principal',
    get:
        function () {
            return fetch(this.API_URL, {
                credentials: "same-origin",
            })
        }
};

export default PrincipalAPI