export const generate_safe_name = (file_name, user_id) => {
    if(!file_name || !user_id) {
        return ''
    }
    const today = new Date();
    return `${user_id}/${today.getTime()}/${file_name.replace(/[^a-zA-Z0-9.]/g, "_")}`
}