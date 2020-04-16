
export default {
    up(){

    },
    down(size){
        const sizes = {
            xs: "575.98px",
            s: "767.98px",
            m: "991.98px",
            l: "1199.98px",
            xl: "1599.98px"
        }
        return `@media (max-width: ${sizes[size]})`
    }
}