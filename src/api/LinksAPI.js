const LinksAPI = {
    API_URL: '/portal/backend/links',
    getAll:
        function () {
            return fetch(this.API_URL, {
                credentials: "same-origin",
            })
        }
};

export default LinksAPI