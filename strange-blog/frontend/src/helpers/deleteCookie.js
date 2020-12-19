import setCookie from "./setCookie";

export default function deleteCookie(name) {
    setCookie(name, "")
}