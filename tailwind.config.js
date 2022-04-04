module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
        fontFamily: {
            poppins: ["Poppins, sans-serif"],
            montserrat: ["Montserrat, sans-serif"]
        },
        container: {
            center: true,
            padding: "1rem",
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}