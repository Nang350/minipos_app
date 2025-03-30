const config = {
    apiPath: "https://minipos-api-1.onrender.com",
    headers: () => {
        return {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        };
    },
};
export default config;